// // if (window.location.hostname == 'www.mobile-ok.com') {
// //     this.console.log('드림시큐러티');
// //     this.document.querySelector('head > script:nth-child(15)').text = this.document.querySelector('head > script:nth-child(15)').text.replace('confirm("고객님의 정보보호를 위해\\n보안 프로그램을 설치하시겠습니까?")','false');
// // }
// console.log("FIRST");
// // this.document.head.textContent.text = this.document.head.textContent.text.replace('confirm("고객님의 정보보호를 위해\\n보안 프로그램을 설치하시겠습니까?")', 'false');

// if (window.location.hostname == 'www.mobile-ok.com') {
//     // this.document.querySelector('head').innerHTML += '<script>confirm = function() {};</script>';
//     // this.confirm = function() {};
//     remove_ad = setInterval(function () {
//         try {
//             console.log("1");

//             this.document.querySelector('head').innerHTML += '<script>confirm = function() {};</script>';
//             // this.document.head.textContent = this.document.head.textContent.replace('confirm("고객님의 정보보호를 위해\\n보안 프로그램을 설치하시겠습니까?")', 'false');
//             this.document.querySelector('head > script:nth-child(15)').text = this.document.querySelector('head > script:nth-child(15)').text.replace('confirm("고객님의 정보보호를 위해\\n보안 프로그램을 설치하시겠습니까?")', 'false');
//             console.log("2");
//             clearInterval(remove_ad);
//             console.log("3");
//             // throw "myException"; // generates an exception
//         } catch (e) {
//             console.log("4");
//             console.log(e);
//             // statements to handle any exceptions
//             // logMyErrors(e); // pass exception object to error handler
//         }


//     }, 1);

// }
// // document.addEventListener("DOMContentLoaded", function () {
// //     this.console.log('드림시큐러티');
// //     this.document.head.textContent.text = this.document.head.textContent.text.replace('confirm("고객님의 정보보호를 위해\\n보안 프로그램을 설치하시겠습니까?")', 'false');
// // });


// 9: 1800 ~ 1899년에 태어난 남성<br>
// 0: 1800 ~ 1899년에 태어난 여성<br>
// 1: 1900 ~ 1999년에 태어난 남성<br>
// 2: 1900 ~ 1999년에 태어난 여성<br>
// 3: 2000 ~ 2099년에 태어난 남성<br>
// 4: 2000 ~ 2099년에 태어난 여성<br>
// 5: 1900 ~ 1999년에 태어난 외국인 남성<br>
// 6: 1900 ~ 1999년에 태어난 외국인 여성<br>
// 7: 2000 ~ 2099년에 태어난 외국인 남성<br>
// 8: 2000 ~ 2099년에 태어난 외국인 여성으로 분류된다.<br>
function get_RRN_GenderNum(birth, gender, foreigner) {
    if (birth.substr(0,2) == '18') {
        var num = gender == '1'? 9 : 0;
    } else if (birth.substr(0,2) == '19' && foreigner == '0') {
        var num = gender;
    } else if (birth.substr(0,2) == '20' && foreigner == '0') {
        var num = Number(gender) + 2;
    } else if (birth.substr(0,2) == '19' && foreigner == '1') {
        var num = Number(gender) + 4;;
    } else if (birth.substr(0,2) == '20' && foreigner == '1') {
        var num = Number(gender) + 6;
    }
    return num;
};

window.onload = function () {
    // if (window.location.hostname == 'www.mobile-ok.com') {
    //     this.console.log('드림시큐러티');
    //     this.document.querySelector('head > script:nth-child(15)').text = this.document.querySelector('head > script:nth-child(15)').text.replace('confirm("고객님의 정보보호를 위해\\n보안 프로그램을 설치하시겠습니까?")', 'false');
    // }
    this.console.log(location.href);
    this.console.log(window.location.hostname);

    this.console.log('Auth Autofill (본인인증 자동완성)\n한국 휴대전화 본인인증 서비스 자동완성 브라우저 확장 프로그램');

    chrome.storage.sync.get(function (data) {
        if (data.profiles) {
            var profilesOb = JSON.parse(data.profiles).profiles;

            if (window.location.hostname == 'nice.checkplus.co.kr') {
                this.console.log('나이스신용평가정보');

                if (this.document.getElementById('agency-sk')) { //통신사 선택페이지
                    if (this.document.getElementById('agency-sk').value == 'SKT') {
                        if (profilesOb[0].carrier == '1') {
                            var carrier = 'agency-sk';
                        } else if (profilesOb[0].carrier == '2') {
                            var carrier = 'agency-kt';
                        } else if (profilesOb[0].carrier == '3') {
                            var carrier = 'agency-lgu';
                        } else {
                            var carrier = 'agency-and';
                        }
                    } else { // 알뜰폰 통신사 선택페이지
                        if (profilesOb[0].carrier == '4') {
                            var carrier = 'agency-sk';
                        } else if (profilesOb[0].carrier == '5') {
                            var carrier = 'agency-kt';
                        } else if (profilesOb[0].carrier == '6') {
                            var carrier = 'agency-lgu';
                        }
                    }
                    this.document.getElementById(carrier).click();
                    this.document.querySelector('#ct > form > fieldset > ul.agreelist.all > li > span > label:nth-child(2)').click();
                    this.document.getElementById('btnSubmit').click();
                } else if (this.document.getElementById('sms_auth').title != '선택됨') {
                    this.document.getElementById('sms_auth').click();
                } else {
                    this.document.getElementById('username').value = profilesOb[0].name;
                    this.document.getElementById('mynum1').value = profilesOb[0].birth.substr(2, 6);
                    this.document.getElementById('mynum2').value = get_RRN_GenderNum(profilesOb[0].birth, profilesOb[0].gender, profilesOb[0].foreigner)
                    this.document.getElementById('mobileno').value = profilesOb[0].phone_number;
                    this.document.getElementById('answer').focus();
                }
            } else if (window.location.hostname == 'pcc.siren24.com') {
                this.console.log('서울신용평가정보');

                if (this.document.getElementById('agency-sk')) { //통신사 선택페이지
                    if (this.document.getElementById('agency-sk').value == 'SKT') {
                        if (profilesOb[0].carrier == '1') {
                            var carrier = 'agency-sk';
                        } else if (profilesOb[0].carrier == '2') {
                            var carrier = 'agency-kt';
                        } else if (profilesOb[0].carrier == '3') {
                            var carrier = 'agency-lgu';
                        } else {
                            var carrier = 'agency-and';
                        }
                    } else { // 알뜰폰 통신사 선택페이지
                        if (profilesOb[0].carrier == '4') {
                            var carrier = 'agency-sk';
                        } else if (profilesOb[0].carrier == '5') {
                            var carrier = 'agency-kt';
                        } else if (profilesOb[0].carrier == '6') {
                            var carrier = 'agency-lgu';
                        }
                    }
                    this.document.getElementById(carrier).click();
                    for (var i = 0; i < 4; i++) {
                        this.document.querySelector('#agreelist > li:nth-child(' + (i + 1) + ') > span > label').click();
                    };
                    this.document.querySelector('#ct > fieldset > button').click();
                } else if (!this.document.querySelector('#header > ul > li:nth-child(3)').classList.length) { //sms아닐때
                    this.document.querySelector('#header > ul > li:nth-child(3) > a').click();
                } else {
                    this.document.getElementById('userName').value = profilesOb[0].name;
                    this.document.getElementById('birthDay1').value = profilesOb[0].birth.substr(2, 6);
                    this.document.getElementById('birthDay2').value = get_RRN_GenderNum(profilesOb[0].birth, profilesOb[0].gender, profilesOb[0].foreigner)
                    this.document.getElementsByName('No')[0].value = profilesOb[0].phone_number;
                    this.document.getElementById('secur').focus();
                }
            } else if (window.location.hostname == 'safe.ok-name.co.kr') {
                this.console.log('코리아크레딧뷰로');

                if (this.document.querySelector('#layerPop > div.popContent > div.telecomSelect')) { //통신사 선택페이지
                    // if(profilesOb[0].carrier > 3){
                    //     var carrier = '55';
                    // }else{
                    //     var carrier = profilesOb[0].carrier;
                    // }
                    //jsSubmitMblTelCmm(carrier);
                    // chrome.tabs.executeScript({
                    //     code: 'jsSubmitMblTelCmm(' + carrier + ');'
                    // });
                    // chrome.runtime.sendMessage({ from: 'content_script', message: 'Information from webpage.' });
                    // chrome.tabs.executeScript({code:"console.log('content_script')"});
                    // this.console.log(jsSubmitMblTelCmm);

                    if (profilesOb[0].carrier == '1') {
                        var carrier = 'skt';
                    } else if (profilesOb[0].carrier == '2') {
                        var carrier = 'kt';
                    } else if (profilesOb[0].carrier == '3') {
                        var carrier = 'lgu';
                    } else {
                        var carrier = 'mvno';
                    }
                    this.document.querySelector('#layerPop > div.popContent > div.telecomSelect > ul > li.' + carrier + ' > a').click();
                } else if (this.document.querySelector('#layerPop > div.popContent > div.mvnoSelectBox')) { //알뜰폰 통신사 선택페이지
                    this.document.getElementById('radio0' + (profilesOb[0].carrier - 3)).click();
                    // jsSubmitMblTelCmm('');
                    this.document.querySelector('#layerPop > div.popContent > div.btnArea.big > a.btn.btnGray').click();
                } else if (this.document.querySelector('body > form > div > div.popContent > div.tab > a.tabText')) {
                    if (!this.document.querySelector('body > form > div > div.popContent > div.tab > a.tabText.on > span.hide_txt')) { // 앱으로 눌려있을때
                        // changeHsCnfrm();
                        this.document.querySelector('body > form > div > div.popContent > div.tab > a.tabText').click();
                    } else { // SMS
                        this.document.getElementById('nm').value = profilesOb[0].name;
                        this.document.getElementById('brdt').value = profilesOb[0].birth;
                        this.document.querySelector('body > form > div > div.popContent > div.formTbl > table > tbody > tr:nth-child(1) > td > span.selectboxWrap > div > ul > li:nth-child(' + (Number(profilesOb[0].foreigner) + 1) + ') > a').click();
                        this.document.querySelector('body > form > div > div.popContent > div.formTbl > table > tbody > tr:nth-child(2) > td > div > a:nth-child(' + profilesOb[0].gender + ')').click();
                        this.document.getElementById('mbphn_no').value = profilesOb[0].phone_number;
                        for (var i = 0; i < 4; i++) {
                            this.document.getElementById('certi0' + (i + 1)).click();
                        };
                        this.document.getElementById('nm').focus();
                        this.document.getElementById('brdt').focus();
                        this.document.getElementById('mbphn_no').focus();
                        this.document.getElementById('captchaCode').focus();
                    }
                }
            } else if (window.location.hostname == 'www.mobile-ok.com') {
                this.console.log('드림시큐러티');
                // this.document.querySelector('head > script:nth-child(15)').text = this.document.querySelector('head > script:nth-child(15)').text.replace('confirm("고객님의 정보보호를 위해\\n보안 프로그램을 설치하시겠습니까?")', 'false');

                if (this.document.getElementById('agency-sk')) { //통신사 선택페이지
                    if (this.document.getElementById('agency-sk').value == 'SKT') {
                        if (profilesOb[0].carrier == '1') {
                            var carrier = 'agency-sk';
                        } else if (profilesOb[0].carrier == '2') {
                            var carrier = 'agency-kt';
                        } else if (profilesOb[0].carrier == '3') {
                            var carrier = 'agency-lgu';
                        } else {
                            var carrier = 'agency-and';
                        }
                    } else { // 알뜰폰 통신사 선택페이지
                        if (profilesOb[0].carrier == '4') {
                            var carrier = 'agency-sk';
                        } else if (profilesOb[0].carrier == '5') {
                            var carrier = 'agency-kt';
                        } else if (profilesOb[0].carrier == '6') {
                            var carrier = 'agency-lgu';
                        }
                    }
                    this.document.getElementById(carrier).click();
                    for (var i = 0; i < 4; i++) {
                        this.document.querySelector('#agreelist_chk > li:nth-child(' + (i + 2) + ') > span > label').click();
                    };
                    this.document.querySelector('#ct > fieldset > button').click();
                } else if (this.document.querySelector("#header > ul > li:nth-child(3) > a").title != '선택됨') { //sms아닐때
                    this.document.querySelector("#header > ul > li:nth-child(3) > a").click();
                } else {
                    this.document.getElementById('name').value = profilesOb[0].name;
                    this.document.getElementById('mynum1').value = profilesOb[0].birth.substr(2, 6);
                    this.document.getElementById('mynum2').value = get_RRN_GenderNum(profilesOb[0].birth, profilesOb[0].gender, profilesOb[0].foreigner)
                    this.document.getElementById('phone').value = profilesOb[0].phone_number;
                    this.document.getElementById('secur').focus();
                }
            } else if (window.location.hostname == 'www.kmcert.com') {
                this.console.log('한국모바일인증');
                
                if (this.document.getElementById('agency-sk')) { //통신사 선택페이지
                    if (this.document.getElementById('agency-sk').value == 'SKT') {
                        if (profilesOb[0].carrier == '1') {
                            var carrier = 'agency-sk';
                        } else if (profilesOb[0].carrier == '2') {
                            var carrier = 'agency-kt';
                        } else if (profilesOb[0].carrier == '3') {
                            var carrier = 'agency-lgu';
                        } else {
                            var carrier = 'agency-and';
                        }
                    } else { // 알뜰폰 통신사 선택페이지
                        if (profilesOb[0].carrier == '4') {
                            var carrier = 'agency-sk';
                        } else if (profilesOb[0].carrier == '5') {
                            var carrier = 'agency-kt';
                        } else if (profilesOb[0].carrier == '6') {
                            var carrier = 'agency-lgu';
                        }
                    }
                    this.document.getElementById(carrier).click();
                    for (var i = 0; i < 4; i++) {
                        this.document.getElementById('agree_list0' + (i + 1) ).click();
                    };
                    this.document.querySelector('#ct > fieldset > button').click();
                } else if (this.document.querySelector("#header > ul > li:nth-child(3) > a").title != '문자인증 선택됨') { //sms아닐때
                    this.document.querySelector("#header > ul > li:nth-child(3) > a").click();
                } else {
                    this.document.getElementById('userName').value = profilesOb[0].name;
                    this.document.getElementById('Birth').value = profilesOb[0].birth.substr(2, 6);
                    this.document.getElementById('Sex').value = get_RRN_GenderNum(profilesOb[0].birth, profilesOb[0].gender, profilesOb[0].foreigner);
                    this.document.getElementById('No').value = profilesOb[0].phone_number;
                    this.document.getElementById('securityNum').focus();
                }
            } else if (window.location.hostname == 'cert.kcp.co.kr') {
                this.console.log('한국사이버결제');
                
                if (this.document.getElementById('agency-sk')) { //통신사 선택페이지
                    if (!document.querySelector("#ct > fieldset > ul.licensee-list")) { // MNO 사업자
                        if (profilesOb[0].carrier == '1') {
                            var carrier = 'agency-sk';
                        } else if (profilesOb[0].carrier == '2') {
                            var carrier = 'agency-kt';
                        } else if (profilesOb[0].carrier == '3') {
                            var carrier = 'agency-lgu';
                        } else {
                            var carrier = 'agency-and';
                        }
                    } else { // 알뜰폰 통신사 선택페이지
                        if (profilesOb[0].carrier == '4') {
                            var carrier = 'agency-sk';
                        } else if (profilesOb[0].carrier == '5') {
                            var carrier = 'agency-kt';
                        } else if (profilesOb[0].carrier == '6') {
                            var carrier = 'agency-lgu';
                        }
                    }
                    this.document.getElementById(carrier).click();
                    for (var i = 0; i < 4; i++) {
                        this.document.getElementById('agree' + (i + 1) ).click();
                    };
                    this.document.querySelector('#ct > fieldset > button').click();
                } else if (this.document.querySelector("#header > ul > li:nth-child(3) > a").title != '선택 됨') { //sms아닐때
                    this.document.querySelector("#header > ul > li:nth-child(3) > a").click();
                } else {
                    this.document.getElementById('name').value = profilesOb[0].name;
                    this.document.getElementById('mynum1').value = profilesOb[0].birth.substr(2, 6);
                    this.document.getElementById('mynum2').value = get_RRN_GenderNum(profilesOb[0].birth, profilesOb[0].gender, profilesOb[0].foreigner);
                    this.document.getElementById('phone_no_rKey').value = profilesOb[0].phone_number;
                    this.document.getElementById('secur').focus();
                }
            }
        }
    });
};