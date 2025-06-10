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

function formatPhoneNumber(phoneNumber) {
    // 숫자만 추출
    const numbers = phoneNumber.replace(/\D/g, '');
    
    if (numbers.length === 11) {
        // 11자리: 000-0000-0000
        return numbers.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    } else if (numbers.length === 10) {
        // 10자리: 000-000-0000
        return numbers.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    } else {
        // 기본값: 원본 반환
        return phoneNumber;
    }
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
        }, function() {
            selectProfile(profilesOb.profiles.length - 1);
            hideAddProfileForm();
            clearForm();
            location.reload(true);
        });
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
    // 헤더 및 메인 텍스트
    document.getElementById('header_title').innerText = browser.i18n.getMessage('auth_autofill');
    document.getElementById('toggle_label').innerText = browser.i18n.getMessage('autofill_enable');
    document.getElementById('saved_profiles_title').innerText = browser.i18n.getMessage('saved_profiles');
    document.getElementById('add_new_profile_btn').innerText = browser.i18n.getMessage('add_new_profile');
    document.getElementById('add_new_profile_title').innerText = browser.i18n.getMessage('add_new_profile');

    // 폼 라벨
    document.getElementById('name_label').innerText = browser.i18n.getMessage('name_label');
    document.getElementById('phone_label').innerText = browser.i18n.getMessage('phone_label');
    document.getElementById('carrier_label').innerText = browser.i18n.getMessage('carrier_label');
    document.getElementById('birth_label').innerText = browser.i18n.getMessage('birth_label');
    document.getElementById('nationality_label').innerText = browser.i18n.getMessage('nationality_label');
    document.getElementById('gender_label').innerText = browser.i18n.getMessage('gender_label');
    document.getElementById('auth_method_label').innerText = browser.i18n.getMessage('auth_method_label');

    // 입력 필드 placeholder
    document.getElementById('name').placeholder = browser.i18n.getMessage('name_placeholder');
    document.getElementById('phone_number').placeholder = browser.i18n.getMessage('phone_placeholder');
    document.getElementById('birth').placeholder = browser.i18n.getMessage('birth_placeholder');

    // 통신사 옵션
    document.getElementById('op_carrier').innerText = browser.i18n.getMessage('carrier_select');
    document.getElementById('op_skt').innerText = browser.i18n.getMessage('carrier_SKT');
    document.getElementById('op_kt').innerText = browser.i18n.getMessage('carrier_KT');
    document.getElementById('op_lgu').innerText = browser.i18n.getMessage('carrier_LGU');
    document.getElementById('op_skt_mvno').innerText = browser.i18n.getMessage('carrier_SKT_MNVO');
    document.getElementById('op_kt_mvno').innerText = browser.i18n.getMessage('carrier_KT_MNVO');
    document.getElementById('op_lgu_mvno').innerText = browser.i18n.getMessage('carrier_LGU_MNVO');

    // 국적 옵션
    document.getElementById('op_citizen').innerText = browser.i18n.getMessage('citizen');
    document.getElementById('op_foreigner').innerText = browser.i18n.getMessage('foreigner');

    // 성별 옵션
    document.getElementById('op_gender').innerText = browser.i18n.getMessage('gender_select');
    document.getElementById('op_male').innerText = browser.i18n.getMessage('male');
    document.getElementById('op_female').innerText = browser.i18n.getMessage('female');

    // 인증방식 옵션
    document.getElementById('op_method').innerText = browser.i18n.getMessage('auth_method_select');
    document.getElementById('op_sms').innerText = browser.i18n.getMessage('sms');
    document.getElementById('op_pass').innerText = browser.i18n.getMessage('pass');

    // 버튼 텍스트
    document.getElementById('create_profile_btn').innerText = browser.i18n.getMessage('create_profile');
    document.getElementById('cancel_btn').innerText = browser.i18n.getMessage('cancel');
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

    // 새 프로필 추가 폼 토글
    document.getElementById('showAddProfileForm').addEventListener('click', function() {
        showAddProfileForm();
    });

    document.getElementById('cancelAddProfile').addEventListener('click', function() {
        hideAddProfileForm();
        clearForm();
    });

    // 휴대폰번호 실시간 포맷팅
    var phoneInput = document.getElementById('phone_number');
    phoneInput.addEventListener('input', function(e) {
        // 현재 커서 위치 저장
        var cursorPosition = e.target.selectionStart;
        var oldValue = e.target.value;
        var oldLength = oldValue.length;
        
        // 숫자만 추출
        var numbers = e.target.value.replace(/\D/g, '');
        
        // 11자리 제한
        if (numbers.length > 11) {
            numbers = numbers.substring(0, 11);
        }
        
        // 포맷팅 적용
        var formattedValue = '';
        if (numbers.length <= 3) {
            formattedValue = numbers;
        } else if (numbers.length <= 7) {
            if (numbers.length === 10) {
                // 10자리인 경우: 000-000-0000
                formattedValue = numbers.replace(/(\d{3})(\d{3})(\d{0,4})/, '$1-$2-$3');
            } else {
                // 11자리인 경우: 000-0000-0000
                formattedValue = numbers.replace(/(\d{3})(\d{0,4})/, '$1-$2');
            }
        } else if (numbers.length <= 11) {
            if (numbers.length === 10) {
                // 10자리: 000-000-0000
                formattedValue = numbers.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
            } else {
                // 11자리: 000-0000-0000
                formattedValue = numbers.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
            }
        }
        
        e.target.value = formattedValue;
        
        // 커서 위치 조정
        var newLength = formattedValue.length;
        var lengthDiff = newLength - oldLength;
        var newCursorPosition = cursorPosition + lengthDiff;
        
        // 하이픈 뒤로 커서가 이동했을 때 조정
        if (formattedValue.charAt(newCursorPosition - 1) === '-') {
            newCursorPosition++;
        }
        
        e.target.setSelectionRange(newCursorPosition, newCursorPosition);
        
        // 통신사 자동 선택
        autoSelectCarrier(formattedValue);
    });

    // 생년월일 입력 포맷팅 (YYYY/MM/DD)
    var birthInput = document.getElementById('birth');
    birthInput.addEventListener('input', function(e) {
        var numbers = e.target.value.replace(/\D/g, '');
        
        // 8자리 제한
        if (numbers.length > 8) {
            numbers = numbers.substring(0, 8);
        }
        
        var formattedValue = '';
        if (numbers.length <= 4) {
            formattedValue = numbers;
        } else if (numbers.length <= 6) {
            formattedValue = numbers.replace(/(\d{4})(\d{0,2})/, '$1/$2');
        } else {
            formattedValue = numbers.replace(/(\d{4})(\d{2})(\d{0,2})/, '$1/$2/$3');
        }
        
        e.target.value = formattedValue;
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

        // 휴대폰번호 검증 - 하이픈 제거하고 숫자만으로 검증
        var phoneNumbers = phone_number.value.replace(/\D/g, '');
        if (phoneNumbers.length < 10 || phoneNumbers.length > 11) {
            window.alert(browser.i18n.getMessage('check_number'));
            phone_number.focus();
            phone_number.select();
            return false;
        }

        // 생년월일 검증 - 하이픈 제거하고 숫자만으로 검증
        var birthNumbers = birth.value.replace(/\D/g, '');
        if (birthNumbers.length != 8) {
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
            "phone_number": phone_number.value.replace(/\D/g, ''),
            "birth": birth.value.replace(/\D/g, ''),
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
                li.className = 'profile-item' + (selectedProfile == i ? ' profile-selected' : '');
                li.innerHTML = `
                    <div class="profile-card">
                        <div class="profile-info">
                            <div class="profile-header">
                                <div class="profile-name">
                                    <i class="fas fa-user-circle"></i>
                                    <span>${profilesOb.profiles[i].name}</span>
                                </div>
                                <div class="profile-badges">
                                    <span class="badge badge-carrier">${getCarrierName(profilesOb.profiles[i].carrier)}</span>
                                    <span class="badge badge-method">${getWay(profilesOb.profiles[i].way)}</span>
                                </div>
                            </div>
                            <div class="profile-details">
                                <div class="profile-phone">
                                    <i class="fas fa-mobile-alt"></i>
                                    <span>${formatPhoneNumber(profilesOb.profiles[i].phone_number)}</span>
                                </div>
                            </div>
                        </div>
                        <div class="profile-actions">
                            ${selectedProfile != i ? `
                                <button id="${i}" class="select profile-btn btn-select" title="선택">
                                    <i id="${i}" class="select fas fa-check"></i>
                                </button>
                            ` : `
                                <div class="selected-indicator">
                                    <i class="fas fa-star"></i>
                                </div>
                            `}
                            <button id="${i}" class="delete profile-btn btn-delete" title="삭제">
                                <i id="${i}" class="delete fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
                ul.appendChild(li);
            }
        }
    });
    i18n();
};

function getCarrierByPrefix(prefix) {
    const prefixNum = parseInt(prefix, 10);

    const ranges = [
        { start: 2000, end: 2099, carrier: 'SKT' },
        { start: 2100, end: 2179, carrier: 'SKT' },
        { start: 2180, end: 2199, carrier: 'KT' },
        { start: 2200, end: 2299, carrier: 'LG U+' },
        { start: 2300, end: 2399, carrier: 'LG U+' },
        { start: 2400, end: 2499, carrier: 'LG U+' },
        { start: 2500, end: 2599, carrier: 'KT' },
        { start: 2600, end: 2699, carrier: 'KT' },
        { start: 2700, end: 2799, carrier: 'KT' },
        { start: 2800, end: 2899, carrier: 'KT' },
        { start: 2900, end: 2999, carrier: 'KT' },
        { start: 3000, end: 3099, carrier: 'KT' },
        { start: 3100, end: 3199, carrier: 'SKT' },
        { start: 3200, end: 3299, carrier: 'KT' },
        { start: 3300, end: 3399, carrier: 'KT' },
        { start: 3400, end: 3499, carrier: 'KT' },
        { start: 3500, end: 3599, carrier: 'SKT' },
        { start: 3600, end: 3699, carrier: 'SKT' },
        { start: 3700, end: 3799, carrier: 'SKT' },
        { start: 3800, end: 3899, carrier: 'SKT' },
        { start: 3900, end: 3999, carrier: 'LG U+' },
        { start: 4000, end: 4099, carrier: 'SKT' },
        { start: 4100, end: 4199, carrier: 'SKT' },
        { start: 4200, end: 4299, carrier: 'KT' },
        { start: 4300, end: 4399, carrier: 'KT' },
        { start: 4400, end: 4499, carrier: 'KT' },
        { start: 4500, end: 4599, carrier: 'SKT' },
        { start: 4600, end: 4699, carrier: 'SKT' },
        { start: 4700, end: 4799, carrier: 'SKT' },
        { start: 4800, end: 4899, carrier: 'SKT' },
        { start: 4900, end: 4999, carrier: 'SKT' },
        { start: 5000, end: 5099, carrier: 'SKT' },
        { start: 5100, end: 5199, carrier: 'KT' },
        { start: 5200, end: 5299, carrier: 'SKT' },
        { start: 5300, end: 5399, carrier: 'SKT' },
        { start: 5400, end: 5499, carrier: 'SKT' },
        { start: 5500, end: 5599, carrier: 'LG U+' },
        { start: 5600, end: 5699, carrier: 'LG U+' },
        { start: 5700, end: 5799, carrier: 'LG U+' },
        { start: 5800, end: 5899, carrier: 'LG U+' },
        { start: 5900, end: 5969, carrier: 'SKT' },
        { start: 5970, end: 5999, carrier: '미배정' },
        { start: 6000, end: 6099, carrier: '미배정' },
        { start: 6100, end: 6199, carrier: '미배정' },
        { start: 6200, end: 6299, carrier: 'SKT' },
        { start: 6300, end: 6399, carrier: 'SKT' },
        { start: 6400, end: 6499, carrier: 'SKT' },
        { start: 6500, end: 6599, carrier: 'KT' },
        { start: 6600, end: 6699, carrier: 'KT' },
        { start: 6700, end: 6799, carrier: 'KT' },
        { start: 6800, end: 6899, carrier: 'KT' },
        { start: 6900, end: 6999, carrier: '미배정' },
        { start: 7000, end: 7099, carrier: '미배정' },
        { start: 7100, end: 7199, carrier: 'SKT' },
        { start: 7200, end: 7299, carrier: 'KT' },
        { start: 7300, end: 7399, carrier: 'KT' },
        { start: 7400, end: 7499, carrier: 'KT' },
        { start: 7500, end: 7599, carrier: 'LG U+' },
        { start: 7600, end: 7699, carrier: 'LG U+' },
        { start: 7700, end: 7799, carrier: 'LG U+' },
        { start: 7800, end: 7899, carrier: '미배정' },
        { start: 7900, end: 7999, carrier: 'LG U+' },
        { start: 8000, end: 8099, carrier: 'LG U+' },
        { start: 8100, end: 8199, carrier: 'LG U+' },
        { start: 8200, end: 8299, carrier: 'LG U+' },
        { start: 8300, end: 8399, carrier: 'LG U+' },
        { start: 8400, end: 8499, carrier: 'LG U+' },
        { start: 8500, end: 8599, carrier: 'SKT' },
        { start: 8600, end: 8699, carrier: 'SKT' },
        { start: 8700, end: 8799, carrier: 'SKT' },
        { start: 8800, end: 8899, carrier: 'SKT' },
        { start: 8900, end: 8999, carrier: 'SKT' },
        { start: 9000, end: 9099, carrier: 'SKT' },
        { start: 9100, end: 9199, carrier: 'SKT' },
        { start: 9200, end: 9299, carrier: 'SKT' },
        { start: 9300, end: 9399, carrier: 'SKT' },
        { start: 9400, end: 9499, carrier: 'SKT' },
        { start: 9500, end: 9599, carrier: 'KT' },
        { start: 9600, end: 9699, carrier: 'KT' },
        { start: 9700, end: 9799, carrier: 'KT' },
        { start: 9800, end: 9899, carrier: 'KT' },
        { start: 9900, end: 9999, carrier: 'KT' },
    ];

    for (const range of ranges) {
        if (prefixNum >= range.start && prefixNum <= range.end) {
            return range.carrier;
        }
    }

    return 'Unknown';
}

function getCarrierValue(carrierName) {
    switch (carrierName) {
        case 'SKT':
            return '1';
        case 'KT':
            return '2';
        case 'LG U+':
            return '3';
        default:
            return '-1';
    }
}

function autoSelectCarrier(phoneNumber) {
    // 숫자만 추출
    const numbers = phoneNumber.replace(/\D/g, '');
    
    // 010으로 시작하는 11자리 휴대폰번호인 경우에만 처리
    if (numbers.length >= 7 && numbers.startsWith('010')) {
        // 010 다음 4자리 추출
        const prefix = numbers.substring(3, 7);
        if (prefix.length === 4) {
            const carrierName = getCarrierByPrefix(prefix);
            const carrierValue = getCarrierValue(carrierName);
            
            // 통신사 선택
            const carrierSelect = document.getElementById('carrier');
            if (carrierSelect && carrierValue !== '-1') {
                carrierSelect.value = carrierValue;
                
                // 시각적 피드백 (선택된 통신사 하이라이트)
                carrierSelect.style.borderColor = '#667eea';
                carrierSelect.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                setTimeout(() => {
                    carrierSelect.style.borderColor = '';
                    carrierSelect.style.boxShadow = '';
                }, 1000);
            }
        }
    }
}

// 폼 토글 함수들
function showAddProfileForm() {
    const addProfileSection = document.getElementById('addProfileSection');
    addProfileSection.style.display = 'block';
    addProfileSection.classList.add('slide-down');
    
    // 첫 번째 입력 필드에 포커스
    setTimeout(() => {
        document.getElementById('name').focus();
    }, 300);
}

function hideAddProfileForm() {
    const addProfileSection = document.getElementById('addProfileSection');
    addProfileSection.classList.remove('slide-down');
    addProfileSection.classList.add('slide-up');
    
    setTimeout(() => {
        addProfileSection.style.display = 'none';
        addProfileSection.classList.remove('slide-up');
    }, 300);
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('carrier').value = '-1';
    document.getElementById('phone_number').value = '';
    document.getElementById('birth').value = '';
    document.getElementById('gender').value = '-1';
    document.getElementById('foreigner').value = '0';
    document.getElementById('way').value = '-1';
    
    // 통신사 선택 박스 스타일 초기화
    const carrierSelect = document.getElementById('carrier');
    carrierSelect.style.borderColor = '';
    carrierSelect.style.boxShadow = '';
}
