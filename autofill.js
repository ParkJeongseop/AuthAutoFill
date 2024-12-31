function getBrowser() {
    if(typeof browser !== 'undefined') {
        return browser
    }else if(typeof chrome !== 'undefined') {
        return chrome
    }
}

browser = getBrowser();

debug = false

/**
 * 개발진행시 console.log()
 * @param {string} string - 출력할 문자열
 */
function log(string) {
    if (debug) {
        this.console.log(string);
    }
}

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

/**
 * 주민등록번호 7번째 자리(성별) 가져오기
 * @param {number} birth - 생년월일 8자리
 * @param {number} gender - 성별 코드
 * @param {number} foreigner - 내/외국인 코드
 * @returns {number} 주민등록번호 7번째 자리
 */
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

function trigger_input_event(element) {
    element.dispatchEvent(new Event('input', {bubbles:true}));
}

function trigger_change_event(element) {
    element.dispatchEvent(new Event('change', {bubbles:true}));
}

function trigger_keyup_event(element) {
    element.dispatchEvent(new Event('keyup', {bubbles:true}));
}

/**
 * 행정안전부 "민간 간편인증 서비스" 자동완성
 * @param {string} nameQ - 이름 input element query string
 * @param {string} birth8DigitQ - 생년월일 8자리 input element query string
 * @param {string} birth6DigitQ - 생년월일 6자리 input element query string
 * @param {string} rrnQ - 주민등록번호 뒷자리 input element query string
 * @param {string} phone1Q - 전화번호 앞 3자리 input element query string
 * @param {string} phone2Q - 전화번호 뒤 8자리 input element query string
 * @param {string} carrierQ - 통신사 input element query string
 * @param {string} agreeQ - 약관동의 input element query string
 * @returns {number} interval ID
 */
function autofill_for_mois(selectedProfile, nameQ, birth8DigitQ, birth6DigitQ, rrnQ, phone1Q, phone2Q, carrierQ, agreeQ) {
    return setInterval(function() {
        nameInput = this.document.querySelector(nameQ);
        birthDate8DigitInput = this.document.querySelector(birth8DigitQ);
        birthDate6DigitInput = this.document.querySelector(birth6DigitQ);
        rrnInput = this.document.querySelector(rrnQ);
        phone1Input = this.document.querySelector(phone1Q);
        phone2Input = this.document.querySelector(phone2Q);
        carrierInput = this.document.querySelector(carrierQ);
        agreeInput = this.document.querySelector(agreeQ);
        
        // 이름
        if(nameInput) {
            nameInput.value = selectedProfile.name;
            trigger_input_event(nameInput);
        }

        // 생년월일 8자리
        if(birthDate8DigitInput) {
            birthDate8DigitInput.value = selectedProfile.birth;
            trigger_input_event(birthDate8DigitInput);
        }

        // 생년월일 6자리
        if(birthDate6DigitInput) {
            birthDate6DigitInput.value = selectedProfile.birth.substr(2, 6);
            trigger_input_event(birthDate6DigitInput);
        }
        
        // 전화번호 앞 3자리
        if(phone1Input) {
            phone1Input.value = selectedProfile.phone_number.substr (0, 3);
            trigger_change_event(phone1Input);
        }

        // 전화번호 뒤 8자리
        if(phone2Input) {
            phone2Input.value = selectedProfile.phone_number.substr(3, 8);
            trigger_input_event(phone2Input);
        }

        // 통신사
        if(carrierInput) {
            if (selectedProfile.carrier == carrier.SKT || selectedProfile.carrier == carrier.SKT_MVNO) {
                carrierInput.value = 'S';
            } else if (selectedProfile.carrier == carrier.KT || selectedProfile.carrier == carrier.KT_MVNO) {
                carrierInput.value = 'K';
            } else if (selectedProfile.carrier == carrier.LGU || selectedProfile.carrier == carrier.LGU_MVNO) {
                carrierInput.value = 'L';
            }
            trigger_change_event(carrierInput);
        }

        // 약관동의
        if(agreeInput && !agreeInput.checked) {
            agreeInput.click();
            // 주민등록번호 입력 포커스
            if(rrnInput) {
                rrnInput.focus();
            }
        }
    }, 500);
}

window.onload = function () {
    log('Auth Autofill (본인인증 자동완성)\n한국 휴대전화 본인인증 서비스 자동완성 브라우저 확장 프로그램');

    browser.storage.sync.get(function (data) {
        if (data.on) {
            log('ON');
            if (data.profiles) {
                var profilesOb = JSON.parse(data.profiles).profiles;
                var spI = data.selectedProfile;
                var selectedProfile = profilesOb[spI];
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
                    log('나이스신용평가정보');
                    // Todo: 보안프로그램 실행시 자동완성 작동안함

                    var isPC = !window.location.search.includes('authMobileMain');

                    if (this.document.getElementById('telcomSK')) { //통신사 선택페이지
                        log("통신사 선택페이지");
                        // 통신사 선택
                        if (profilesOb[spI].carrier == carrier.SKT) {
                            this.document.getElementById('telcomSK').click();
                        } else if (profilesOb[spI].carrier == carrier.KT) {
                            this.document.getElementById('telcomKT').click();
                        } else if (profilesOb[spI].carrier == carrier.LGU) {
                            this.document.getElementById('telcomLG').click();
                        } else if (profilesOb[spI].carrier == carrier.SKT_MVNO) {
                            this.document.getElementById('telcomSM').click();
                        } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                            this.document.getElementById('telcomKM').click();
                        } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                            this.document.getElementById('telcomLM').click();
                        }
                    } else if (this.document.querySelector("#frm > section > div > ul > li:nth-child(1) > button")) {
                        // 인증방식 선택페이지 (모바일에서 PASS 선택시)
                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            try {
                                this.document.querySelector("#frm > section > div > ul > li:nth-child(3) > button").click();
                            } catch (e) {
                                // 모바일 페이지
                                this.document.querySelector("#frm > section > div > ul > li:nth-child(2) > button").click();
                            }
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            this.document.querySelector("#frm > section > div > ul > li:nth-child(1) > button").click();
                        }
                        this.document.getElementById('mobileCertAgree').click();
                        this.document.getElementById('btnMobileCertStart').click();
                    } else {
                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            this.document.getElementById('userName').value = profilesOb[spI].name;
                            this.document.getElementById('btnSubmit').click();
                            this.document.getElementById('myNum1').value = profilesOb[spI].birth.substr(2, 6);
                            this.document.getElementById('myNum2').value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner);
                            this.document.querySelector("#frm > div > div.group_smsway > ul > li.step_item.step_tel").classList.add('on');
                            this.document.getElementById('mobileNo').value = profilesOb[spI].phone_number;
                            this.document.querySelector("#frm > div > div.group_smsway > ul > li.step_item.step_captcha").classList.add('on');
                            this.document.getElementById('captchaAnswer').focus();
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            if (this.document.getElementById('userName')) {
                                // PC
                                this.document.getElementById('userName').value = profilesOb[spI].name;
                                this.document.querySelector("#frm > div > div.group_smsway > button").click();
                                this.document.getElementById('mobileNo').value = profilesOb[spI].phone_number;
                                this.document.querySelector("#frm > div > div.group_smsway > ul > li.step_item.step_captcha").classList.add('on');
                                this.document.getElementById('captchaAnswer').focus();
                            } else {
                                // 모바일
                                this.document.getElementById("btnTransaction").click();
                            }
                        }
                    }

                } else if (window.location.hostname == 'pcc.siren24.com') {
                    log('서울신용평가정보');
                    var isPC = window.location.pathname.includes('passWebV2');

                    if (this.document.querySelector("#ct > form:nth-child(1) > fieldset > ul.agency_select__items")) { //통신사 선택페이지
                        log('통신사 선택 페이지');
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
                    
                        // 다음 페이지 버튼
                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            this.document.querySelector("#btnSms").click();
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            this.document.querySelector("#btnPass").click();
                        }
                    } else {
                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            if (isPC && this.document.querySelector("#sms_auth") && this.document.querySelector("#sms_auth").title != '선택됨') { //sms아닐때
                                this.document.querySelector("#sms_auth").click();
                            } else {
                                this.document.getElementById('userName').value = profilesOb[spI].name;
                                this.document.getElementById(isPC ? 'birthDay1' : 'birthDay').value = profilesOb[spI].birth.substr(2, 6);
                                this.document.getElementById('birthDay2').value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner)
                                this.document.getElementById('No').value = profilesOb[spI].phone_number;
                                if (isPC) {
                                    this.document.getElementById('secur').focus();
                                }
                            }
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            if (isPC && this.document.querySelector("#qr_auth") && this.document.querySelector("#qr_auth").title != '선택됨') { //sms아닐때
                                this.document.querySelector("#sms_auth").click();
                            } else {
                                this.document.getElementsByName('userName')[0].value = profilesOb[spI].name;
                                this.document.getElementsByName('No')[0].value = profilesOb[spI].phone_number;
                                if (isPC) {
                                    this.document.getElementById('secur').focus();
                                }
                            }
                        }
                    }

                } else if (window.location.hostname == 'safe.ok-name.co.kr') {
                    log('코리아크레딧뷰로');

                    var isPC = !window.location.pathname.includes('MCommonSvl');

                    if (!isPC) { // 모바일일때
                        if (document.querySelector("#sms_auth") && !document.querySelector("#nm")) { // 인증방식 선택 페이지
                            if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                                this.document.querySelector("#sms_auth").click();
                            } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                                this.document.querySelector("#push_auth").click();
                            }
                        } else {
                            this.document.getElementById('nm').value = profilesOb[spI].name;
                            if (document.getElementById('ssn6')) {
                                this.document.getElementById('ssn6').value = profilesOb[spI].birth.substr(2, 6);
                                this.document.getElementById('ssn1').value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner);
                            }
                            this.document.getElementById('mbphn_no').value = profilesOb[spI].phone_number;
                            this.document.getElementById('captchaCode').focus();
                        }
                    } else if (document.querySelector("#ct > form > fieldset > ul.agency_select__items")) { //통신사 선택페이지
                        log("통신사 선택페이지");
                        // 통신사 선택
                        if (profilesOb[spI].carrier == carrier.SKT) {
                            var carrierBtn = 'agency-skt';
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
                                this.document.querySelector("ul > li:nth-child(1) > div.licensee_title > a > label").click();
                            } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                                this.document.querySelector("ul > li:nth-child(2) > div.licensee_title > a > label").click();
                            } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                                this.document.querySelector("ul > li:nth-child(3) > div.licensee_title > a > label").click();
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
                                this.document.getElementById('ssn6').value = profilesOb[spI].birth.substr(2, 6);
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

                } else if (window.location.hostname == 'cert.mobile-ok.com') {
                    log('드림시큐리티');

                    // 통신사 선택
                    if (profilesOb[spI].carrier == carrier.SKT) {
                        this.document.querySelector("#common_01 > section > div > ul > li:nth-child(1) > button").click();
                    } else if (profilesOb[spI].carrier == carrier.KT) {
                        this.document.querySelector("#common_01 > section > div > ul > li:nth-child(2) > button").click();
                    } else if (profilesOb[spI].carrier == carrier.LGU) {
                        this.document.querySelector("#common_01 > section > div > ul > li:nth-child(3) > button").click();
                    } else if (profilesOb[spI].carrier == carrier.SKT_MVNO) {
                        this.document.querySelector("#common_01 > section > div > ul > li:nth-child(4) > button").click();
                    } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                        this.document.querySelector("#common_01 > section > div > ul > li:nth-child(5) > button").click();
                    } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                        this.document.querySelector("#common_01 > section > div > ul > li:nth-child(6) > button").click();
                    }

                    if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                        // SMS 인증 선택
                        this.document.querySelector("#common_02 > section > div > ul > li:nth-child(3) > button").click();

                        // 약관 동의
                        this.document.querySelector("#user_agree_checkbox").click();

                        // 다음 버튼
                        this.document.querySelector("#common_02 > section > div > div > button").click();

                        // 이름 입력
                        this.document.querySelector("#sms_01 > section > div > div.group_smsway > ul > li.step_item.step_sms.on > div > input").value = profilesOb[spI].name;

                        // 다음 버튼
                        this.document.querySelector("#sms_01 > section > div > div.group_smsway > button").click();
                        
                        // 주민등록번호 앞자리 입력
                        this.document.querySelector("#sms_01 > section > div > div.group_smsway > ul > li.step_item.step_id.on > div.step_box.birth1 > input").value = profilesOb[spI].birth.substr(2, 6);

                        // 주민등록번호 뒷자리 입력
                        var birthInput2 = this.document.querySelector("#sms_01 > section > div > div.group_smsway > ul > li.step_item.step_id.on > div.step_box.birth2 > input");
                        birthInput2.value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner);
                        trigger_keyup_event(birthInput2);
                        
                        // 전화번호 입력
                        var phoneInput = this.document.querySelector("#sms_01 > section > div > div.group_smsway > ul > li.step_item.step_tel.on > div > input")
                        phoneInput.value = profilesOb[spI].phone_number;
                        trigger_keyup_event(phoneInput);

                        // CAPTCHA Focus
                        this.document.querySelector("#sms_01 > section > div > div.group_smsway > ul > li.step_item.step_captcha.captcha_sms.on > div.step_box.capchaInput > input").focus();
                    } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                        // PASS 인증 선택
                        this.document.querySelector("#common_02 > section > div > ul > li:nth-child(1) > button").click();

                        // 약관 동의
                        this.document.querySelector("#user_agree_checkbox").click();

                        // 다음 버튼
                        this.document.querySelector("#common_02 > section > div > div > button").click();

                        // 이름 입력
                        this.document.querySelector("#pass_01 > section > div > div.group_smsway > ul > li.step_item.on > div > input").value = profilesOb[spI].name;

                        // 다음 버튼
                        this.document.querySelector("#pass_01 > section > div > div.group_smsway > button").click();

                        // 전화번호 입력
                        var phoneInput = this.document.querySelector("#pass_01 > section > div > div.group_smsway > ul > li.step_item.step_tel.on > div > input")
                        phoneInput.value = profilesOb[spI].phone_number;
                        trigger_keyup_event(phoneInput);

                        // CAPTCHA Focus
                        this.document.querySelector("#pass_01 > section > div > div.group_smsway > ul > li.step_item.step_captcha.captcha_pass.on > div.step_box.capchaInput > input").focus();
                    }
    
                } else if (window.location.hostname == 'www.kmcert.com') {
                    log('한국모바일인증');

                    // PC: https://www.kmcert.com/kmcis/web_v4/kmcisHp00.jsp
                    // Mobile: https://www.kmcert.com/kmcis/pass_m/kmcisPass00.jsp
                    var isPC = window.location.pathname.includes('web_v4');

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

                        if (isPC && !is_MNO(profilesOb[spI].carrier)) { // 알뜰폰 통신사 선택페이지
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
                        if (isPC) {
                            this.document.querySelector("#ct > fieldset > ul.agreelist.all > li > span > label:nth-child(2)").click();
                        } else {
                            this.document.querySelector("#agreelist_chk > li.all > span > label").click();
                        }
                        
                        // 다음 페이지 클릭
                        if (isPC) {
                            if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                                this.document.querySelector("#btnSms").click();
                            } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                                this.document.querySelector("#btnPassTran").click();
                            }
                        } else {
                            this.document.querySelector("#ct > fieldset > form > button").click();
                        }

                    } else if (!isPC && this.document.querySelector("#mvno_corp_skm")) { // 모바일페이지 MVNO 선택페이지
                        if (profilesOb[spI].carrier == carrier.SKT_MVNO) {
                            this.document.querySelector("#mvno_corp_skm").click();
                        } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                            this.document.querySelector("#mvno_corp_ktm").click();
                        } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                            this.document.querySelector("#mvno_corp_lgm").click();
                        }
                        // 약관 동의
                        this.document.querySelector("#agreelist_chk > li > span > label").click();

                        // 확인 클릭
                        this.document.querySelector("#t_ag_wp > div.container > div.btn_area > a.btn_rac.btn_ok").click();

                    } else {
                        if (isPC) {
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
                        } else {
                            if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                                if (this.document.querySelector("#ct > article.ui_cover.app_down > button")) { //sms아닐때
                                    this.document.querySelector("#ct > article.ui_cover.app_down > button").click();
                                } else {
                                    this.document.querySelector("#name").value = profilesOb[spI].name;
                                    this.document.querySelector("#mynum1").value = profilesOb[spI].birth.substr(2, 6);
                                    this.document.querySelector("#mynum2").value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner);
                                    this.document.querySelector("#phone").value = profilesOb[spI].phone_number;
                                }
                            }
                            // 모바일페이지에서 PASS는 입력없이 앱실행
                        }
                    }

                } else if (window.location.hostname == 'cert.kcp.co.kr') {
                    log('한국사이버결제');
                    var isPC = !window.location.pathname.includes('/mo');

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
                                this.document.querySelector("form > div.pop-con_02 > ul > li:nth-child(1) > label").click();
                            } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                                this.document.querySelector("form > div.pop-con_02 > ul > li:nth-child(2) > label").click();
                            } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                                this.document.querySelector("form > div.pop-con_02 > ul > li:nth-child(3) > label").click();
                            }
                            this.document.querySelector("#btnMvnoSelect").click();
                        }
                        // 약관 동의
                        if (isPC) {
                            this.document.querySelector("#frm > fieldset > ul.agreelist.all > li > div > label:nth-child(2)").click();
                        } else {
                            this.document.querySelector("#agree_all").click();
                        }
                        
                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            this.document.querySelector("#btnSms").click();
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            this.document.querySelector("#btnPass").click();
                        }
                    } else if (this.document.getElementById('user_name')) {
                        if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                            this.document.getElementById('user_name').value = profilesOb[spI].name;
                            this.document.getElementById('mynum1').value = profilesOb[spI].birth.substr(2, 6);
                            this.document.getElementById('mynum2').value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner);
                            this.document.getElementById(isPC ? 'phone_no_rKey' : 'phone_no').value = profilesOb[spI].phone_number;
                            this.document.getElementById('captcha_no').focus();
                        } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                            this.document.getElementById('user_name').value = profilesOb[spI].name;
                            this.document.getElementById(isPC ? 'phone_no_rKey' : 'phone_no').value = profilesOb[spI].phone_number;
                            this.document.getElementById('captcha_no').focus();
                        }
                    }
                } else if (window.location.hostname == 'nid.naver.com') {
                    log('네이버');
                    
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
                    log('다날');
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
                            this.document.querySelector("#layerPopupMvno > div.layer-pop > form > div.pop-con_02 > ul > li.first-item > div.licensee_title > a > label").click();
                        } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                            this.document.querySelector("#layerPopupMvno > div.layer-pop > form > div.pop-con_02 > ul > li:nth-child(2) > div.licensee_title > a > label").click();
                        } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                            this.document.querySelector("#layerPopupMvno > div.layer-pop > form > div.pop-con_02 > ul > li:nth-child(3) > div.licensee_title > a > label").click();
                        }
                        this.document.querySelector("#btnSelectMvno").click();
                    }

                    // 약관 동의
                    this.document.querySelector("#agree_all").click();
                    
                    // 인증 방식 선택
                    if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                        this.document.querySelector("#btnSms").click();
                    } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                        this.document.querySelector("#btnPass").click();
                    }

                    // 자동완성
                    if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                        if (this.document.querySelector("#authTabSms > a")) {
                            if (this.document.querySelector("#authTabSms > a").title != '선택됨') { //sms아닐때
                                this.document.getElementById('authTabSms').click();
                            }
                        }

                        this.document.getElementById('sms_username').value = profilesOb[spI].name;
                        this.document.getElementById('sms_mynum1').value = profilesOb[spI].birth.substr(2, 6);
                        this.document.getElementById('sms_mynum2').value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner);
                        this.document.getElementById('sms_mobileno').value = profilesOb[spI].phone_number;
                        this.document.getElementById('inputCaptcha').focus();
                    } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                        if (this.document.querySelector("#authTabPass > a")) {
                            if (this.document.querySelector("#authTabPass > a").title != '선택됨') { //sms아닐때
                                this.document.getElementById('authTabPass').click();
                            }
                        }

                        this.document.getElementById('push_username').value = profilesOb[spI].name;
                        this.document.getElementById('push_mobileno').value = profilesOb[spI].phone_number;
                        this.document.getElementById('inputCaptcha').focus();
                    }
                } else if (window.location.hostname == 'auth.mobilians.co.kr') {
                    log('KG모빌리언스');
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
                            this.document.querySelector("#agency-popup-sk").click();
                        } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                            this.document.querySelector("#agency-popup-kt").click();
                        } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                            this.document.querySelector("#agency-popup-lgu").click();
                        }
                        this.document.querySelector("#mvnoConfirmBtn").click();
                    }

                    // 약관 동의
                    this.document.querySelector("#agree_all").click();
                    
                    // 인증 방식 선택
                    if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                        this.document.querySelector("#commidSelect > button.btn_r.btn_type6.btn_r.btn_skip2.btnSms").click();
                    } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                        this.document.querySelector("#commidSelect > button.btn_r.btn_type6.btn_r.btn_skip.btnSubmit").click();
                    }

                    // 자동완성
                    if (profilesOb[spI].way == way.SMS) { // SMS인증을 원하는 경우
                        if (document.querySelector("#authTab > li.on > a")) {
                            if (document.querySelector("#authTab > li.on > a").id != 'sms_auth') { //sms아닐때
                                this.document.getElementById('sms_auth').click();
                            }
                        }

                        this.document.getElementById('smsName').value = profilesOb[spI].name;
                        this.document.getElementById('birthYMD').value = profilesOb[spI].birth.substr(2, 6);
                        this.document.getElementById('birthSF').value = get_RRN_GenderNum(profilesOb[spI].birth, profilesOb[spI].gender, profilesOb[spI].foreigner);
                        this.document.getElementById('smsPhone').value = profilesOb[spI].phone_number;
                        this.document.getElementById('smsCaptchaCfm').focus();
                    } else if (profilesOb[spI].way == way.PASS) { // PASS인증을 원하는 경우
                        if (document.querySelector("#authTab > li.on > a")) {
                            if (document.querySelector("#authTab > li.on > a").id != 'qr_auth') { //sms아닐때
                                this.document.getElementById('qr_auth').click();
                            }
                        }

                        this.document.getElementById('pushName').value = profilesOb[spI].name;
                        this.document.getElementById('pushPhone').value = profilesOb[spI].phone_number;
                        this.document.getElementById('pushCaptchaCfm').focus();
                    }
                } else if (window.location.hostname == 'kssa.inicis.com') {
                    log('KG이니시스');
                    if (this.document.querySelector("#carrier")) {
                        if (profilesOb[spI].carrier == carrier.SKT) {
                            var carrierBtn = 'SKT';
                        } else if (profilesOb[spI].carrier == carrier.KT) {
                            var carrierBtn = 'KTF';
                        } else if (profilesOb[spI].carrier == carrier.LGU) {
                            var carrierBtn = 'LGT';
                        } else if (profilesOb[spI].carrier == carrier.SKT_MVNO) {
                            var carrierBtn = 'SKR';
                        } else if (profilesOb[spI].carrier == carrier.KT_MVNO) {
                            var carrierBtn = 'KTR';
                        } else if (profilesOb[spI].carrier == carrier.LGU_MVNO) {
                            var carrierBtn = 'LGR';
                        }
                        this.document.querySelector("#carrier").value = carrierBtn;
                    }
                    
                    if (this.document.querySelector("#nation_local")) {
                        if (profilesOb[spI].foreigner == '0') {
                            this.document.querySelector("#nation_local").click();
                        } else {
                            this.document.querySelector("#nation_foreign").click();
                        }
                    }

                    if (this.document.querySelector("#gender_male")) {
                        if (profilesOb[spI].gender == '1') {
                            this.document.querySelector("#gender_male").click();
                        } else {
                            this.document.querySelector("#gender_female").click();
                        }
                    }

                    if (this.document.getElementById('name')) {
                        this.document.getElementById('name').value = profilesOb[spI].name;
                    }
                    if (this.document.getElementById('birth')) {
                        this.document.getElementById('birth').value = profilesOb[spI].birth;
                    }
                    if (this.document.getElementById('phone')) {
                        this.document.getElementById('phone').value = profilesOb[spI].phone_number;
                    }
                    if (this.document.getElementById("all_check")) {
                        this.document.getElementById("all_check").click();
                    }
                    if (this.document.getElementById("code")) {
                        this.document.getElementById("code").focus();
                    }

                } else if (window.location.hostname == 'www.gov.kr') {
                    log('정부24');

                    var nameInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(1) > div.ul-td > input[type=text]";
                    var birthDate8DigitInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(2) > div.ul-td > input";
                    var birthDate6DigitInputQuery = null;
                    var rrnInputQuery = null;
                    var phone1InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > select:nth-child(2)";
                    var phone2InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > input";
                    var carrierInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.telecom > div.ul-td > select.one-third.mr15";
                    var agreeInputQuery = "#totalAgree";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'easysign.anyid.go.kr') {
                    log('행정안전부 ‘Any-ID’ 간편 로그인 서비스');

                    // PC
                    var nameInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(1) > div.ul-td > input[type=text]";
                    var birthDate8DigitInputQuery = "#oacx_birth";
                    var birthDate6DigitInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.oacx-ssn > div.ul-td > input[type=text]:nth-child(1)";
                    var rrnInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.oacx-ssn > div.ul-td > input[type=password]:nth-child(2)";
                    var phone1InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > select:nth-child(2)";
                    var phone2InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > input";
                    var carrierInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.telecom > div.ul-td > select.one-third.mr15";
                    var agreeInputQuery = "#totalAgree";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);


                    // Mobile
                    var nameInputQuery = "#oacxEmbededContents > div.mobileView > section > ul.userInfo > li:nth-child(1) > div.ul-td > input[type=text]";
                    var birthDate8DigitInputQuery = null;
                    var birthDate6DigitInputQuery = "#oacxEmbededContents > div.mobileView > section > ul.userInfo > li.oacx-ssn > div.ul-td > input[type=text]:nth-child(1)";
                    var rrnInputQuery = "#oacxEmbededContents > div.mobileView > section > ul.userInfo > li.oacx-ssn > div.ul-td > input[type=password]:nth-child(2)";
                    var phone1InputQuery = "#oacxEmbededContents > div.mobileView > section > ul.userInfo > li:nth-child(4) > div.ul-td > select:nth-child(2)";
                    var phone2InputQuery = "#oacxEmbededContents > div.mobileView > section > ul.userInfo > li:nth-child(4) > div.ul-td > input";
                    var carrierInputQuery = "#oacxEmbededContents > div.mobileView > section > ul.userInfo > li:nth-child(4) > div.ul-td > select.one-third.mr15";
                    var agreeInputQuery = null;

                    var check_provider = setInterval(function() {
                        var provider = document.querySelector("#oacxEmbededContents > div.mobileView > section > ul.providerInfo > li > a");

                        // 인증기관 선택완료시
                        if (provider && !provider.title.includes('인증기관 선택')) {
                            var run = autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);
                            clearInterval(check_provider);
                            setTimeout(() => {
                                clearInterval(run);
                                this.document.querySelector("#oacxEmbededContents > div.alertArea > div > div.btnArea > button").click();
                            }, 700);
                        }
                    }, 500);

                } else if (window.location.hostname == 'efamily.scourt.go.kr') {
                    log('가족관계등록시스템');
                    
                    var nameInputQuery = null;
                    var birthDate8DigitInputQuery = null;
                    var birthDate6DigitInputQuery = null;
                    var rrnInputQuery = null;
                    var phone1InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > select:nth-child(2)";
                    var phone2InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > input";
                    var carrierInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.telecom > div.ul-td > select.one-third";
                    var agreeInputQuery = "#totalAgree";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'www.efine.go.kr') {
                    log('교통민원24');
                    
                    var nameInputQuery = "#oacx_name";
                    var birthDate8DigitInputQuery = null;
                    var birthDate6DigitInputQuery = "#oacx_num1";
                    var rrnInputQuery = "#oacx_num2";
                    var phone1InputQuery = "#submitFm > table > tbody > tr.telecom > td > select:nth-child(2)";
                    var phone1InputQuery2 = "#oacx_phone1";
                    var phone2InputQuery = "#oacx_phone3";
                    var phone2InputQuery2 = "#oacx_phone2";
                    var carrierInputQuery = "#submitFm > table > tbody > tr.telecom > td > select:nth-child(1)";
                    var agreeInputQuery = "#oacx_total";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);
                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery2, phone2InputQuery2, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'www.egroup.go.kr') {
                    log('기업집단포털');
                    
                    var nameInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(1) > div.ul-td > input[type=text]";
                    var birthDate8DigitInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(2) > div.ul-td > input";
                    var birthDate6DigitInputQuery = null;
                    var rrnInputQuery = null;
                    var phone1InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > select:nth-child(2)";
                    var phone2InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > input";
                    var carrierInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.telecom > div.ul-td > select.one-third.mr15";
                    var agreeInputQuery = "#policy4";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'www.icl.go.kr') {
                    log('학자금상환 시스템');
                    
                    var nameInputQuery = "#oacx_name";
                    var birthDate8DigitInputQuery = "#oacx_birth";
                    var birthDate6DigitInputQuery = null;
                    var rrnInputQuery = null;
                    var phone1InputQuery = "#submitFm > table > tbody > tr:nth-child(4) > td > select:nth-child(2)";
                    var phone2InputQuery = "#oacx_phone3";
                    var carrierInputQuery = "#submitFm > table > tbody > tr:nth-child(4) > td > select:nth-child(1)";
                    var agreeInputQuery = "#oacx_total";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'minwon.moj.go.kr') {
                    log('법무부 온라인민원서비스');
                    
                    var nameInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(1) > div.ul-td > input[type=text]";
                    var birthDate8DigitInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(2) > div.ul-td > input";
                    var birthDate6DigitInputQuery = null;
                    var rrnInputQuery = null;
                    var phone1InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > select:nth-child(2)";
                    var phone2InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > input";
                    var carrierInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > select.one-third.mr15";
                    var agreeInputQuery = "#totalAgree";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'www.kosaf.go.kr') {
                    log('한국장학재단');
                    
                    var nameInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(1) > div.ul-td > input[type=text]";
                    var birthDate8DigitInputQuery = null;
                    var birthDate6DigitInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.oacx-ssn > div.ul-td > input[type=text]:nth-child(1)";
                    var rrnInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.oacx-ssn > div.ul-td > input[type=password]:nth-child(2)";
                    var phone1InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > select:nth-child(2)";
                    var phone2InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > input";
                    var carrierInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > select.one-third.mr15";
                    var agreeInputQuery = "#totalAgree";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'www.epost.go.kr') {
                    log('인터넷우체국');
                    
                    var nameInputQuery = "#oacx_name";
                    var birthDate8DigitInputQuery = "#oacx_birth";
                    var birthDate6DigitInputQuery = null;
                    var rrnInputQuery = null;
                    var phone1InputQuery = "#oacx_phone1";
                    var phone1InputQuery2 = "#submitFm > table > tbody > tr.telecom > td > select:nth-child(2)";
                    var phone2InputQuery = "#oacx_phone2";
                    var phone2InputQuery2 = "#oacx_phone3";
                    var carrierInputQuery = "#submitFm > table > tbody > tr.telecom > td > select:nth-child(1)";
                    var agreeInputQuery = "#oacx_total";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);
                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery2, phone2InputQuery2, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'www.epeople.go.kr') {
                    log('국민신문고');
                    
                    var nameInputQuery = "#oacx_name";
                    var birthDate8DigitInputQuery = null;
                    var birthDate6DigitInputQuery = "#oacx_num1";
                    var rrnInputQuery = "#oacx_num2";
                    var phone1InputQuery = "#oacx_phone1";
                    var phone1InputQuery2 = "#submitFm > table > tbody > tr.telecom > td > select:nth-child(2)";
                    var phone2InputQuery = "#oacx_phone2";
                    var phone2InputQuery2 = "#oacx_phone3";
                    var carrierInputQuery = "#submitFm > table > tbody > tr.telecom > td > select:nth-child(1)";
                    var agreeInputQuery = "#oacx_total";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);
                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery2, phone2InputQuery2, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'cert.mma.go.kr') {
                    log('병무민원');

                    var nameInputQuery = null;
                    var birthDate8DigitInputQuery = null;
                    var birthDate6DigitInputQuery = null;
                    var rrnInputQuery = null;
                    var phone1InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > select:nth-child(2)";
                    var phone2InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > input";
                    var carrierInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.telecom > div.ul-td > select.one-third.mr15";
                    var agreeInputQuery = "#totalAgree";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);
                    
                } else if (window.location.hostname == 'www.yebigun1.mil.kr') {
                    log('예비군홈페이지');

                    // 공동인증서(구 공인인증서) 자동완성
                    if (this.document.querySelector("#name")) {
                        this.document.querySelector("#name").value = selectedProfile.name;
                        this.document.querySelector("#reg_no_first").value = selectedProfile.birth.substr(2, 6);    
                    }
                    
                    var nameInputQuery = "#oacx_name";
                    var birthDate8DigitInputQuery = null;
                    var birthDate6DigitInputQuery = "#oacx_num1";
                    var rrnInputQuery = "#oacx_num2";
                    var phone1InputQuery = "#oacx_phone1";
                    var phone1InputQuery2 = "#submitFm > table > tbody > tr.telecom > td > select:nth-child(2)";
                    var phone2InputQuery = "#oacx_phone2";
                    var phone2InputQuery2 = "#oacx_phone3";
                    var carrierInputQuery = "#submitFm > table > tbody > tr.telecom > td > select:nth-child(1)";
                    var agreeInputQuery = "#oacx_total";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);
                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery2, phone2InputQuery2, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname.includes('hometax.go.kr')) {
                    log('홈택스');

                    // 비회원로그인
                    setInterval(function() {
                        var nameInput = this.document.querySelector("#iptUserNm");
                        var birthDateInput = this.document.querySelector("#iptUserJuminNo1");
                        var rrnInput = this.document.querySelector("#iptUserJuminNo2");
                        var agreeInput1 = this.document.querySelector("#prvcClgtArgeYn_input_0");
                        var agreeInput2 = this.document.querySelector("#ukInfoYn_input_0")

                        // 이름
                        if(nameInput) {
                            nameInput.value = selectedProfile.name;
                            trigger_input_event(nameInput);
                        }
                
                        // 생년월일 8자리
                        if(birthDateInput) {
                            birthDateInput.value = selectedProfile.birth.substr(2, 6);
                            trigger_input_event(birthDateInput);
                        }
                
                        // 약관동의
                        if(agreeInput1 && !agreeInput1.checked) {
                            agreeInput1.click();
                        }

                        // 약관동의
                        if(agreeInput2 && !agreeInput2.checked) {
                            agreeInput2.click();
                            // 주민등록번호 입력 포커스
                            if(rrnInput) {
                                rrnInput.focus();
                            }
                        }
                    }, 500);

                    var nameInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(1) > div.ul-td > input[type=text]";
                    var birthDate8DigitInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(2) > div.ul-td > input";
                    var birthDate6DigitInputQuery = null;
                    var rrnInputQuery = null;
                    var phone1InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > select:nth-child(2)";
                    var phone2InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > input";
                    var carrierInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.telecom > div.ul-td > select.one-third.mr15";
                    var agreeInputQuery = "#totalAgree";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);
                    
                } else if (window.location.hostname == 'www.nfqs.go.kr') {
                    log('국립수산물품질관리원');

                    var nameInputQuery = "#oacx_name";
                    var birthDate8DigitInputQuery = "#oacx_birth";
                    var birthDate6DigitInputQuery = null;
                    var rrnInputQuery = null;
                    var phone1InputQuery = "#oacx_phone1";
                    var phone1InputQuery2 = "#submitFm > table > tbody > tr.telecom > td > select:nth-child(2)";
                    var phone2InputQuery = "#oacx_phone2";
                    var phone2InputQuery2 = "#oacx_phone3";
                    var carrierInputQuery = "#submitFm > table > tbody > tr.telecom > td > select:nth-child(1)";
                    var agreeInputQuery = "#oacx_policy3";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);
                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery2, phone2InputQuery2, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'datalab.nts.go.kr') {
                    log('국세통계센터시스템');

                    var nameInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(1) > div.ul-td > input[type=text]";
                    var birthDate8DigitInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(2) > div.ul-td > input";
                    var birthDate6DigitInputQuery = null;
                    var rrnInputQuery = null;
                    var phone1InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > select:nth-child(2)";
                    var phone2InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > input";
                    var carrierInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.telecom > div.ul-td > select.one-third.mr15";
                    var agreeInputQuery = "#totalAgree";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'www.4insure.or.kr') {
                    log('4대사회보험정보연계센터');

                    var nameInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(1) > div.ul-td > input[type=text]";
                    var birthDate8DigitInputQuery = null;
                    var birthDate6DigitInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.oacx-ssn > div.ul-td > input[type=text]:nth-child(1)";
                    var rrnInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.oacx-ssn > div.ul-td > input[type=password]:nth-child(2)";
                    var phone1InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > select:nth-child(2)";
                    var phone2InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > input";
                    var carrierInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.telecom > div.ul-td > select.one-third.mr15";
                    var agreeInputQuery = "#totalAgree";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'www.animal.go.kr') {
                    log('동물보호관리 시스템');

                    var nameInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(1) > div.ul-td > input[type=text]";
                    var birthDate8DigitInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(2) > div.ul-td > input";
                    var birthDate6DigitInputQuery = null;
                    var rrnInputQuery = null;
                    var phone1InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > select:nth-child(2)";
                    var phone2InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > input";
                    var carrierInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.telecom > div.ul-td > select.one-third.mr15";
                    var agreeInputQuery = "#policy4";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'egdrs.scourt.go.kr') {
                    log('전자후견등기 시스템');

                    var nameInputQuery = null;
                    var birthDate8DigitInputQuery = null;
                    var birthDate6DigitInputQuery = null;
                    var rrnInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.oacx-ssn > div.ul-td > input[type=password]:nth-child(2)";
                    var phone1InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.none-telecom > div.ul-td > select:nth-child(2)";
                    var phone2InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > input";
                    var carrierInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.telecom > div.ul-td > select.one-third.mr15";
                    var agreeInputQuery = "#totalAgree";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'www.kics.go.kr') {
                    log('형사사법포털');

                    var nameInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(1) > div.ul-td > input[type=text]";
                    var birthDate8DigitInputQuery = null;
                    var birthDate6DigitInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.oacx-ssn > div.ul-td > input[type=text]:nth-child(1)";
                    var rrnInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.oacx-ssn > div.ul-td > input[type=password]:nth-child(2)";
                    var phone1InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.none-telecom > div.ul-td > select:nth-child(2)";
                    var phone2InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > input";
                    var carrierInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.telecom > div.ul-td > select.one-third.mr15";
                    var agreeInputQuery = "#totalAgree";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'www.e-health.go.kr') {
                    log('공공보건포털');

                    var nameInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(1) > div.ul-td > input[type=text]";
                    var birthDate8DigitInputQuery = null;
                    var birthDate6DigitInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.oacx-ssn > div.ul-td > input[type=text]:nth-child(1)";
                    var rrnInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.oacx-ssn > div.ul-td > input[type=password]:nth-child(2)";
                    var phone1InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.none-telecom > div.ul-td > select:nth-child(2)";
                    var phone2InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > input";
                    var carrierInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.telecom > div.ul-td > select.one-third.mr15";
                    var agreeInputQuery = "#totalAgree";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'nip.kdca.go.kr') {
                    log('예방접종도우미');
                    // 한컴위드 AnySign Lite + (애니사인 라이트 플러스)

                    setInterval(function() {
                        var nameInput = this.document.querySelector("#name");
                        var birthDateInput = this.document.querySelector("#birthday");
                        var phoneInput = this.document.querySelector("#phone");
                        var agreeInput = this.document.querySelector("#B3");

                        // 이름
                        if(nameInput) {
                            nameInput.value = selectedProfile.name;
                        }
                
                        // 생년월일 8자리
                        if(birthDateInput) {
                            birthDateInput.value = selectedProfile.birth;
                        }

                        // 전화번호
                        if(phoneInput) {
                            phoneInput.value = selectedProfile.phone_number;
                        }

                        // 약관동의
                        if(agreeInput) {
                            agreeInput.click();
                        }

                    }, 500);

                } else if (window.location.hostname == 'www.eshare.go.kr') {
                    log('공유누리');

                    var nameInputQuery = "#oacx_name";
                    var birthDate8DigitInputQuery = "#oacx_birth";
                    var birthDate6DigitInputQuery = null;
                    var rrnInputQuery = null;
                    var phone1InputQuery = "#oacx_phone1";
                    var phone2InputQuery = "#oacx_phone2";
                    var carrierInputQuery = "#submitFm > table > tbody > tr.telecom > td > select:nth-child(1)";
                    var agreeInputQuery = "#oacx_policy3";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'juminegov.go.kr') {
                    log('주민e직접 플랫폼');

                    setInterval(function() {
                        var nameInput = this.document.querySelector("#certNm");
                        var birthDateInput = this.document.querySelector("#certIino1");
                        var rrnInput = this.document.querySelector("#certIino2");
                        var phone1Input = this.document.querySelector("#certTel1");
                        var phone2Input = this.document.querySelector("#certTel2");
                        var phone3Input = this.document.querySelector("#certTel3");
                        var agreeInput = this.document.querySelector("#indiInfoUseAgreYnY");

                        // 이름
                        if(nameInput) {
                            nameInput.value = selectedProfile.name;
                        }
                
                        // 생년월일 8자리
                        if(birthDateInput) {
                            birthDateInput.value = selectedProfile.birth.substr(2, 6);
                        }

                        // 전화번호
                        if(phone1Input) {
                            phone1Input.value = selectedProfile.phone_number.substring(0, 3);
                        }
                        if(phone2Input) {
                            phone2Input.value = selectedProfile.phone_number.substring(3, 7);
                        }
                        if(phone3Input) {
                            phone3Input.value = selectedProfile.phone_number.substring(7, 12);
                        }

                        // 약관동의
                        if(agreeInput && !agreeInput.checked) {
                            agreeInput.click();
                            if(rrnInput) {
                                rrnInput.focus();
                            }
                        }

                    }, 500);

                    var nameInputQuery = null;
                    var birthDate8DigitInputQuery = null;
                    var birthDate6DigitInputQuery = null;
                    var rrnInputQuery = null;
                    var phone1InputQuery = null;
                    var phone2InputQuery = null;
                    var carrierInputQuery = "#submitFm > table > tbody > tr.telecom > td > select:nth-child(1)";
                    var agreeInputQuery = "#oacx_total";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'etax.seoul.go.kr') {
                    log('서울특별시 전자고지납부시스템(ETAX)');

                    var nameInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(1) > div.ul-td > input[type=text]";
                    var birthDate8DigitInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(2) > div.ul-td > input";
                    var birthDate6DigitInputQuery = null;
                    var rrnInputQuery = null;
                    var phone1InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.none-telecom > div.ul-td > select:nth-child(2)";
                    var phone2InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > input";
                    var carrierInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.telecom > div.ul-td > select.one-third.mr15";
                    var agreeInputQuery = "#totalAgree";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'www.wetax.go.kr') {
                    log('위택스');

                    var nameInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(1) > div.ul-td > input[type=text]";
                    var birthDate8DigitInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(2) > div.ul-td > input";
                    var birthDate6DigitInputQuery = null;
                    var rrnInputQuery = null;
                    var phone1InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.none-telecom > div.ul-td > select:nth-child(2)";
                    var phone2InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > input";
                    var carrierInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.telecom > div.ul-td > select.one-third.mr15";
                    var agreeInputQuery = "#totalAgree";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'cartax.seoul.go.kr') {
                    log('서울특별시 교통위반단속조회 서비스');

                    var nameInputQuery = "#oacx_name";
                    var birthDate8DigitInputQuery = null;
                    var birthDate6DigitInputQuery = "#oacx_num1";
                    var rrnInputQuery = "#oacx_num2";
                    var phone1InputQuery = "#oacx_phone1";
                    var phone2InputQuery = "#oacx_phone2";
                    var carrierInputQuery = "#submitFm > table > tbody > tr.telecom > td > select:nth-child(1)";
                    var agreeInputQuery = "#oacx_total";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);

                } else if (window.location.hostname == 'apply.lh.or.kr') {
                    log('LH청약센터');

                    setInterval(function() {
                        var nameInputs = [
                            // 토스인증서
                            this.document.querySelector("#toss_userName"),

                            // KB국민인증서
                            this.document.querySelector("#kb_userName"),
                        ];

                        var birthDateInputs = [
                            // 공동인증서
                            this.document.querySelector("#cert0_type0_num0"),

                            // 금융인증서
                            this.document.querySelector("#cert1_type0_num0"),

                            // 토스인증서
                            this.document.querySelector("#toss_ihidnum01"),

                            // KB국민인증서
                            this.document.querySelector("#kb_ihidnum01"),
                        ];

                        var phone1Inputs = [
                            // 토스인증서
                            this.document.querySelector("#toss_userPhone01"),

                            // KB국민인증서
                            this.document.querySelector("#kb_userPhone01"),
                        ];

                        var phone2Input = [
                            // 토스인증서
                            this.document.querySelector("#toss_userPhone02"),

                            // KB국민인증서
                            this.document.querySelector("#kb_userPhone02"),
                        ];
                        
                        var phone3Input = [
                            // 토스인증서
                            this.document.querySelector("#toss_userPhone03"),

                            // KB국민인증서
                            this.document.querySelector("#kb_userPhone03"),
                        ];

                        var koreanInputs = [
                            // 공동인증서
                            this.document.querySelector("#radio_cert0_type0"),

                            // 금융인증서
                            this.document.querySelector("#radio_cert1_type0"),

                            // 토스인증서
                            this.document.querySelector("#toss_crtfTpCd01"),

                            // KB국민인증서
                            this.document.querySelector("#kb_crtfTpCd01"),
                        ];

                        var foreignerInputs = [
                            // 공동인증서
                            this.document.querySelector("#radio_cert0_type2"),

                            // 금융인증서
                            this.document.querySelector("#radio_cert1_type2"),

                            // 토스인증서
                            this.document.querySelector("#toss_crtfTpCd02"),

                            // KB국민인증서
                            this.document.querySelector("#kb_crtfTpCd02"),
                        ];


                        // 이름
                        for (nameInput of nameInputs) {
                            if(nameInput) {
                                nameInput.value = selectedProfile.name;
                            }
                        }

                        // 생년월일 6자리
                        for (birthDateInput of birthDateInputs) {
                            if(birthDateInput) {
                                console.log("SSS");
                                birthDateInput.value = selectedProfile.birth.substr(2, 6);
                            }
                        }

                        // 전화번호
                        for (phone1Input of phone1Inputs) {
                            if(phone1Input) {
                                phone1Input.value = selectedProfile.phone_number.substring(0, 3);
                            }
                        }
                        for (phone2Input of phone2Input) {
                            if(phone2Input) {
                                phone2Input.value = selectedProfile.phone_number.substring(3, 7);
                            }
                        }
                        for (phone3Input of phone3Input) {
                            if(phone3Input) {
                                phone3Input.value = selectedProfile.phone_number.substring(7, 11);
                            }
                        }

                        // 외국인
                        if(selectedProfile.foreigner == '1') {
                            for (foreignerInput of foreignerInputs) {
                                if(foreignerInput) {
                                    foreignerInput.click();
                                }
                            }
                        } else {
                            for (koreanInput of koreanInputs) {
                                if(koreanInput) {
                                    koreanInput.click();
                                }
                            }
                        }

                    }, 500);

                } else {
                    // 기타 사이트 처리

                    var nameInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(1) > div.ul-td > input[type=text]";
                    var birthDate8DigitInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(2) > div.ul-td > input";
                    var birthDate6DigitInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.oacx-ssn > div.ul-td > input[type=text]:nth-child(1)";
                    var rrnInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.oacx-ssn > div.ul-td > input[type=password]:nth-child(2)";
                    var phone1InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.none-telecom > div.ul-td > select:nth-child(2)";
                    var phone2InputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li:nth-child(4) > div.ul-td > input";
                    var carrierInputQuery = "#oacxEmbededContents > div:nth-child(2) > div > div.formLayout > section > form > div.tab-content > div:nth-child(1) > ul > li.telecom > div.ul-td > select.one-third.mr15";
                    var agreeInputQuery = "#totalAgree";

                    autofill_for_mois(selectedProfile, nameInputQuery, birthDate8DigitInputQuery, birthDate6DigitInputQuery, rrnInputQuery, phone1InputQuery, phone2InputQuery, carrierInputQuery, agreeInputQuery);

                }
            }
        } else {
            log('OFF');
        }
    });
};