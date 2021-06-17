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

    chrome.storage.sync.get(function (data) {
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
                        } else { // 알뜰폰 통신사 선택페이지
                            if (profilesOb[spI].carrier == carrier.SKT_MVNO) {
                                var carrier = 'agency-sk';
                            } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                                var carrier = 'agency-kt';
                            } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                                var carrier = 'agency-lgu';
                            }
                        }
                        this.document.getElementById(carrier).click();
                        if (carrier != 'agency-and') {
                            this.document.querySelector('#ct > form > fieldset > ul.agreelist.all > li > span > label:nth-child(2)').click();
                            this.document.getElementById('btnSubmit').click();
                        }
                    } else {
                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            if (profilesOb[spI].carrier != carrier.SKT_MVNO && this.document.getElementById('sms_auth').title != '선택됨') { //sms아닐때
                                this.document.getElementById('sms_auth').click();
                            } else {
                                this.document.getElementById('username').value = profilesOb[spI].name;
                                this.document.getElementById('mynum1').value = profilesOb[spI].birth.substr(2, 6);
                                this.document.getElementById('mynum2').value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner)
                                this.document.getElementById('mobileno').value = profilesOb[spI].phone_number;
                                this.document.getElementById('answer').focus();
                            }
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            if (this.document.getElementById('simple_auth').title != '선택됨') { //PASS아닐때
                                this.document.getElementById('simple_auth').click();
                            } else {
                                this.document.getElementById('username').value = profilesOb[spI].name;
                                this.document.getElementById('mobileno').value = profilesOb[spI].phone_number;
                                this.document.getElementById('answer').focus();
                            }
                        }
                    }

                } else if (window.location.hostname == 'pcc.siren24.com') {
                    this.console.log('서울신용평가정보');

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
                                this.document.querySelector('#agreelist > li:nth-child(' + (i + 1) + ') > span > label').click();
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
                            var location = this.document.querySelectorAll('#header > ul > li').length; //알뜰폰의 경우 location이 2 통신사의 경우 3
                            if (profilesOb[spI].carrier != carrier.SKT_MVNO && !this.document.querySelector('#header > ul > li:nth-child(' + location + ')').classList.length) { //sms아닐때
                                this.document.querySelector('#header > ul > li:nth-child(' + location + ') > a').click();
                            } else {
                                this.document.getElementById('userName').value = profilesOb[spI].name;
                                this.document.getElementById('birthDay1').value = profilesOb[spI].birth.substr(2, 6);
                                this.document.getElementById('birthDay2').value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner)
                                this.document.getElementsByName('No')[0].value = profilesOb[spI].phone_number;
                                this.document.getElementById('secur').focus();
                            }
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            var location = this.document.querySelectorAll('#header > ul > li').length - 1; //알뜰폰의 경우 location이 1 통신사의 경우 2
                            if (!this.document.querySelector('#header > ul > li:nth-child(' + location + ')').classList.length) { //PASS아닐때
                                this.document.querySelector('#header > ul > li:nth-child(' + location + ')').click();
                            } else {
                                this.document.getElementsByName('userName')[0].value = profilesOb[spI].name;
                                this.document.getElementsByName('No')[0].value = profilesOb[spI].phone_number;
                                this.document.getElementById('secur').focus();
                            }
                        }
                    }

                } else if (window.location.hostname == 'safe.ok-name.co.kr') {
                    this.console.log('코리아크레딧뷰로');

                    if (this.document.querySelector('#layerPop > div.popContent > div.telecomSelect')) { //통신사 선택페이지
                        if (profilesOb[spI].carrier == carrier.SKT) {
                            var carrier = 'skt';
                        } else if (profilesOb[spI].carrier == carrier.KT) {
                            var carrier = 'kt';
                        } else if (profilesOb[spI].carrier == carrier.LGU) {
                            var carrier = 'lgu';
                        } else {
                            var carrier = 'mvno';
                        }
                        this.document.querySelector('#layerPop > div.popContent > div.telecomSelect > ul > li.' + carrier + ' > a').click();
                    } else if (this.document.querySelector('#layerPop > div.popContent > div.mvnoSelectBox')) { //알뜰폰 통신사 선택페이지
                        this.document.getElementById('radio0' + (profilesOb[spI].carrier - 3)).click();
                        this.document.querySelector('#layerPop > div.popContent > div.btnArea.big > a.btn.btnGray').click();
                    } else {
                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            if (profilesOb[spI].carrier != carrier.SKT_MVNO && !this.document.querySelector('body > form > div > div.popContent > div.tab > a.tabText.on > span.hide_txt')) { //sms아닐때
                                this.document.querySelector('body > form > div > div.popContent > div.tab > a.tabText').click();
                            } else {
                                this.document.getElementById('nm').value = profilesOb[spI].name;
                                this.document.getElementById('brdt').value = profilesOb[spI].birth;
                                this.document.querySelector('body > form > div > div.popContent > div.formTbl > table > tbody > tr:nth-child(1) > td > span.selectboxWrap > div > ul > li:nth-child(' + (Number(profilesOb[spI].foreigner) + 1) + ') > a').click();
                                this.document.querySelector('body > form > div > div.popContent > div.formTbl > table > tbody > tr:nth-child(2) > td > div > a:nth-child(' + profilesOb[spI].gender + ')').click();
                                this.document.getElementById('mbphn_no').value = profilesOb[spI].phone_number;
                                for (var i = 0; i < 4; i++) {
                                    this.document.getElementById('certi0' + (i + 1)).click();
                                };
                                this.document.getElementById('nm').focus();
                                this.document.getElementById('brdt').focus();
                                this.document.getElementById('mbphn_no').focus();
                                this.document.getElementById('captchaCode').focus();
                            }
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            if (!this.document.querySelector('body > form > div > div.popContent > div.tab > a.tabApp.on > span.hide_txt')) { //PASS아닐때
                                this.document.querySelector('body > form > div > div.popContent > div.tab > a.tabApp').click();
                            } else {
                                this.document.getElementById('nm').value = profilesOb[spI].name;
                                this.document.getElementById('mbphn_no').value = profilesOb[spI].phone_number;
                                for (var i = 0; i < 4; i++) {
                                    this.document.getElementById('certi0' + (i + 1)).click();
                                };
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

                    if (this.document.querySelector('#ct > fieldset > button')) { //통신사 선택페이지
                        if (!this.document.getElementById('mvno_corp_ktm')) { // MNO
                            if (profilesOb[spI].carrier == carrier.SKT) {
                                var carrier = 'agency-sk';
                            } else if (profilesOb[spI].carrier == carrier.KT) {
                                var carrier = 'agency-kt';
                            } else if (profilesOb[spI].carrier == carrier.LGU) {
                                var carrier = 'agency-lgu';
                            } else {
                                var carrier = 'agency-and';
                            }
                        } else { // 알뜰폰 통신사 선택페이지
                            if (profilesOb[spI].carrier == carrier.SKT_MVNO) {
                                var carrier = 'mvno_corp_skm';
                            } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                                var carrier = 'mvno_corp_ktm';
                            } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                                var carrier = 'mvno_corp_lgm';
                            }
                        }
                        this.document.getElementById(carrier).click();
                        if (carrier != 'agency-and') {
                            for (var i = 0; i < 4; i++) {
                                this.document.getElementById('agree_list0' + (i + 1)).click();
                            };
                        }
                        this.document.querySelector('#ct > fieldset > button').click();
                    } else {
                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            if (is_MVNO(profilesOb[spI].carrier)) { // MVNO
                                this.document.getElementById('name').value = profilesOb[spI].name;
                                this.document.getElementById('Birth').value = profilesOb[spI].birth.substr(2, 6);
                                this.document.getElementById('sex').value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner);
                                this.document.getElementById('No').value = profilesOb[spI].phone_number;
                                this.document.getElementById('securityNum').focus();
                            } else if (this.document.querySelector('#header > ul > li.on > a').text != '문자인증') { //sms아닐때
                                if (is_MNO(profilesOb[spI].carrier)) { // MNO
                                    this.document.querySelector('#header > ul > li:nth-child(3) > a').click();
                                } else {
                                    this.document.querySelector('#header > ul > li:nth-child(2) > a').click();
                                }
                            } else {
                                this.document.getElementById('userName').value = profilesOb[spI].name;
                                this.document.getElementById('Birth').value = profilesOb[spI].birth.substr(2, 6);
                                this.document.getElementById('Sex').value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner);
                                this.document.getElementById('No').value = profilesOb[spI].phone_number;
                                this.document.getElementById('securityNum').focus();
                            }
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            if (this.document.querySelector('#header > ul > li.on > a').text != '간편인증') { //PASS아닐때
                                if (is_MNO(profilesOb[spI].carrier)) { // MNO
                                    this.document.querySelector('#header > ul > li:nth-child(2) > a').click();
                                } else {
                                    this.document.querySelector('#header > ul > li:nth-child(1) > a').click();
                                }
                            } else {
                                if (is_MNO(profilesOb[spI].carrier)) { // MNO
                                    this.document.getElementById('name').value = profilesOb[spI].name;
                                    this.document.getElementById('No').value = profilesOb[spI].phone_number;
                                    this.document.getElementById('securityNum').focus();
                                } else {
                                    this.document.getElementById('userName').value = profilesOb[spI].name;
                                    this.document.getElementById('No').value = profilesOb[spI].phone_number;
                                    this.document.getElementById('securityNum').focus();
                                }

                            }
                        }
                    }

                } else if (window.location.hostname == 'cert.kcp.co.kr') {
                    this.console.log('한국사이버결제');

                    if (this.document.getElementById('agency-sk')) { //통신사 선택페이지
                        if (!document.querySelector("#ct > fieldset > ul.licensee-list")) { // MNO 사업자
                            if (profilesOb[spI].carrier == carrier.SKT) {
                                var carrier = 'agency-sk';
                            } else if (profilesOb[spI].carrier == carrier.KT) {
                                var carrier = 'agency-kt';
                            } else if (profilesOb[spI].carrier == carrier.LGU) {
                                var carrier = 'agency-lgu';
                            } else {
                                var carrier = 'agency-and';
                            }
                        } else { // 알뜰폰 통신사 선택페이지
                            if (profilesOb[spI].carrier == carrier.SKT_MVNO) {
                                var carrier = 'agency-sk';
                            } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                                var carrier = 'agency-kt';
                            } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                                var carrier = 'agency-lgu';
                            }
                        }
                        this.document.getElementById(carrier).click();
                        for (var i = 0; i < 4; i++) {
                            this.document.getElementById('agree' + (i + 1)).click();
                        };
                        this.document.querySelector('#ct > fieldset > button').click();
                    } else {
                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            if (profilesOb[spI].carrier == carrier.LGU) {
                                if (this.document.querySelector('#header > ul > li.on > a').text != '문자인증') { //sms아닐때
                                    this.document.querySelector('#header > ul > li:nth-child(3) > a').click();
                                } else {
                                    this.document.getElementById('name').value = profilesOb[spI].name;
                                    this.document.getElementById('mynum1').value = profilesOb[spI].birth.substr(2, 6);
                                    this.document.getElementById('mynum2').value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner);
                                    this.document.getElementById('phone_no_rKey').value = profilesOb[spI].phone_number;
                                    this.document.getElementById('secur').focus();
                                }
                            }
                            else if (profilesOb[spI].carrier != carrier.SKT_MVNO && this.document.querySelector('#header_col3 > li.on > a').text != '문자인증') { //sms아닐때
                                if (is_MNO(profilesOb[spI].carrier)) { // MNO
                                    this.document.querySelector('#header_col3 > li:nth-child(3) > a').click();
                                } else {
                                    this.document.querySelector('#header_col3 > li:nth-child(2) > a').click();
                                }
                            } else {
                                this.document.getElementById('name').value = profilesOb[spI].name;
                                this.document.getElementById('mynum1').value = profilesOb[spI].birth.substr(2, 6);
                                this.document.getElementById('mynum2').value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner);
                                this.document.getElementById('phone_no_rKey').value = profilesOb[spI].phone_number;
                                this.document.getElementById('secur').focus();
                            }
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            if (profilesOb[spI].carrier == carrier.LGU) {
                                if (this.document.querySelector('#header > ul > li.on > a').text != '간편인증') { //sms아닐때
                                    this.document.querySelector('#header > ul > li:nth-child(2) > a').click();
                                } else {
                                    this.document.getElementById('name').value = profilesOb[spI].name;
                                    this.document.getElementById('phone_no_rKey').value = profilesOb[spI].phone_number;
                                    this.document.getElementById('secur').focus();
                                }
                            }
                            else if (this.document.querySelector('#header_col3 > li.on > a').text != '간편인증') { //PASS아닐때
                                this.document.querySelector('#header_col3 > li:nth-child(2) > a').click();
                            } else {
                                this.document.getElementById('name').value = profilesOb[spI].name;
                                this.document.getElementById('phone_no_rKey').value = profilesOb[spI].phone_number;
                                this.document.getElementById('secur').focus();
                            }
                        }
                    }
                } else if (window.location.hostname == 'nid.naver.com') {
                    this.console.log('네이버');

                    this.document.getElementById('chk_agree3').click();
                    this.document.getElementById('nm').value = profilesOb[spI].name;
                    this.document.getElementById('foreignYn').value = (profilesOb[spI].foreigner == '0' ? 'N' : 'Y')
                    this.document.getElementById(profilesOb[spI].gender == '1' ? 'man' : 'woman').click()
                    this.document.getElementById('birth_year').value = profilesOb[spI].birth.substr(0, 4);
                    this.document.getElementById('birth_month').value = Number(profilesOb[spI].birth.substr(4, 2));
                    this.document.getElementById('birth_day').value = Number(profilesOb[spI].birth.substr(6, 2));

                    if (profilesOb[spI].carrier == carrier.SKT) {
                        var carrier = 'SKT';
                        this.document.getElementById('mobile_cd').value = carrier;
                    } else if (profilesOb[spI].carrier == carrier.KT) {
                        var carrier = 'KTF';
                        this.document.getElementById('mobile_cd').value = carrier;
                    } else if (profilesOb[spI].carrier == carrier.LGU) {
                        var carrier = 'LGT';
                        this.document.getElementById('mobile_cd').value = carrier;
                    } else {
                        var carrier = 'MVNO';
                        this.document.getElementById('mobile_cd').value = carrier;
                        this.document.getElementById('mobile_cd').click();

                        if (profilesOb[spI].carrier == carrier.SKT_MVNO) {
                            var carrier = 'mvno_sk';
                        } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                            var carrier = 'mvno_kt';
                        } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                            var carrier = 'mvno_lg';
                        }
                        this.document.getElementById(carrier).click();
                    }

                    this.document.getElementById('phone_no').value = profilesOb[spI].phone_number;
                    this.document.querySelector('#content > div > fieldset > div.mobile_box > div > div.join_row.join_mobile > a').focus();
                } else if (window.location.hostname == 'wauth.teledit.com') {
                    this.console.log('다날');

                    if (this.document.getElementById('agency-sk')) { //통신사 선택페이지
                        if (is_MNO(profilesOb[spI].carrier)) { // MNO
                            if (profilesOb[spI].carrier == carrier.SKT) {
                                var carrier = 'agency-sk';
                            } else if (profilesOb[spI].carrier == carrier.KT) {
                                var carrier = 'agency-kt';
                            } else if (profilesOb[spI].carrier == carrier.LGU) {
                                var carrier = 'agency-lgu';
                            }
                            this.document.getElementById(carrier).click();
                            for (var i = 0; i < 4; i++) {
                                this.document.getElementById('agree' + (i + 1)).click();
                            };
                            this.document.querySelector('#ct > form > fieldset > button').click();
                        } else { // MVNO
                            var carrier = 'agency-and';
                            this.document.getElementById(carrier).click();
                            this.document.querySelector('#ct > form > fieldset > button').click();
                            
                            if (profilesOb[spI].carrier == carrier.SKT_MVNO) {
                                var carrier = 'agency-sk-mvno';
                            } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                                var carrier = 'agency-kt-mvno';
                            } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                                var carrier = 'agency-lgu-mvno';
                            }
                            this.document.getElementById(carrier).click();
                            for (var i = 0; i < 4; i++) {
                                this.document.getElementById('agree' + (i + 1) + '-mvno').click();
                            };
                            this.document.querySelector('#ct_mvno > form > fieldset > button').click();
                        }
                    } else {
                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            while (profilesOb[spI].carrier != carrier.SKT_MVNO && this.document.querySelector('#ID_CT_LI3').className != 'on') { //sms아닐때
                                this.document.querySelector('#ID_CT_LI3 > a').click();
                            }
                            this.document.getElementById('SMSName').value = profilesOb[spI].name;
                            this.document.getElementById('mynum1').value = profilesOb[spI].birth.substr(2, 6);
                            this.document.getElementById('mynum2').value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner);
                            this.document.getElementById('SMSDstAddr').value = profilesOb[spI].phone_number;
                            this.document.getElementById('captcha_text').focus();
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            while (this.document.querySelector('#ID_CT_LI2').className != 'on') { //PASS아닐때
                                this.document.querySelector('#ID_CT_LI2 > a').click();
                            }
                            this.document.getElementById('AppName').value = profilesOb[spI].name;
                            this.document.getElementById('AppDstAddr').value = profilesOb[spI].phone_number;
                            this.document.getElementById('captcha_text').focus();
                        }
                    }
                }
            }
        } else {
            this.console.log('OFF');
        }
    });
};
