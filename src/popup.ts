import { CarrierCode, GenderCode, IsForeigner, Profile, StorageData, WayCode } from "./type.js";

function getBrowserInstance(): typeof chrome {
  // Get extension api Chrome or Firefox
  const browserInstance = window.chrome || (window as any)["browser"];
  return browserInstance;
}

let browser = getBrowserInstance();

function getCarrierName(carrierCode: CarrierCode) {
  const carrierCode2MessageName = [
    "carrier_SKT",
    "carrier_KT",
    "carrier_LGU",
    "carrier_SKT_MNVO",
    "carrier_KT_MNVO",
    "carrier_LGU_MNVO",
  ];
  return browser.i18n.getMessage(carrierCode2MessageName[Number(carrierCode) - 1]);
}

function getWay(wayCode: WayCode) {
  const wayCode2MessageName = ["sms", "pass"];
  return browser.i18n.getMessage(wayCode2MessageName[Number(wayCode) - 1]);
}

function addProfile(profile: Profile) {
  console.log("addProfile:", profile);
  browser.storage.sync.get((data: StorageData) => {
    const profiles = data.profiles || [];

    profiles.push(profile);

    browser.storage.sync.set(
      {
        profiles,
      },
      location.reload
    );
    selectProfile(profiles.length - 1);
  });
}

function selectProfile(id: number) {
  browser.storage.sync.set(
    {
      selectedProfile: id,
      on: 1,
    },
    location.reload
  );
}

function deleteProfile(id: number) {
  browser.storage.sync.get((data: StorageData) => {
    if (!data.profiles) {
      alert("No profiles to delete");
      return;
    }

    browser.storage.sync.set(
      {
        profiles: data.profiles.toSpliced(id, 1),
        selectProfile: data.selectedProfile == id ? -1 : data.selectedProfile,
      },
      location.reload
    );
  });
}

function i18n() {
  const auth_toggle = document.getElementById("auth_toggle") as HTMLElement;
  auth_toggle.innerText = browser.i18n.getMessage("auth_autofill") + " ON/OFF";
  const add_profile_header = document.getElementById("add_profile_header") as HTMLElement;
  add_profile_header.innerText = browser.i18n.getMessage("add_profile");
  const name = document.getElementById("name") as HTMLInputElement;
  name.placeholder = browser.i18n.getMessage("full_name");
  const op_carrier = document.getElementById("op_carrier") as HTMLElement;
  op_carrier.innerText = browser.i18n.getMessage("carrier");
  const op_skt = document.getElementById("op_skt") as HTMLElement;
  op_skt.innerText = browser.i18n.getMessage("carrier_SKT");
  const op_kt = document.getElementById("op_kt") as HTMLElement;
  op_kt.innerText = browser.i18n.getMessage("carrier_KT");
  const op_lgu = document.getElementById("op_lgu") as HTMLElement;
  op_lgu.innerText = browser.i18n.getMessage("carrier_LGU");
  const op_skt_mvno = document.getElementById("op_skt_mvno") as HTMLElement;
  op_skt_mvno.innerText = browser.i18n.getMessage("carrier_SKT_MNVO");
  const op_kt_mvno = document.getElementById("op_kt_mvno") as HTMLElement;
  op_kt_mvno.innerText = browser.i18n.getMessage("carrier_KT_MNVO");
  const op_lgu_mvno = document.getElementById("op_lgu_mvno") as HTMLElement;
  op_lgu_mvno.innerText = browser.i18n.getMessage("carrier_LGU_MNVO");
  const phone_number = document.getElementById("phone_number") as HTMLInputElement;
  phone_number.placeholder = browser.i18n.getMessage("phone_number");
  const birth = document.getElementById("birth") as HTMLInputElement;
  birth.placeholder = browser.i18n.getMessage("birthday");
  const op_citizen = document.getElementById("op_citizen") as HTMLElement;
  op_citizen.innerText = browser.i18n.getMessage("citizen");
  const op_foreigner = document.getElementById("op_foreigner") as HTMLElement;
  op_foreigner.innerText = browser.i18n.getMessage("foreigner");
  const op_gender = document.getElementById("op_gender") as HTMLElement;
  op_gender.innerText = browser.i18n.getMessage("gender");
  const op_male = document.getElementById("op_male") as HTMLElement;
  op_male.innerText = browser.i18n.getMessage("male");
  const op_female = document.getElementById("op_female") as HTMLElement;
  op_female.innerText = browser.i18n.getMessage("female");
  const op_method = document.getElementById("op_method") as HTMLElement;
  op_method.innerText = browser.i18n.getMessage("auth_method");
  const op_sms = document.getElementById("op_sms") as HTMLElement;
  op_sms.innerText = browser.i18n.getMessage("sms");
  const op_pass = document.getElementById("op_pass") as HTMLElement;
  op_pass.innerText = browser.i18n.getMessage("pass");
  const addProfile = document.getElementById("addProfile") as HTMLElement;
  addProfile.innerText = browser.i18n.getMessage("add_profile");
}

window.onload = function () {
  let list = document.getElementById("profilesUL") as HTMLUListElement;
  list.addEventListener(
    "click",
    function (ev: MouseEvent) {
      if (ev.target == null) return;
      const target = ev.target as HTMLElement;
      var id = target.id;
      var btn = target.classList[0];
      console.log(target);
      console.log(id);
      console.log(btn);
      if (btn == "select") {
        selectProfile(Number(id));
      } else if (btn == "delete") {
        deleteProfile(Number(id));
      }
    },
    false
  );

  const onoffswitch = document.getElementById("onoffswitch") as HTMLInputElement;
  onoffswitch.addEventListener("change", () => {
    browser.storage.sync.set({
      on: onoffswitch.checked ? 1 : 0,
    });
  });

  const addProfileBtn = document.getElementById("addProfile") as HTMLButtonElement;
  addProfileBtn.addEventListener("click", () => {
    const name = document.getElementById("name") as HTMLInputElement;
    const carrier = document.getElementById("carrier") as HTMLSelectElement;
    const phone_number = document.getElementById("phone_number") as HTMLInputElement;
    const birth = document.getElementById("birth") as HTMLInputElement;
    const gender = document.getElementById("gender") as HTMLSelectElement;
    const foreigner = document.getElementById("foreigner") as HTMLSelectElement;
    const way = document.getElementById("way") as HTMLSelectElement;

    if (name.value.length < 2) {
      window.alert(browser.i18n.getMessage("enter_name"));
      name.focus();
      name.select();
      return false;
    }

    if (carrier.value == "-1") {
      window.alert(browser.i18n.getMessage("select_carrier"));
      carrier.focus();
      return false;
    }

    if (phone_number.value.length < 10 || phone_number.value.length > 11) {
      window.alert(browser.i18n.getMessage("check_number"));
      phone_number.focus();
      phone_number.select();
      return false;
    }

    if (birth.value.length != 8) {
      window.alert(browser.i18n.getMessage("check_birthday"));
      birth.focus();
      birth.select();
      return false;
    }

    if (gender.value == "-1") {
      window.alert(browser.i18n.getMessage("select_gender"));
      gender.focus();
      return false;
    }

    if (way.value == "-1") {
      window.alert(browser.i18n.getMessage("select_auth_method"));
      way.focus();
      return false;
    }

    const profile: Profile = {
      name: name.value,
      carrier: carrier.value as CarrierCode,
      phone_number: phone_number.value,
      birth: birth.value,
      gender: gender.value as GenderCode,
      foreigner: foreigner.value as IsForeigner,
      way: way.value as WayCode,
    };

    addProfile(profile);
  });

  browser.storage.sync.get((data: StorageData) => {
    const onoffswitch = document.getElementById("onoffswitch") as HTMLInputElement;
    if (data.on !== undefined) {
      onoffswitch.checked = Boolean(data.on);
    } else {
      onoffswitch.checked = true;

      browser.storage.sync.set({
        on: 1,
      });
    }

    var ul = document.getElementById("profilesUL") as HTMLUListElement;

    data.profiles
      ?.filter((profile) => !!profile)
      .forEach((profile, index) => {
        let li = document.createElement("li") as HTMLLIElement;
        li.id = String(index);
        li.className = "profile list-group-item";
        li.innerHTML =
          `
    <div class="todo-indicator bg-focus ${data.selectedProfile == index ? "bg-primary" : ""}"></div>
    <div class="widget-content p-0">
      <div class="widget-content-wrapper">
        <div class="widget-content-left">
          <div class="widget-heading">${profile.name}(${profile.phone_number})</div>
          <div class="widget-subheading">
            <div class="badge badge-pill badge-info">${getCarrierName(profile.carrier)}</div>
            <div class="badge badge-pill badge-warning">${getWay(profile.way)}</div>
          </div>
        </div>
        <div class="widget-content-right">` +
          (data.selectedProfile != index
            ? `<button id="${index}" class="select SelectBtn border-0 btn-transition btn btn-outline-success">
            <i id="${index}" class="select fa fa-check"></i>
          </button>`
            : "") +
          `<button id="${index}" class="delete DeleteBtn border-0 btn-transition btn btn-outline-danger">
            <i id="${index}" class="delete fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>`;
        ul.appendChild(li);
      });
  });
  i18n();
};
