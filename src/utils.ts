import { CarrierCode, GenderCode, IsForeigner, WayCode } from "./type";

export const browser = window.chrome || (window as any)["browser"];

export function getCarrierName(carrierCode: CarrierCode) {
  const messageName =
    "carrier_" + ["", "SKT", "KT", "LGU", "SKT_MNVO", "KT_MNVO", "LGU_MNVO"][carrierCode];
  return browser.i18n.getMessage(messageName);
}

export function getWay(wayCode: WayCode) {
  const messageName = ["", "sms", "pass"][wayCode];
  return browser.i18n.getMessage(messageName);
}

export function toHyphenPhone(str: string): string {
  return str
    .match(/\d*/g)
    ?.join("")
    .match(/(\d{0,3})(\d{0,4})(\d{0,4})/)
    ?.slice(1)
    .join("-")
    .replace(/-*$/g, "")!;
}

const debug = true;
/**
 * 개발진행시 console.log()
 * @param {string} string - 출력할 문자열
 */
export function log(string: string) {
  if (!debug) return;
  console.log(string);
}

export const carrier = {
  SKT: "1",
  KT: "2",
  LGU: "3",
  SKT_MVNO: "4",
  KT_MVNO: "5",
  LGU_MVNO: "6",
} as const;

export const way = {
  SMS: "1",
  PASS: "2",
} as const;

/**
 * 주민등록번호 7번째 자리(성별) 가져오기
 * @param birth - 생년월일 8자리
 * @param gender - 성별 코드
 * @param foreigner - 내/외국인 코드
 * @returns 주민등록번호 7번째 자리, null이면 알 수 없음을 의미함
 */
export function get_RRN_GenderNum(birth: string, gender: GenderCode, foreigner: IsForeigner) {
  // 9: 1800 ~ 1899년에 태어난 남성
  // 0: 1800 ~ 1899년에 태어난 여성
  // 1: 1900 ~ 1999년에 태어난 남성
  // 2: 1900 ~ 1999년에 태어난 여성
  // 3: 2000 ~ 2099년에 태어난 남성
  // 4: 2000 ~ 2099년에 태어난 여성
  // 5: 1900 ~ 1999년에 태어난 외국인 남성
  // 6: 1900 ~ 1999년에 태어난 외국인 여성
  // 7: 2000 ~ 2099년에 태어난 외국인 남성
  // 8: 2000 ~ 2099년에 태어난 외국인 여성
  const birthSub02 = birth.substring(0, 2);
  if (birthSub02 === "18") {
    return gender === "1" ? "9" : "0";
  }
  if (birthSub02 === "19" && foreigner === "0") {
    return gender as string;
  }
  if (birthSub02 === "20" && foreigner === "0") {
    return String(Number(gender) + 2);
  }
  if (birthSub02 === "19" && foreigner === "1") {
    return String(Number(gender) + 4);
  }
  if (birthSub02 === "20" && foreigner === "1") {
    return String(Number(gender) + 6);
  }
  return null;
}

export function is_MNO(carrier_code: CarrierCode) {
  // MNO(Mobile Network Operator)
  // 이동통신망사업자
  // SKT, KT, LGU+
  return Number(carrier_code) < 4;
}
