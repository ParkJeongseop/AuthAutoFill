import { browser, carrier, get_RRN_GenderNum, is_MNO, log } from "../utils";

function 한국사이버결제(profile) {
  const isPC = !window.location.pathname.includes("/mo");

  // 통신사 선택 & 약관동의 & 인증방식 선택
  if (document.querySelector("#frm > fieldset")) {
    switch (profile.carrier) {
      case carrier.SKT:
        document.querySelector("#agency-sk")?.click();
        break;
      case carrier.KT:
        document.querySelector("#agency-kt")?.click();
        break;
      case carrier.LGU:
        document.querySelector("#agency-lgu")?.click();
        break;
      case carrier.SKT_MVNO:
        document.querySelector("#agency-and")?.click();
        document.querySelector("form > div.pop-con_02 > ul > li:nth-child(1) > label")?.click();
        document.querySelector("#btnMvnoSelect")?.click();
        break;
      case carrier.KT_MVNO:
        document.querySelector("#agency-and")?.click();
        document.querySelector("form > div.pop-con_02 > ul > li:nth-child(2) > label")?.click();
        document.querySelector("#btnMvnoSelect")?.click();
        break;
      case carrier.LGU_MVNO:
        document.querySelector("#agency-and")?.click();
        document.querySelector("form > div.pop-con_02 > ul > li:nth-child(3) > label")?.click();
        document.querySelector("#btnMvnoSelect")?.click();
        break;
    }

    // 약관 동의
    const agreeSelector = isPC
      ? "#frm > fieldset > ul.agreelist.all > li > div > label:nth-child(2)"
      : "#agree_all";
    document.querySelector(agreeSelector)?.click();

    // 인증 방식 선택
    const wayChanger = ["", "#btnSms", "#btnPass"];
    document.querySelector(wayChanger[profile.way])?.click();
    return;
  }

  // 인증폼
  if (document.querySelector("#user_name")) {
    const 이름 = document.querySelector("#user_name");
    const 주민번호_앞자리 = document.querySelector("#mynum1");
    const 주민번호_7번째자리 = document.querySelector("#mynum2");
    const 휴대폰번호 = document.querySelector(isPC ? "#phone_no_rKey" : "#phone_no");
    const 캡챠 = document.querySelector("#captcha_no");

    if (이름) {
      이름.value = profile.name;
    }
    if (주민번호_앞자리) {
      주민번호_앞자리.value = profile.birth.subString(2, 6);
    }
    if (주민번호_7번째자리) {
      주민번호_7번째자리.value = get_RRN_GenderNum(
        profile.birth,
        profile.gender,
        profile.foreigner,
      );
    }
    if (휴대폰번호) {
      휴대폰번호.value = profile.phone_number;
    }
    if (캡챠) {
      캡챠.focus();
    }
  }
}

function 다날(profile) {
  const 통신사 = document.querySelector(
    "#agency-" + ["", "sk", "kt", "lgu", "and", "and", "and"][profile.carrier],
  );
  if (통신사) {
    통신사.click();
  }

  if (!is_MNO(profile.carrier)) {
    const query = [
      "",
      "",
      "",
      "",
      "#layerPopupMvno > div.layer-pop > form > div.pop-con_02 > ul > li.first-item > div.licensee_title > a > label",
      "#layerPopupMvno > div.layer-pop > form > div.pop-con_02 > ul > li:nth-child(2) > div.licensee_title > a > label",
      "#layerPopupMvno > div.layer-pop > form > div.pop-con_02 > ul > li:nth-child(3) > div.licensee_title > a > label",
    ][profile.carrier];
    const MVNO = document.querySelector(query);
    if (MVNO) {
      MVNO.click();
    }
  }

  if (!is_MNO(profile.carrier)) {
    const MVNO선택 = document.querySelector("#btnSelectMvno");
    if (MVNO선택) {
      MVNO선택.click();
    }
  }

  const 전체동의 = document.querySelector("#agree_all");
  const 인증방식 = document.querySelector(["", "#btnSms", "#btnPass"][profile.way]);
  const isPassOrSms = document.querySelector(["#authTabSms > a", "#authTabPass > a"][profile.way]);
  const 이름 = document.querySelector(["", "#sms_username", "#push_username"][profile.way]);
  const 주민번호_앞자리 = document.querySelector("#sms_mynum1");
  const 주민번호_7번째자리 = document.querySelector("#sms_mynum2");
  const 휴대폰번호 = document.querySelector(["", "#sms_mobileno", "#push_mobileno"][profile.way]);
  const 캡챠 = document.querySelector("#inputCaptcha");

  if (전체동의) {
    전체동의.click();
  }
  if (인증방식) {
    인증방식.click();
  }
  if (isPassOrSms?.title != "선택됨") {
    const tab = document.querySelector(["#authTabSms", "#authTabPass"][profile.way]);
    tab?.click();
  }
  if (이름) {
    이름.value = profile.name;
  }
  if (주민번호_앞자리) {
    주민번호_앞자리.value = profile.birth.subString(2, 6);
  }
  if (주민번호_7번째자리) {
    주민번호_7번째자리.value = get_RRN_GenderNum(profile.birth, profile.gender, profile.foreigner);
  }
  if (휴대폰번호) {
    휴대폰번호.value = profile.phone_number;
  }
  if (캡챠) {
    캡챠.focus();
  }
}

function 네이버(profile) {
  const 전체동의 = document.querySelector("#chk_agree3Lb");
  const 이름 = document.querySelector("#nm");
  const 외국인 = document.querySelector("#foreignYn");
  const 성별 = document.querySelector(profile.gender === "1" ? "#man" : "#woman");
  const 생년월일_년 = document.querySelector("#birth_year");
  const 생년월일_월 = document.querySelector("#birth_month");
  const 생년월일_일 = document.querySelector("#birth_day");
  const mobile_cd = document.querySelector("#mobile_cd");
  const 휴대폰번호 = document.querySelector("#phone_no");
  const 인증번호 = document.querySelector("#auth_no");

  if (전체동의) {
    전체동의.click();
  }
  if (이름) {
    이름.value = profile.name;
  }
  if (외국인) {
    외국인.value = profile.foreigner == "0" ? "N" : "Y";
  }
  if (성별) {
    성별.click();
  }
  if (생년월일_년) {
    생년월일_년.value = profile.birth.subString(0, 4);
  }
  if (생년월일_월) {
    생년월일_월.value = String(Number(profile.birth.subString(4, 6)));
  }
  if (생년월일_일) {
    생년월일_일.value = String(Number(profile.birth.subString(6)));
  }
  if (mobile_cd) {
    const changer = ["", "SKT", "KTF", "LGT", "MVNO", "MVNO", "MVNO"];
    mobile_cd.value = changer[profile.carrier];
  }
  if (!is_MNO(profile.carrier)) {
    const changer = ["", "", "", "", "#mvno_skLb", "#mvno_ktLb", "#mvno_lgLb"];
    document.querySelector(changer[profile.carrier])?.click();
  }
  if (휴대폰번호) {
    휴대폰번호.value = profile.phone_number;
  }
  if (인증번호) {
    인증번호.focus();
  }
}

browser.storage.sync.get((data) => {
  if (!data.on) return log("OFF");
  if (!data.profiles) return log("No profiles");

  const profiles = data.profiles;
  const profile = profiles[data.selectedProfile];
  if (!profile) return log("No selected profile");

  switch (widnow.location.hostname) {
    case "cert.kcp.co.kr":
      log("한국사이버결제");
      한국사이버결제(profile);
      return;
    case "nid.naver.com":
      log("네이버");
      네이버(profile);
      return;
    case "wauth.teledit.com":
      log("다날");
      다날(profile);
      return;
  }
});
