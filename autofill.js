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
                    if(this.document.getElementById('agency-sk').value == 'SKT'){
                        if(profilesOb[0].carrier == '1'){
                            var carrier = 'agency-sk';
                        }else if(profilesOb[0].carrier == '2'){
                            var carrier = 'agency-kt';
                        }else if(profilesOb[0].carrier == '3'){
                            var carrier = 'agency-lgu';
                        }else{
                            var carrier = 'agency-and';
                        }
                        
                    }else{ // 알뜰폰 통신사 선택페이지
                        if(profilesOb[0].carrier == '4'){
                            var carrier = 'agency-sk';
                        }else if(profilesOb[0].carrier == '5'){
                            var carrier = 'agency-kt';
                        }else if(profilesOb[0].carrier == '6'){
                            var carrier = 'agency-lgu';
                        }
                    }

                    this.document.getElementById(carrier).click();
                    this.document.querySelector('#ct > form > fieldset > ul.agreelist.all > li > span > label:nth-child(2)').click();
                    this.document.getElementById('btnSubmit').click();
                    
                }
                else if (this.document.getElementById('sms_auth').title != '선택됨') {
                    this.document.getElementById('sms_auth').click();
                } else {
                    this.document.getElementById('username').value = profilesOb[0].name;
                    this.document.getElementById('mynum1').value = profilesOb[0].birth.substr(2,6);
                    if(profilesOb[0].birth[0]='1'){
                        this.document.getElementById('mynum2').value = profilesOb[0].gender;
                    }else{
                        this.document.getElementById('mynum2').value = Number(profilesOb[0].gender)+2;
                    }
                    this.document.getElementById('mobileno').value = profilesOb[0].phone_number;
                    this.document.getElementById('answer').focus();
                }
            }
        }
    });

    
};