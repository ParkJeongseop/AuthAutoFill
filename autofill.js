window.onload = function () {
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
                    if (profilesOb[0].birth[0] = '1') {
                        this.document.getElementById('mynum2').value = profilesOb[0].gender;
                    } else {
                        this.document.getElementById('mynum2').value = Number(profilesOb[0].gender) + 2;
                    }
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
                        this.document.querySelector('#agreelist > li:nth-child(' + (i+1) + ') > span > label').click();
                    };
                    this.document.querySelector('#ct > fieldset > button').click();
                } else if (!this.document.querySelector('#header > ul > li:nth-child(3)').classList.length) { //sms아닐때
                    this.document.querySelector('#header > ul > li:nth-child(3) > a').click();
                } else {
                    this.document.getElementById('userName').value = profilesOb[0].name;
                    this.document.getElementById('birthDay1').value = profilesOb[0].birth.substr(2, 6);
                    if (profilesOb[0].birth[0] = '1') {
                        this.document.getElementById('birthDay2').value = profilesOb[0].gender;
                    } else {
                        this.document.getElementById('birthDay2').value = Number(profilesOb[0].gender) + 2;
                    }
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
                        this.document.getElementById('certi01').click();
                        this.document.getElementById('certi02').click();
                        this.document.getElementById('certi03').click();
                        this.document.getElementById('certi04').click();
                        this.document.getElementById('nm').focus();
                        this.document.getElementById('brdt').focus();
                        this.document.getElementById('mbphn_no').focus();
                        this.document.getElementById('captchaCode').focus();
                    }
                }
            }
        }
    });
};