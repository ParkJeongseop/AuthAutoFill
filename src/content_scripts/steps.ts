import { Profile } from "../type";
import { get_RRN_GenderNum, is_MNO, way } from "../utils";

type Selector = string | ((profile: Profile) => string);
type Executor = (element: any, profile: Profile) => boolean | void;

export type Step = {
  disabled?: boolean | ((profile: Profile) => boolean);
  selector: Selector;
  executor: Executor;
};

type StepCondition = {
  type?: "loop" | "once-strict" | "once" | "loop-strict";
  matches: string[];
  steps: Step[];
};

const 이름: Executor = (element, profile) => {
  element.value = profile.name;
};
const 생년월일: Executor = (element, profile) => {
  element.value = profile.birth;
};
const 주민번호_앞자리: Executor = (element, profile) => {
  element.value = profile.birth.substring(2);
};
const 주민번호_7번째자리: Executor = (element, profile) => {
  element.value = get_RRN_GenderNum(profile.birth, profile.gender, profile.foreigner)!;
};
const 전화번호_앞3자리: Executor = (element, profile) => {
  element.value = profile.phone_number.substring(0, 3);
};
const 전화번호_뒷자리: Executor = (element, profile) => {
  element.value = profile.phone_number.substring(3);
};
const 전화번호: Executor = (element, profile) => {
  element.value = profile.phone_number;
};
const 통신사 =
  (changer: string[]): Executor =>
  (element, profile) => {
    element.value = changer[profile.carrier];
  };
const 인증방식 =
  (changer: string[]): Executor =>
  (element, profile) => {
    element.value = changer[profile.way];
  };
const 체크: Executor = (element, _) => {
  if (!element.checked) element.click();
};
const 클릭: Executor = (element, _) => {
  element.click();
};
const 포커스: Executor = (element, _) => {
  element.focus();
};
const 존재함: Executor = (element, _) => {
  return true;
};

export const conditions: StepCondition[] = [
  // oacx
  {
    type: "loop",
    matches: [
      // 홈택스 - 간편인증
      "https://www.hometax.go.kr/oacx/",
      // 국세통계센터 - 간편인증
      "https://datalab.nts.go.kr/oacx/index.jsp",
      // oacx iframe
      "https://easysign.anyid.go.kr/",
      // 예비군 - 간편인증
      "https://www.yebigun1.mil.kr/dmobis/uat/uia/LoginUsr.do",
      // 병무민원 - 본인확인 - 통합로그인 - 민간인증서
      "https://cert.mma.go.kr/esign/oacx_check_cert.jsp?",
      // 국민신문고
      "https://www.epeople.go.kr/nep/crtf/simpleCrtfPopup15.npaid",
      // 인터넷 우체국
      "https://www.epost.go.kr/usr/login/",
      // 한국장학재단
      "https://www.kosaf.go.kr/ko/login_sc.do",
      // 법무부 온라인민원서비스
      "https://minwon.moj.go.kr/minwon/1996/subview.do",
      // 국세청 취업 후 학자금 상환
      "https://www.icl.go.kr/indexEsign.html",
      // 기업집단포털
      "https://www.egroup.go.kr/egps/ps/io/lgn/loginScrin.do",
      // 정부24
      "https://www.gov.kr/nlogin/",
    ],
    steps: [
      {
        selector: "input[data-id='oacx_name']",
        executor: 이름,
      },
      {
        selector: "input[data-id='oacx_birth']",
        executor: 생년월일,
      },
      {
        selector: "input[data-id='oacx_num1']",
        executor: 주민번호_앞자리,
      },
      {
        selector: "input[data-id='oacx_phone1']",
        executor: 전화번호_앞3자리,
      },
      {
        selector: "input[data-id='oacx_phone2']",
        executor: 전화번호_뒷자리,
      },
      {
        selector: "input[data-id='oacx_phone']",
        executor: 통신사(["", "S", "K", "L", "S", "K", "L"]),
      },
      {
        selector: "#totalAgree",
        executor: 체크,
      },
      {
        selector: "#oacx_total",
        executor: 체크,
      },
      {
        selector: "#policy4",
        executor: 체크,
      },
    ],
  },
  //홈택스 - 비회원
  {
    type: "loop",
    matches: ["https://www.hometax.go.kr/websquare/"],
    steps: [
      {
        selector: "#iptUserNm",
        executor: 이름,
      },
      {
        selector: "#iptUserJuminNo1",
        executor: 주민번호_앞자리,
      },
      {
        selector: "#prvcClgtArgeYn_input_0",
        executor: 체크,
      },
      {
        selector: "#ukInfoYn_input_0",
        executor: 체크,
      },
    ],
  },
  {
    matches: [
      "https://nice.checkplus.co.kr/cert/main/menu",
      "https://nice.checkplus.co.kr/cert/mobileCert/menu",
      "https://nice.checkplus.co.kr/cert/mobileCert/main",
    ],
    steps: [
      {
        selector: "#mobileCo",
        executor: 통신사(["", "SK", "KT", "LG", "SM", "KM", "LM"]),
      },
      {
        selector: "#mobileCertMethod",
        executor: 인증방식(["", "SMS", "APP_PUSH"]),
      },
      {
        selector: "#agree_all",
        executor: 체크,
      },
      {
        selector: "#frm",
        executor: (element: HTMLFormElement, profile) => {
          element.setAttribute("action", "/cert/mobileCert/certification");
          element.submit();
        },
      },
    ],
  },
  {
    matches: ["https://nice.checkplus.co.kr/cert/mobileCert/certification"],
    steps: [
      {
        selector: "#userName",
        executor: 이름,
      },
      {
        selector: "#mobileNo",
        executor: 전화번호,
      },
      {
        selector: "#myNum1",
        executor: 주민번호_앞자리,
      },
      {
        selector: "#myNum2",
        executor: 주민번호_7번째자리,
      },
      {
        selector: "#captchaAnswer",
        executor: 포커스,
      },
    ],
  },
  {
    matches: ["https://pcc.siren24.com/pcc_V3/passWebV2/pcc_V3_j10.jsp"],
    steps: [
      {
        selector: "input[name='cellCorp']",
        executor: 통신사(["", "SKT", "KTF", "LGT", "SKM", "KTM", "LGM"]),
      },
      {
        selector: "form[name='cplogn']",
        executor: (element: HTMLFormElement, profile) => {
          const isMno = is_MNO(profile.carrier);

          let actionHref = "";
          if (isMno && profile.way === "2") {
            actionHref = "https://pcc.siren24.com/pcc_V3/passWebV2/pcc_V3_j30_certHpTiApp01.jsp";
          }
          if (isMno && profile.way === "1") {
            actionHref = "https://pcc.siren24.com/pcc_V3/passWebV2/pcc_V3_j30_certHpTi01.jsp";
          }
          if (!isMno && profile.way === "2") {
            actionHref =
              "https://pcc.siren24.com/pcc_V3/passWebV2/pcc_V3_j30_certHpMvnoTiApp01.jsp";
          }
          if (!isMno && profile.way === "1") {
            actionHref = "https://pcc.siren24.com/pcc_V3/passWebV2/pcc_V3_j30_certHpMvnoTi01.jsp";
          }

          element.setAttribute("action", actionHref);
          element.submit();
        },
      },
    ],
  },
  {
    matches: [
      "https://pcc.siren24.com/pcc_V3/passWebV2/pcc_V3_j30_certHpTiApp01.jsp",
      "https://pcc.siren24.com/pcc_V3/passWebV2/pcc_V3_j30_certHpTi01.jsp",
      "https://pcc.siren24.com/pcc_V3/passWebV2/pcc_V3_j30_certHpMvnoTiApp01.jsp",
      "https://pcc.siren24.com/pcc_V3/passWebV2/pcc_V3_j30_certHpMvnoTi01.jsp",
    ],
    steps: [
      {
        selector: "#userName",
        executor: 이름,
      },
      {
        selector: "#No",
        executor: 전화번호,
      },
      {
        selector: "#birthDay1",
        executor: 주민번호_앞자리,
      },
      {
        selector: "#birthDay2",
        executor: 주민번호_7번째자리,
      },
      {
        selector: "#secur",
        executor: 포커스,
      },
    ],
  },
  {
    matches: ["https://safe.ok-name.co.kr/CommonSvl"],
    steps: [
      {
        selector: ".step1header",
        executor: 존재함,
      },
      {
        selector: "input[name='tc']",
        executor: (element: HTMLInputElement, profile) => {
          const isMno = is_MNO(profile.carrier);
          let tcValue = "";
          if (isMno && profile.way === way.PASS) {
            tcValue = "kcb.oknm.online.pass.popup.push.cmd.mno.PS02_PushMno011Cmd";
          }
          if (!isMno && profile.way === way.PASS) {
            tcValue = "kcb.oknm.online.pass.popup.push.cmd.mvno.PS02_PushMvno011Cmd";
          }
          if (isMno && profile.way === way.SMS) {
            tcValue = "kcb.oknm.online.pass.popup.sms.cmd.mno.PS02_SmsMno011Cmd";
          }
          if (!isMno && profile.way === way.SMS) {
            tcValue = "kcb.oknm.online.pass.popup.sms.cmd.mvno.PS02_SmsMvno011Cmd";
          }
          element.value = tcValue;
        },
      },
      {
        selector: "input[name='mbl_tel_cmm_cd']",
        executor: 통신사(["", "01", "02", "03", "04", "05", "06"]),
      },
      {
        selector: "#ct > form",
        executor: (element: HTMLFormElement, profile) => {
          element.submit();
        },
      },
    ],
  },
  {
    matches: ["https://safe.ok-name.co.kr/CommonSvl"],
    steps: [
      {
        selector: "section.certify_user2.certifyWrap.certifyWrap_02",
        executor: 존재함,
      },
      {
        selector: "#nm",
        executor: 이름,
      },
      {
        selector: "#ssn6",
        executor: 주민번호_앞자리,
      },
      {
        selector: "#ssn1",
        executor: 주민번호_7번째자리,
      },
      {
        selector: "#mbphn_no",
        executor: 전화번호,
      },
    ],
  },
  {
    // 드림시큐리티
    matches: ["https://cert.mobile-ok.com/ptb_mokauth.html?"],
    steps: [
      // 통신사 클릭
      {
        selector: (profile) => {
          const changer = ["", "sk", "kt", "lgu", "skmvno", "ktmvno", "lgumvno"];
          return "#agency-" + changer[profile.carrier];
        },
        executor: 클릭,
      },
      {
        disabled: (profile) => is_MNO(profile.carrier),
        selector: "#checkMvno",
        executor: 클릭,
      },
      // 전체 동의 체크
      {
        selector: "#allchk",
        executor: 체크,
      },
      // 인증하기 클릭
      {
        disabled: (profile) => profile.way === way.PASS,
        selector: "#smsstart",
        executor: 클릭,
      },
      {
        disabled: (profile) => profile.way === way.SMS,
        selector: "#start",
        executor: 클릭,
      },
      {
        selector: "#common_step2 #name",
        executor: 이름,
      },
      {
        selector: "#common_step2 #phone",
        executor: 전화번호,
      },
      {
        selector: "#common_step3 #name",
        executor: 이름,
      },
      {
        selector: "#common_step3 #mynum1",
        executor: 주민번호_앞자리,
      },
      {
        selector: "#common_step3 #mynum2",
        executor: 주민번호_7번째자리,
      },
      {
        selector: "#common_step3 #phone",
        executor: 전화번호,
      },
    ],
  },
  // 한국모바일인증 - 통신사 선택 & 약관동의 & 인증방식 선택
  {
    matches: ["https://www.kmcert.com/kmcis/web_v4/kmcisHp00.jsp"],
    steps: [
      // 없으면 두번째 페이지에서 무한로딩됨
      {
        selector: ".step1header",
        executor: 존재함,
      },
      {
        selector: "input[name='reqCommIdStated']",
        executor: 통신사(["", "SKT", "KTF", "LGU", "SKM", "KTM", "LGM"]),
      },
      {
        selector: "input[name='CommId']",
        executor: 통신사(["", "SKT", "KTF", "LGU", "SKM", "KTM", "LGM"]),
      },
      // 폼 제출
      {
        selector: "#cplogn",
        executor: (element, profile) => {
          let actionHref = "";
          if (profile.way === way.SMS) {
            actionHref = "https://www.kmcert.com/kmcis/web_v4/kmcisSms01.jsp";
          } else {
            actionHref = "https://www.kmcert.com/kmcis/simpleCert_web_v3/kmcisApp01.jsp";
          }

          element.setAttribute("action", actionHref);
          element.submit();
        },
      },
    ],
  },
  // 한국모바일인증 - SMS 인증
  {
    matches: ["https://www.kmcert.com/kmcis/web_v4/kmcisSms01.jsp"],
    steps: [
      {
        selector: "#userName",
        executor: 이름,
      },
      {
        selector: "#Birth",
        executor: 주민번호_앞자리,
      },
      {
        selector: "#Sex",
        executor: 주민번호_7번째자리,
      },
      {
        selector: "#No",
        executor: 전화번호,
      },
      {
        selector: "#securityNum",
        executor: 포커스,
      },
    ],
  },
  // 한국모바일인증 - PASS 인증
  {
    matches: ["https://www.kmcert.com/kmcis/simpleCert_web_v3/kmcisApp01.jsp"],
    steps: [
      {
        selector: "#userName",
        executor: 이름,
      },
      {
        selector: "#No",
        executor: 전화번호,
      },
      {
        selector: "#securityNum",
        executor: 포커스,
      },
    ],
  },
  // 네이버인증? - TODO: 확인 필요
  {
    type: "once",
    matches: ["https://nid.naver.com/"],
    steps: [
      {
        selector: "#chk_agree3Lb",
        executor: 클릭,
      },
      {
        selector: "#nm",
        executor: 이름,
      },
      {
        selector: "#foreignYn",
        executor: (element, profile) => {
          element.value = profile.foreigner === "0" ? "N" : "Y";
        },
      },
      {
        selector: (profile) => (profile.gender === "1" ? "#male" : "#female"),
        executor: 클릭,
      },
      {
        selector: "#birth_year",
        executor: (element, profile) => {
          element.value = profile.birth.substring(0, 4);
        },
      },
      {
        selector: "#birth_month",
        executor: (element, profile) => {
          element.value = String(Number(profile.birth.substring(4, 6)));
        },
      },
      {
        selector: "#birth_day",
        executor: (element, profile) => {
          element.value = String(Number(profile.birth.substring(6)));
        },
      },
      {
        selector: "#mobile_cd",
        executor: 통신사(["", "SKT", "KTF", "LGT", "MVNO", "MVNO", "MVNO"]),
      },
      {
        disabled: (profile) => is_MNO(profile.carrier),
        selector: (profile) =>
          ["", "", "", "", "mvno_skLb", "mvno_ktLb", "mvno_lgLb"][profile.carrier],
        executor: 클릭,
      },
      {
        selector: "#phone_no",
        executor: 전화번호,
      },
      {
        selector: "#auth_no",
        executor: 포커스,
      },
    ],
  },
  // 다날? - TODO: 확인필요
  {
    type: "once",
    matches: ["wauth.teledit.com"],
    steps: [
      {
        selector: (profile) =>
          "#agency-" + ["", "sk", "kt", "lgu", "and", "and", "and"][profile.carrier],
        executor: 클릭,
      },
      {
        disabled: (profile) => is_MNO(profile.carrier),
        selector: (profile) =>
          [
            "#layerPopupMvno > div.layer-pop > form > div.pop-con_02 > ul > li.first-item > div.licensee_title > a > label",
            "#layerPopupMvno > div.layer-pop > form > div.pop-con_02 > ul > li:nth-child(2) > div.licensee_title > a > label",
            "#layerPopupMvno > div.layer-pop > form > div.pop-con_02 > ul > li:nth-child(3) > div.licensee_title > a > label",
          ][Number(profile.carrier) - 4],
        executor: 클릭,
      },
      {
        disabled: (profile) => is_MNO(profile.carrier),
        selector: "#btnSelectMvno",
        executor: 클릭,
      },
      {
        selector: "#agree_all",
        executor: 클릭,
      },
      {
        selector: (profile) => ["", "#btnSms", "#btnPass"][profile.way],
        executor: 클릭,
      },
      {
        selector: (profile) => ["#authTabSms > a", "#authTabPass > a"][profile.way],
        executor: (element, profile) => {
          if (element.title == "선택됨") return;
          const query = ["#authTabSms", "#authTabPass"][profile.way];
          const tab = document.querySelector(query) as HTMLButtonElement | null;
          tab?.click();
        },
      },
      {
        selector: (profile) => ["#sms_username", "#push_username"][profile.way],
        executor: 이름,
      },
      {
        selector: "#sms_mynum1",
        executor: 주민번호_앞자리,
      },
      {
        selector: "#sms_mynum2",
        executor: 주민번호_7번째자리,
      },
      {
        selector: (profile) => ["", "#sms_mobileno", "#push_mobileno"][profile.way],
        executor: 전화번호,
      },
      {
        selector: "#inputCaptcha",
        executor: 포커스,
      },
    ],
  },
  // 한국사이버결제? - TODO: 확인필요
  {
    type: "once",
    matches: ["cert.kcp.co.kr"],
    steps: [
      {
        selector: (profile) =>
          "#agency-" + ["", "sk", "kt", "lg", "and", "and", "and"][profile.carrier],
        executor: 클릭,
      },
      {
        disabled: (profile) => is_MNO(profile.carrier),
        selector: (profile) =>
          [
            "form > div.pop-con_02 > ul > li:nth-child(1) > label",
            "form > div.pop-con_02 > ul > li:nth-child(2) > label",
            "form > div.pop-con_02 > ul > li:nth-child(3) > label",
          ][Number(profile.carrier) - 4],
        executor: 클릭,
      },
      {
        disabled: (profile) => is_MNO(profile.carrier),
        selector: "#btnMvnoSelect",
        executor: 클릭,
      },
      {
        selector: () => {
          const isPC = !window.location.pathname.includes("/mo");
          return isPC
            ? "#frm > fieldset > ul.agreelist.all > li > div > label:nth-child(2)"
            : "#agree_all";
        },
        executor: 클릭,
      },
      {
        selector: (profile) => ["", "#btnSms", "#btnPass"][profile.way],
        executor: 클릭,
      },
      {
        selector: "#user_name",
        executor: 이름,
      },
      {
        selector: "#mynum1",
        executor: 주민번호_앞자리,
      },
      {
        selector: "#mynum2",
        executor: 주민번호_7번째자리,
      },
      {
        selector: () => {
          const isPC = !window.location.pathname.includes("/mo");
          return isPC ? "#phone_no_rKey" : "#phone_no";
        },
        executor: 전화번호,
      },
      {
        selector: "#captcha_no",
        executor: 포커스,
      },
    ],
  },
  // 병무민원 - 본인확인 - 통합로그인
  {
    matches: ["https://cert.mma.go.kr/index_cert_npki.jsp"],
    steps: [
      {
        selector: "#seongmyeong",
        executor: 이름,
      },
      {
        selector: "#jmbeonho1",
        executor: 주민번호_앞자리,
      },
    ],
  },
  // 예비군 - 공동인증서
  {
    matches: ["https://www.yebigun1.mil.kr/dmobis/uat/uia/LoginUsr.do"],
    steps: [
      {
        selector: "#name",
        executor: 이름,
      },
      {
        selector: "#reg_no_first",
        executor: 주민번호_앞자리,
      },
    ],
  },
  {
    matches: [
      // 국민신문고 - 비회원 로그인 - 공무원 인증
      "https://www.epeople.go.kr/nep/crtf/orctInfoCrtfPopup.npaid",
      // 국민신문고 - 비회원 로그인 - 외국인등록번호
      "https://www.epeople.go.kr/nep/crtf/inhbFgnoInfoCrtfPopup.npaid",
    ],
    steps: [
      {
        selector: "#orctNm",
        executor: 이름,
      },
      {
        selector: "#inhbRegNo1",
        executor: 주민번호_앞자리,
      },
    ],
  },
];
