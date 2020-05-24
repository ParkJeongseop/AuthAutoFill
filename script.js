
window.onload = function () {
    document.getElementById('addProfile').addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var carrier = document.getElementById('carrier').value;
        var phone_number = document.getElementById('phone_number').value;
        var birth = document.getElementById('birth').value;
        var gender = document.getElementById('gender').value;
        var foreigner = document.getElementById('foreigner').value;
        var way = document.getElementById('way').value;

        profile = {
            "name": name,
            "carrier": carrier,
            "phone_number": phone_number,
            "birth": birth,
            "gender": gender,
            "foreigner": foreigner,
            "way": way
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

        for (var i = 0; i < profilesOb.profiles.length; i++) {
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(profilesOb.profiles[i].name + ' (' + profilesOb.profiles[i].phone_number + ')'));
            li.className = 'list-group-item';
            ul.appendChild(li);
        }
        console.log(profilesOb)
    });


};

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
    });
};

