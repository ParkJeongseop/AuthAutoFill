function getCarrierName(carrierCode) {
    if (carrierCode == '1') {
        var name = browser.i18n.getMessage('carrier_SKT');
    } else if (carrierCode == '2') {
        var name = browser.i18n.getMessage('carrier_KT');
    } else if (carrierCode == '3') {
        var name = browser.i18n.getMessage('carrier_LGU');
    } else if (carrierCode == '4') {
        var name = browser.i18n.getMessage('carrier_SKT_MNVO');
    } else if (carrierCode == '5') {
        var name = browser.i18n.getMessage('carrier_KT_MNVO');
    } else if (carrierCode == '6') {
        var name = browser.i18n.getMessage('carrier_LGU_MNVO');
    }
    return name;
}

function getWay(wayCode) {
    if(wayCode == '1') {
        var str = 'SMS';
    }else{
        var str = "PASS";
    }
    return str;
}


function addProfile(prof) {
    browser.storage.sync.get(function (data) {
        if (data.profiles) {
            var profilesOb = JSON.parse(data.profiles);
        } else {
            var profilesOb = { "profiles": [] }
        }

        profilesOb.profiles.push(prof);

        browser.storage.sync.set({
            profiles: JSON.stringify(profilesOb)
        }, location.reload(true));
        selectProfile(profilesOb.profiles.length - 1);
    });
};


function selectProfile(id) {
    browser.storage.sync.set({
        selectedProfile: id,
        on: 1
    }, location.reload(true));
}

function deleteProfile(id) {
    browser.storage.sync.get(function (data) {
        var profilesOb = JSON.parse(data.profiles);

        if (data.selectedProfile == id) {
            console.log('선택프로필 삭제시');
        }

        delete profilesOb.profiles[id];

        browser.storage.sync.set({
            profiles: JSON.stringify(profilesOb)
        }, location.reload(true));
    });
}

function getBrowser() {
    if(typeof browser !== 'undefined') {
        return browser
    }else if(typeof chrome !== 'undefined') {
        return chrome
    }
}

browser = getBrowser();

function i18n() {
    this.document.getElementById('auth_toggle').innerText = browser.i18n.getMessage('auth_autofill') +  " ON/OFF";
    this.document.getElementById('add_profile_header').innerText = browser.i18n.getMessage('add_profile');
    this.document.getElementById('name').placeholder = browser.i18n.getMessage('full_name');
    this.document.getElementById('op_carrier').innerText = browser.i18n.getMessage('carrier');
    this.document.getElementById('op_skt').innerText = browser.i18n.getMessage('carrier_SKT');
    this.document.getElementById('op_kt').innerText = browser.i18n.getMessage('carrier_KT');
    this.document.getElementById('op_lgu').innerText = browser.i18n.getMessage('carrier_LGU');
    this.document.getElementById('op_skt_mvno').innerText = browser.i18n.getMessage('carrier_SKT_MNVO');
    this.document.getElementById('op_kt_mvno').innerText = browser.i18n.getMessage('carrier_KT_MNVO');
    this.document.getElementById('op_lgu_mvno').innerText = browser.i18n.getMessage('carrier_LGU_MNVO');
    this.document.getElementById('phone_number').placeholder = browser.i18n.getMessage('phone_number');
    this.document.getElementById('birth').placeholder = browser.i18n.getMessage('birthday');
    this.document.getElementById('op_citizen').innerText = browser.i18n.getMessage('citizen');
    this.document.getElementById('op_foreigner').innerText = browser.i18n.getMessage('foreigner');
    this.document.getElementById('op_gender').innerText = browser.i18n.getMessage('gender');
    this.document.getElementById('op_male').innerText = browser.i18n.getMessage('male');
    this.document.getElementById('op_female').innerText = browser.i18n.getMessage('female');
    this.document.getElementById('op_method').innerText = browser.i18n.getMessage('auth_method');
    this.document.getElementById('op_sms').innerText = browser.i18n.getMessage('sms');
    this.document.getElementById('op_pass').innerText = browser.i18n.getMessage('pass');
    this.document.getElementById('addProfile').innerText = browser.i18n.getMessage('add_profile');
}

window.onload = function () {
    var list = document.getElementById('profilesUL');
    list.addEventListener('click', function (ev) {
        var id = ev.target.id;
        var btn = ev.target.classList[0];
        console.log(ev.target);
        console.log(id);
        console.log(btn);
        if (btn == 'select') {
            selectProfile(id);
        } else if (btn == 'delete') {
            deleteProfile(id);
        }
    }, false);

    this.document.getElementById('onoffswitch').addEventListener('change', function () {
        browser.storage.sync.set({
            on: (this.checked ? 1 : 0)
        });
    });

    document.getElementById('addProfile').addEventListener('click', function () {
        var name = document.getElementById('name');
        var carrier = document.getElementById('carrier');
        var phone_number = document.getElementById('phone_number');
        var birth = document.getElementById('birth');
        var gender = document.getElementById('gender');
        var foreigner = document.getElementById('foreigner');
        var way = document.getElementById('way');

        if (name.value.length < 2) {
            window.alert(browser.i18n.getMessage('enter_name'));
            name.focus();
            name.select();
            return false;
        }
        
        if (carrier.value == '-1') {
            window.alert(browser.i18n.getMessage('select_carrier'));
            carrier.focus();
            return false;
        }

        if (phone_number.value.length < 10 || phone_number.value.length > 11) {
            window.alert(browser.i18n.getMessage('check_number'));
            phone_number.focus();
            phone_number.select();
            return false;
        }

        if (birth.value.length != 8) {
            window.alert(browser.i18n.getMessage('check_birthday'));
            birth.focus();
            birth.select();
            return false;
        }

        if (gender.value == '-1') {
            window.alert(browser.i18n.getMessage('select_gender'));
            gender.focus();
            return false;
        }

        if (way.value == '-1') {
            window.alert(browser.i18n.getMessage('select_auth_method'));
            way.focus();
            return false;
        }

        profile = {
            "name": name.value,
            "carrier": carrier.value,
            "phone_number": phone_number.value,
            "birth": birth.value,
            "gender": gender.value,
            "foreigner": foreigner.value,
            "way": way.value
        };

        addProfile(profile);
    });

    browser.storage.sync.get(function (data) {
        if (!(data.on === undefined)) {
            document.getElementById('onoffswitch').checked = (data.on ? true : false);
        } else {
            document.getElementById('onoffswitch').checked = true;

            browser.storage.sync.set({
                on: 1
            });
        }
        
        if (data.profiles) {
            var profilesOb = JSON.parse(data.profiles);
        } else {
            var profilesOb = { "profiles": [] }
        }

        var ul = document.getElementById('profilesUL');
        var selectedProfile = data.selectedProfile;

        for (var i = 0; i < profilesOb.profiles.length; i++) {
            if (profilesOb.profiles[i]) {
                var li = document.createElement('li');
                li.id = i;
                li.className = 'profile list-group-item';
                li.innerHTML = '<div class="todo-indicator bg-focus' + (selectedProfile == i ? ' bg-primary' : '') + '"></div>\
                                <div class="widget-content p-0">\
                                    <div class="widget-content-wrapper">\
                                        <div class="widget-content-left">\
                                            <div class="widget-heading">' + profilesOb.profiles[i].name + '(' + profilesOb.profiles[i].phone_number + ')</div>\
                                            <div class="widget-subheading">\
                                                <div class="badge badge-pill badge-info">' + getCarrierName(profilesOb.profiles[i].carrier) + '</div>\
                                                <div class="badge badge-pill badge-warning">' + getWay(profilesOb.profiles[i].way) + '</div>\
                                            </div>\
                                        </div>\
                                        <div class="widget-content-right">' + (selectedProfile != i ? '  <button id="' + i + '" class="select SelectBtn border-0 btn-transition btn btn-outline-success">\
                                        <i id="' + i + '" class="select fa fa-check"></i></button>' : '') + ' <button id="' + i + '" class="delete DeleteBtn border-0 btn-transition btn btn-outline-danger">\
                                        <i id="' + i + '" class="delete fa fa-trash"></i> </button> </div>\
                                    </div>\
                                </div>';
                ul.appendChild(li);
            }
        }
    });
    i18n();
};
