export type CarrierCode = "1" | "2" | "3" | "4" | "5" | "6";
export type WayCode = "1" | "2";
export type GenderCode = "1" | "2";
export type IsForeigner = "0" | "1";

export type Profile = {
  name: string;
  carrier: CarrierCode;
  phone_number: string;
  birth: string;
  gender: GenderCode;
  foreigner: IsForeigner;
  way: WayCode;
};

export type StorageData = {
  profiles?: Profile[];
  selectedProfile?: number; // profiles의 index
  on?: number; // 0: off, 1: on
};
