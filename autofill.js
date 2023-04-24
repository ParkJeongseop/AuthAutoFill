function getBrowser() {
    if(typeof browser !== 'undefined') {
        return browser
    }else if(typeof chrome !== 'undefined') {
        return chrome
    }
}

browser = getBrowser();

var carrier = {
    SKT: '1',
    KT: '2',
    LGU: '3',
    SKT_MVNO: '4',
    KT_MVNO: '5',
    LGU_MVNO: '6'
}

var way = {
    SMS: '1',
    PASS: '2'
}

function get_RRN_GenderNum(birth, gender, foreigner) {
    // 9: 1800 ~ 1899년에 태어난 남성
    // 0: 1800 ~ 1899년에 태어난 여성
    // 1: 1900 ~ 1999년에 태어난 남성
    // 2: 1900 ~ 1999년에 태어난 여성
    // 3: 2000 ~ 2099년에 태어난 남성
    // 4: 2000 ~ 2099년에 태어난 여성
    // 5: 1900 ~ 1999년에 태어난 외국인 남성
    // 6: 1900 ~ 1999년에 태어난 외국인 여성
    // 7: 2000 ~ 2099년에 태어난 외국인 남성
    // 8: 2000 ~ 2099년에 태어난 외국인 여성
    if (birth.substr(0, 2) == '18') {
        var num = gender == '1' ? 9 : 0;
    } else if (birth.substr(0, 2) == '19' && foreigner == '0') {
        var num = gender;
    } else if (birth.substr(0, 2) == '20' && foreigner == '0') {
        var num = Number(gender) + 2;
    } else if (birth.substr(0, 2) == '19' && foreigner == '1') {
        var num = Number(gender) + 4;;
    } else if (birth.substr(0, 2) == '20' && foreigner == '1') {
        var num = Number(gender) + 6;
    }
    return num;
};

function is_MNO(carrier_code) {
    // MNO(Mobile Network Operator)
    // 이동통신망사업자
    // SKT, KT, LGU+
    return Number(carrier_code) < 4;
}

function is_MVNO(carrier_code) {
    // MVNO(Mobile Virtual Network Operator)
    // 가상이동통신망사업자
    // 알뜰폰
    return !is_MNO(carrier_code);
}

window.onload = function () {
    this.console.log('Auth Autofill (본인인증 자동완성)\n한국 휴대전화 본인인증 서비스 자동완성 브라우저 확장 프로그램');

    browser.storage.sync.get(function (data) {
        if (data.on) {
            this.console.log('ON');
            if (data.profiles) {
                var profilesOb = JSON.parse(data.profiles).profiles;
                var spI = data.selectedProfile;
                var carrier = {
                    SKT: '1',
                    KT: '2',
                    LGU: '3',
                    SKT_MVNO: '4',
                    KT_MVNO: '5',
                    LGU_MVNO: '6'
                };
                var way = {
                    SMS: '1',
                    PASS: '2'
                };

                if (window.location.hostname == 'nice.checkplus.co.kr') {
                    this.console.log('나이스신용평가정보');

                    if (this.document.getElementById('agency-skt')) { //통신사 선택페이지
                        this.console.log("통신사 선택페이지");
                        // 통신사 선택
                        if (profilesOb[spI].carrier == carrier.SKT) {
                            this.document.getElementById('agency-skt').click();
                        } else if (profilesOb[spI].carrier == carrier.KT) {
                            this.document.getElementById('agency-kt').click();
                        } else if (profilesOb[spI].carrier == carrier.LGU) {
                            this.document.getElementById('agency-lgu').click();
                        } else {
                            //MVNO 선택
                            this.document.querySelector("#agency-and").click();
                            if (profilesOb[spI].carrier == carrier.SKT_MVNO) {
                                var carrierBtn = '#SKT > label';
                            } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                                var carrierBtn = '#KT > label';
                            } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                                var carrierBtn = '#LGU+ > label';
                            }
                            this.document.querySelector(carrierBtn).click();
                            this.document.querySelector("#mvnoLayerCheck").click();
                            
                        }
                        // 약관 동의
                        this.document.querySelector("#ct > fieldset > ul.agreelist.all > li > span > label:nth-child(2)").click();

                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            this.document.querySelector("#btnSms").click();
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            this.document.querySelector("#btnPass").click();
                        }
                    } else {
                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            if (this.document.getElementById('smsAuth').title != '선택됨') { //sms아닐때
                                this.document.getElementById('smsAuth').click();
                            } else {
                                this.document.getElementById('username').value = profilesOb[spI].name;
                                this.document.getElementById('mynum1').value = profilesOb[spI].birth.substr(2, 6);
                                this.document.getElementById('mynum2').value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner);
                                this.document.getElementById('mobileno').value = profilesOb[spI].phone_number;
                                this.document.getElementById('answer').focus();
                            }
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            if (this.document.getElementById('simpleAuth').title != '선택됨') { //PASS아닐때
                                this.document.getElementById('simpleAuth').click();
                            } else {
                                this.document.getElementById('username').value = profilesOb[spI].name;
                                this.document.getElementById('mobileno').value = profilesOb[spI].phone_number;
                                this.document.getElementById('answer').focus();
                            }
                        }
                    }

                } else if (window.location.hostname == 'pcc.siren24.com') {
                    this.console.log('서울신용평가정보');

                    if (this.document.querySelector("#ct > form:nth-child(1) > fieldset > ul.agency_select__items")) { //통신사 선택페이지
                        this.console.log('통신사 선택 페이지');
                        if (profilesOb[spI].carrier == carrier.SKT) {
                            var carrierBtn = 'agency-sk';
                        } else if (profilesOb[spI].carrier == carrier.KT) {
                            var carrierBtn = 'agency-kt';
                        } else if (profilesOb[spI].carrier == carrier.LGU) {
                            var carrierBtn = 'agency-lgu';
                        } else {
                            var carrierBtn = 'agency-and';
                        }
                        this.document.getElementById(carrierBtn).click();
                        if (!is_MNO(profilesOb[spI].carrier)) {
                            if (profilesOb[spI].carrier == carrier.SKT_MVNO) {
                                this.document.querySelector("#skm_mvno").click();
                            } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                                this.document.querySelector("#ktm_mvno").click();
                            } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                                this.document.querySelector("#lgm_mvno").click();
                            }
                            this.document.querySelector("#btnSelect").click();
                        }

                        // 약관 동의
                        this.document.querySelector("#ct > form:nth-child(1) > fieldset > ul.agreelist.all > li > span > label:nth-child(2)").click();
                    
                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            this.document.querySelector("#btnSms").click();
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            this.document.querySelector("#btnPass").click();
                        }
                    } else {
                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            if (this.document.querySelector("#sms_auth").title != '선택됨') { //sms아닐때
                                this.document.querySelector("#sms_auth").click();
                            } else {
                                this.document.getElementById('userName').value = profilesOb[spI].name;
                                this.document.getElementById('birthDay1').value = profilesOb[spI].birth.substr(2, 6);
                                this.document.getElementById('birthDay2').value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner)
                                this.document.getElementById('No').value = profilesOb[spI].phone_number;
                                this.document.getElementById('secur').focus();
                            }
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            if (this.document.querySelector("#qr_auth").title != '선택됨') { //sms아닐때
                                this.document.querySelector("#sms_auth").click();
                            } else {
                                this.document.getElementsByName('userName')[0].value = profilesOb[spI].name;
                                this.document.getElementsByName('No')[0].value = profilesOb[spI].phone_number;
                                this.document.getElementById('secur').focus();
                            }
                        }
                    }

                } else if (window.location.hostname == 'safe.ok-name.co.kr') {
                    this.console.log('코리아크레딧뷰로');

                    if (document.querySelector("#ct > form > fieldset > ul.agency_select__items")) { //통신사 선택페이지
                        this.console.log("통신사 선택페이지");
                        // 통신사 선택
                        if (profilesOb[spI].carrier == carrier.SKT) {
                            var carrierBtn = 'agency-sk';
                        } else if (profilesOb[spI].carrier == carrier.KT) {
                            var carrierBtn = 'agency-kt';
                        } else if (profilesOb[spI].carrier == carrier.LGU) {
                            var carrierBtn = 'agency-lgu';
                        } else {
                            var carrierBtn = 'agency-and';
                        }
                        this.document.getElementById(carrierBtn).click();
                        if (carrierBtn == 'agency-and') {
                            if (profilesOb[spI].carrier == carrier.SKT_MVNO) {
                                this.document.querySelector("#wrap > div:nth-child(5) > div.layer-pop.agency_select__popup > div.pop-con_02 > ul > li.first-item > div.licensee_title > a > label").click();
                            } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                                this.document.querySelector("#wrap > div:nth-child(5) > div.layer-pop.agency_select__popup > div.pop-con_02 > ul > li:nth-child(2) > div.licensee_title > a > label").click();
                            } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                                this.document.querySelector("#wrap > div:nth-child(5) > div.layer-pop.agency_select__popup > div.pop-con_02 > ul > li:nth-child(3) > div.licensee_title > a > label").click();
                            }
                            this.document.querySelector("#mvnoCheck").click();
                        }
                        
                        // 약관 동의
                        this.document.querySelector("#ct > form > fieldset > ul.agreelist.all > li > span > label:nth-child(2)").click();
                        
                        // 인증하기 버튼
                        this.document.querySelector("#btnPass").click();
                    } else {
                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            if (document.querySelector("#header > ul > li.on").innerText != "문자(SMS)로 인증") { //sms아닐때
                                this.document.getElementById('sms_auth').click();
                            } else {
                                this.document.getElementById('nm').value = profilesOb[spI].name;
                                this.document.getElementById('ssn6').value = profilesOb[spI].birth.substr(2, 6);;
                                this.document.getElementById('ssn1').value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner);
                                this.document.getElementById('mbphn_no').value = profilesOb[spI].phone_number;
                                this.document.getElementById('nm').focus();
                                this.document.getElementById('ssn6').focus();
                                this.document.getElementById('ssn1').focus();
                                this.document.getElementById('mbphn_no').focus();
                                this.document.getElementById('captchaCode').focus();
                            }
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            if (document.querySelector("#header > ul > li.on").innerText != "PASS로 인증하기") { //PASS아닐때
                                this.document.getElementById('qr_auth').click();
                            } else {
                                this.document.getElementById('nm').value = profilesOb[spI].name;
                                this.document.getElementById('mbphn_no').value = profilesOb[spI].phone_number;
                                this.document.getElementById('nm').focus();
                                this.document.getElementById('mbphn_no').focus();
                                this.document.getElementById('captchaCode').focus();
                            }
                        }
                    }

                } else if (window.location.hostname == 'www.mobile-ok.com') {
                    this.console.log('드림시큐러티');
                    
                    if (this.document.getElementById('agency-sk')) { //통신사 선택페이지
                        if (this.document.getElementById('agency-sk').value == 'SKT') {
                            if (profilesOb[spI].carrier == carrier.SKT) {
                                var carrier = 'agency-sk';
                            } else if (profilesOb[spI].carrier == carrier.KT) {
                                var carrier = 'agency-kt';
                            } else if (profilesOb[spI].carrier == carrier.LGU) {
                                var carrier = 'agency-lgu';
                            } else {
                                var carrier = 'agency-and';
                            }
                            this.document.getElementById(carrier).click();
                            for (var i = 0; i < 4; i++) {
                                this.document.querySelector('#agreelist_chk > li:nth-child(' + (i + 2) + ') > span > label').click();
                            };
                            this.document.querySelector('#ct > fieldset > button').click();
                        } else { // 알뜰폰 통신사 선택페이지
                            if (profilesOb[spI].carrier == carrier.SKT_MVNO) {
                                var carrier = 'agency-sk';
                            } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                                var carrier = 'agency-kt';
                            } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                                var carrier = 'agency-lgu';
                            }
                            this.document.getElementById(carrier).click();
                            this.document.getElementById('agree_all').click();
                            this.document.querySelector('#ct > fieldset > button').click();
                        }
                    } else {
                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            if (profilesOb[spI].carrier != carrier.SKT_MVNO && this.document.querySelector('#header > ul > li.tab_sms')) { //sms아닐때
                                this.document.querySelector('#header > ul > li.tab_sms').click();
                            } else {
                                this.document.getElementById('name').value = profilesOb[spI].name;
                                this.document.getElementById('mynum1').value = profilesOb[spI].birth.substr(2, 6);
                                this.document.getElementById('mynum2').value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner)
                                this.document.getElementById('phone').value = profilesOb[spI].phone_number;
                                this.document.getElementById('secur').focus();
                            }
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            if (this.document.querySelector('#header > ul > li.tab_simple')) { //PASS아닐때
                                this.document.querySelector('#header > ul > li.tab_simple').click();
                            } else {
                                this.document.getElementById('name').value = profilesOb[spI].name;
                                this.document.getElementById('phone').value = profilesOb[spI].phone_number;
                                this.document.getElementById('secur').focus();
                            }
                        }
                    }

                } else if (window.location.hostname == 'www.kmcert.com') {
                    this.console.log('한국모바일인증');

                    if (this.document.querySelector('#ct > fieldset')) { //통신사 선택페이지
                        if (profilesOb[spI].carrier == carrier.SKT) {
                            var carrierBtn = 'agency-sk';
                        } else if (profilesOb[spI].carrier == carrier.KT) {
                            var carrierBtn = 'agency-kt';
                        } else if (profilesOb[spI].carrier == carrier.LGU) {
                            var carrierBtn = 'agency-lgu';
                        } else {
                            var carrierBtn = 'agency-and';
                        }
                        this.document.getElementById(carrierBtn).click();
                        if (!is_MNO(profilesOb[spI].carrier)) { // 알뜰폰 통신사 선택페이지
                            if (profilesOb[spI].carrier == carrier.SKT_MVNO) {
                                this.document.querySelector("#wrap > div:nth-child(5) > div.layer-pop.agency_select__popup > form > div.pop-con_02 > ul > li.first-item > div.licensee_title.agency-popup-sk > a > label").click();
                            } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                                this.document.querySelector("#wrap > div:nth-child(5) > div.layer-pop.agency_select__popup > form > div.pop-con_02 > ul > li:nth-child(2) > div.licensee_title.agency-popup-kt > a > label").click();
                            } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                                this.document.querySelector("#wrap > div:nth-child(5) > div.layer-pop.agency_select__popup > form > div.pop-con_02 > ul > li:nth-child(3) > div.licensee_title.agency-popup-lgu > a > label").click();
                            }
                            this.document.querySelector("#wrap > div:nth-child(5) > div.layer-pop.agency_select__popup > form > div.pop-btn.pop-btn_02 > ul > li.lastChild.activeDarkGray > button").click();
                        }
                        // 약관 동의
                        this.document.querySelector("#ct > fieldset > ul.agreelist.all > li > span > label:nth-child(2)").click();
                        
                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            this.document.querySelector("#btnSms").click();
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            this.document.querySelector("#btnPassTran").click();
                        }
                    } else {
                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            if (this.document.querySelector("#sms_auth").title != '선택됨') { //sms아닐때
                                this.document.querySelector("#sms_auth").click();
                            } else {
                                this.document.getElementById('userName').value = profilesOb[spI].name;
                                this.document.getElementById('Birth').value = profilesOb[spI].birth.substr(2, 6);
                                this.document.getElementById('Sex').value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner);
                                this.document.getElementById('No').value = profilesOb[spI].phone_number;
                                this.document.getElementById('securityNum').focus();
                            }
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            if (this.document.querySelector("#qr_auth").title != '선택됨') { //sms아닐때
                                this.document.querySelector("#qr_auth").click();
                            } else {
                                this.document.getElementById('userName').value = profilesOb[spI].name;
                                this.document.getElementById('No').value = profilesOb[spI].phone_number;
                                this.document.getElementById('securityNum').focus();
                            }
                        }
                    }

                } else if (window.location.hostname == 'cert.kcp.co.kr') {
                    this.console.log('한국사이버결제');

                    if (this.document.querySelector("#frm > fieldset")) { //통신사 선택페이지
                        if (profilesOb[spI].carrier == carrier.SKT) {
                            var carrierBtn = 'agency-sk';
                        } else if (profilesOb[spI].carrier == carrier.KT) {
                            var carrierBtn = 'agency-kt';
                        } else if (profilesOb[spI].carrier == carrier.LGU) {
                            var carrierBtn = 'agency-lgu';
                        } else {
                            var carrierBtn = 'agency-and';
                        }
                        this.document.getElementById(carrierBtn).click();
                        if (!is_MNO(profilesOb[spI].carrier)) { // 알뜰폰 통신사 선택페이지
                            if (profilesOb[spI].carrier == carrier.SKT_MVNO) {
                                this.document.querySelector("#wrap > div:nth-child(4) > div.layer-pop.agency_select__popup > form > div.pop-con_02 > ul > li:nth-child(1) > label").click();
                            } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                                this.document.querySelector("#wrap > div:nth-child(4) > div.layer-pop.agency_select__popup > form > div.pop-con_02 > ul > li:nth-child(2) > label").click();
                            } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                                this.document.querySelector("#wrap > div:nth-child(4) > div.layer-pop.agency_select__popup > form > div.pop-con_02 > ul > li:nth-child(3) > label").click();
                            }
                            this.document.querySelector("#btnMvnoSelect").click();
                        }
                        // 약관 동의
                        this.document.querySelector("#frm > fieldset > ul.agreelist.all > li > div > label:nth-child(2)").click();
                        
                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            this.document.querySelector("#btnSms").click();
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            this.document.querySelector("#btnPass").click();
                        }
                    } else {
                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            this.document.getElementById('user_name').value = profilesOb[spI].name;
                            this.document.getElementById('mynum1').value = profilesOb[spI].birth.substr(2, 6);
                            this.document.getElementById('mynum2').value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner);
                            this.document.getElementById('phone_no_rKey').value = profilesOb[spI].phone_number;
                            this.document.getElementById('captcha_no').focus();
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            this.document.getElementById('user_name').value = profilesOb[spI].name;
                            this.document.getElementById('phone_no_rKey').value = profilesOb[spI].phone_number;
                            this.document.getElementById('captcha_no').focus();
                        }
                    }
                } else if (window.location.hostname == 'nid.naver.com') {
                    this.console.log('네이버');
                    
                    this.document.querySelector("#chk_agree3Lb").click();
                    this.document.getElementById('nm').value = profilesOb[spI].name;
                    this.document.getElementById('foreignYn').value = (profilesOb[spI].foreigner == '0' ? 'N' : 'Y')
                    this.document.getElementById(profilesOb[spI].gender == '1' ? 'man' : 'woman').click()
                    this.document.getElementById('birth_year').value = profilesOb[spI].birth.substr(0, 4);
                    this.document.getElementById('birth_month').value = Number(profilesOb[spI].birth.substr(4, 2));
                    this.document.getElementById('birth_day').value = Number(profilesOb[spI].birth.substr(6, 2));

                    if (profilesOb[spI].carrier == carrier.SKT) {
                        var carrierBtn = 'SKT';
                        this.document.getElementById('mobile_cd').value = carrierBtn;
                    } else if (profilesOb[spI].carrier == carrier.KT) {
                        var carrierBtn = 'KTF';
                        this.document.getElementById('mobile_cd').value = carrierBtn;
                    } else if (profilesOb[spI].carrier == carrier.LGU) {
                        var carrierBtn = 'LGT';
                        this.document.getElementById('mobile_cd').value = carrierBtn;
                    } else {
                        var carrierBtn = 'MVNO';
                        this.document.getElementById('mobile_cd').value = carrierBtn;
                        this.document.getElementById('mobile_cd').click();

                        if (profilesOb[spI].carrier == carrier.SKT_MVNO) {
                            var carrierBtn = 'mvno_skLb';
                        } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                            var carrierBtn = 'mvno_ktLb';
                        } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                            var carrierBtn = 'mvno_lgLb';
                        }
                        this.document.getElementById(carrierBtn).click();
                    }

                    this.document.getElementById('phone_no').value = profilesOb[spI].phone_number;
                    this.document.querySelector("#auth_no").focus();
                } else if (window.location.hostname == 'wauth.teledit.com') {
                    this.console.log('다날');
                    if (profilesOb[spI].carrier == carrier.SKT) {
                        var carrierBtn = 'agency-sk';
                    } else if (profilesOb[spI].carrier == carrier.KT) {
                        var carrierBtn = 'agency-kt';
                    } else if (profilesOb[spI].carrier == carrier.LGU) {
                        var carrierBtn = 'agency-lgu';
                    } else {
                        var carrierBtn = 'agency-and';
                    }
                    this.document.getElementById(carrierBtn).click();
                    if (!is_MNO(profilesOb[spI].carrier)) {
                        if (profilesOb[spI].carrier == carrier.SKT_MVNO) {
                            this.document.querySelector("#layerPopupMvno > div.layer-pop.agency_select__popup > form > div.pop-con_02 > ul > li.first-item > div.licensee_title > a > label").click();
                        } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                            this.document.querySelector("#layerPopupMvno > div.layer-pop.agency_select__popup > form > div.pop-con_02 > ul > li:nth-child(2) > div.licensee_title > a > label").click();
                        } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                            this.document.querySelector("#layerPopupMvno > div.layer-pop.agency_select__popup > form > div.pop-con_02 > ul > li:nth-child(3) > div.licensee_title > a > label").click();
                        }
                        this.document.querySelector("#btnSelectMvno").click();
                    }

                    // 약관 동의
                    this.document.querySelector("#sectionStart01 > form > fieldset > ul.agreelist.all > li > span > label:nth-child(2)").click();
                    
                    if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                        this.document.querySelector("#btnSms").click();
                    } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                        this.document.querySelector("#btnPass").click();
                    }
                    this.console.log('인증페이지');
                    if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                        if (this.document.querySelector("#authTabSms > a").title != '선택됨') { //sms아닐때
                            this.document.getElementById('authTabSms').click();
                        } else {
                            this.console.log('SMS 인증');
                            this.console.log(this.document.getElementById('sms_username').value);
                            this.document.getElementById('sms_username').value = profilesOb[spI].name;
                            this.document.getElementById('sms_mynum1').value = profilesOb[spI].birth.substr(2, 6);
                            this.document.getElementById('sms_mynum2').value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner);
                            this.document.getElementById('sms_mobileno').value = profilesOb[spI].phone_number;
                            this.document.getElementById('inputCaptcha').focus();
                        }
                    } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                        if (this.document.querySelector("#authTabPass > a").title != '선택됨') { //sms아닐때
                            this.document.getElementById('authTabPass').click();
                        } else {
                            this.document.getElementById('push_username').value = profilesOb[spI].name;
                            this.document.getElementById('push_mobileno').value = profilesOb[spI].phone_number;
                            this.document.getElementById('inputCaptcha').focus();
                        }
                    }
                } else if (window.location.hostname == 'www.gov.kr') {
                    this.console.log('정부24');
                    
                    setInterval(function() {
                        var nameInput = this.document.querySelector("#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(1) > div.ul-td > input[type=text]");
                        var birthDateInput = this.document.querySelector("#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(2) > div.ul-td > input");
                        var phone1Input = this.document.querySelector("#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > select:nth-child(2)");
                        var phone2Input = this.document.querySelector("#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > input");
                        var carrierInput = this.document.querySelector("#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.telecom > div.ul-td > select.one-third.mr15");
                        var agreeInput = this.document.querySelector("#totalAgree");

                        if(nameInput) {
                            nameInput.value = profilesOb[spI].name;
                        }
                        if(birthDateInput) {
                            birthDateInput.value = profilesOb[spI].birth;
                        }
                        if(phone1Input) {
                            phone1Input.value = profilesOb[spI].phone_number.substr(0, 3);
                        }
                        if(phone2Input) {
                            phone2Input.value = profilesOb[spI].phone_number.substr(3, 8);
                        }
                        if(carrierInput) {
                            if (profilesOb[spI].carrier == carrier.SKT || profilesOb[spI].carrier == carrier.SKT_MVNO) {
                                carrierInput.value = 'S';
                            } else if (profilesOb[spI].carrier == carrier.KT || profilesOb[spI].carrier == carrier.KT_MVNO) {
                                carrierInput.value = 'K';
                            } else if (profilesOb[spI].carrier == carrier.LGU || profilesOb[spI].carrier == carrier.LGU_MVNO) {
                                carrierInput.value = 'L';
                            }
                        }
                        if(agreeInput && !agreeInput.checked) {
                            agreeInput.click();
                        }
                    }, 500);
                    
                } else if (window.location.hostname == 'efamily.scourt.go.kr') {
                    this.console.log('가족관계등록시스템');
                    
                    setInterval(function() {
                        var phone1Input = this.document.querySelector("#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > select:nth-child(2)");
                        var phone2Input = this.document.querySelector("#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > input");
                        var carrierInput = this.document.querySelector("#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.telecom > div.ul-td > select.one-third");
                        var agreeInput = this.document.querySelector("#totalAgree");

                        if(phone1Input) {
                            phone1Input.value = profilesOb[spI].phone_number.substr(0, 3);
                        }
                        if(phone2Input) {
                            phone2Input.value = profilesOb[spI].phone_number.substr(3, 8);
                        }
                        if(carrierInput) {
                            if (profilesOb[spI].carrier == carrier.SKT || profilesOb[spI].carrier == carrier.SKT_MVNO) {
                                carrierInput.value = 'S';
                            } else if (profilesOb[spI].carrier == carrier.KT || profilesOb[spI].carrier == carrier.KT_MVNO) {
                                carrierInput.value = 'K';
                            } else if (profilesOb[spI].carrier == carrier.LGU || profilesOb[spI].carrier == carrier.LGU_MVNO) {
                                carrierInput.value = 'L';
                            }
                        }
                        if(agreeInput && !agreeInput.checked) {
                            agreeInput.click();
                        }
                    }, 500);
                    
                }
            }
        } else {
            this.console.log('OFF');
        }
    });
};