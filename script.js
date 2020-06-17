function getCarrierName(carrierCode) {
    if (carrierCode == '1') {
        var name = 'SKT';
    } else if (carrierCode == '2') {
        var name = 'KT';
    } else if (carrierCode == '3') {
        var name = 'LGU+';
    } else if (carrierCode == '4') {
        var name = 'SKT망 알뜰폰';
    } else if (carrierCode == '5') {
        var name = 'KT망 알뜰폰';
    } else if (carrierCode == '6') {
        var name = 'LGU+망 알뜰폰';
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
    chrome.storage.sync.get(function (data) {
        if (data.profiles) {
            var profilesOb = JSON.parse(data.profiles);
        } else {
            var profilesOb = { "profiles": [] }
        }

        profilesOb.profiles.push(prof);

        chrome.storage.sync.set({
            profiles: JSON.stringify(profilesOb)
        }, location.reload(true));
        selectProfile(profilesOb.profiles.length - 1);
    });
};


function selectProfile(id) {
    chrome.storage.sync.set({
        selectedProfile: id
    }, location.reload(true));
}

function deleteProfile(id) {
    chrome.storage.sync.get(function (data) {
        var profilesOb = JSON.parse(data.profiles);

        if (data.selectedProfile == id) {
            console.log('선택프로필 삭제시');
        }

        delete profilesOb.profiles[id];

        chrome.storage.sync.set({
            profiles: JSON.stringify(profilesOb)
        }, location.reload(true));
    });
}

window.onload = function () {
    var list = document.getElementById('profilesUL');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'BUTTON') {
            var btn = ev.path[0].classList[0];
            var id = ev.path[4].id;
        } else if (ev.target.tagName === 'I') {
            var btn = ev.path[1].classList[0];
            var id = ev.path[5].id;
        }
        if (btn == 'SelectBtn') {
            selectProfile(id);
        } else if (btn == 'DeleteBtn') {
            deleteProfile(id);
        }
    }, false);

    document.getElementById('addProfile').addEventListener('click', function () {
        var name = document.getElementById('name');
        var carrier = document.getElementById('carrier');
        var phone_number = document.getElementById('phone_number');
        var birth = document.getElementById('birth');
        var gender = document.getElementById('gender');
        var foreigner = document.getElementById('foreigner');
        var way = document.getElementById('way');

        if (name.value.length < 2) {
            window.alert("이름을 입력하시오");
            name.focus();
            name.select();
            return false;
        }
        
        if (carrier.value == '-1') {
            window.alert("통신사를 선택하시오");
            carrier.focus();
            return false;
        }

        if (phone_number.value.length < 10 || phone_number.value.length > 11) {
            window.alert("휴대폰번호를 확인하시오");
            phone_number.focus();
            phone_number.select();
            return false;
        }

        if (birth.value.length != 8) {
            window.alert("생일을 확인하시오 (8자리) (예, 19990204)");
            birth.focus();
            birth.select();
            return false;
        }

        if (gender.value == '-1') {
            window.alert("성별을 선택하시오");
            gender.focus();
            return false;
        }

        if (way.value == '-1') {
            window.alert("인증방식을 선택하시오");
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

    chrome.storage.sync.get(function (data) {
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
                                        <div class="widget-content-right">' + (selectedProfile != i ? '  <button class="SelectBtn border-0 btn-transition btn btn-outline-success">\
                                        <i class="fa fa-check"></i></button>' : '') + ' <button class="DeleteBtn border-0 btn-transition btn btn-outline-danger">\
                                        <i class="fa fa-trash"></i> </button> </div>\
                                    </div>\
                                </div>';
                ul.appendChild(li);
            }
        }
    });
};
