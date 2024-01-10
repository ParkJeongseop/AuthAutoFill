import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import React from "react";
import { CarrierCode, GenderCode, IsForeigner, Profile, WayCode } from "../type";
import { browser, getCarrierName, getWay, toHyphenPhone } from "../utils";
import { useStorageData, useUpdateStorage } from "./storage";

export function Popup() {
  const { data: storage } = useStorageData();
  const { on, profiles, selectedProfile } = storage!;
  const { mutate: updateStorage, isLoading } = useUpdateStorage();

  const onEnabledChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateStorage({ on: e.target.checked });
  };
  const removeProfile = (index: number) => {
    updateStorage({ profiles: profiles.filter((_, i) => i !== index) });
  };
  const selectProfile = (index: number) => {
    if (index === selectedProfile) return;
    updateStorage({ selectedProfile: index });
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const profile: Profile = {
      id: crypto.randomUUID(),
      name: formData.get("name") as string,
      carrier: formData.get("carrier") as CarrierCode,
      phone_number: (formData.get("phone_number") as string).replaceAll("-", ""),
      birth: formData.get("birth") as string,
      gender: formData.get("gender") as GenderCode,
      foreigner: formData.get("foreigner") as IsForeigner,
      way: formData.get("way") as WayCode,
    };

    updateStorage(
      {
        profiles: [...profiles, profile],
      },
      { onSuccess: e.currentTarget.reset },
    );
  };

  return (
    <main className="w-96 space-y-2 bg-base-300 p-4">
      <label htmlFor="onoff" className="flex items-center gap-2">
        <input
          id="onoff"
          type="checkbox"
          className="checkbox"
          checked={on}
          onChange={onEnabledChange}
          disabled={isLoading}
        />
        <h1 className="text-lg font-bold">{browser.i18n.getMessage("auth_autofill")} ON/OFF</h1>
      </label>

      <ul>
        {profiles.map((profile, index) => (
          <li className="join w-full" key={profile.id}>
            <div className="w-4 py-3 text-center">
              {selectedProfile === index ? (
                <span className="inline-block h-full w-2 rounded-full bg-white bg-opacity-30"></span>
              ) : null}
            </div>
            <button
              className="join-item flex-1 space-y-1 p-2 text-left"
              type="button"
              onClick={() => selectProfile(index)}
              disabled={isLoading}
            >
              <h5 className="ml-2 text-sm">
                {profile.name} ( {toHyphenPhone(profile.phone_number)} )
              </h5>
              <div className="space-x-1">
                <span className="badge badge-md text-xs">{getCarrierName(profile.carrier)}</span>
                <span className="badge badge-md text-xs">{getWay(profile.way)}</span>
              </div>
            </button>
            <button
              type="button"
              className="btn btn-ghost btn-lg"
              onClick={() => removeProfile(index)}
              disabled={isLoading}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>

      <div className="divider"></div>

      <form onSubmit={onSubmit} className="space-y-2">
        <h3 className="text-lg font-bold">{browser.i18n.getMessage("add_profile")}</h3>

        <input
          type="text"
          id="name"
          required
          name="name"
          placeholder={browser.i18n.getMessage("full_name")}
          className="input input-bordered w-full"
          disabled={isLoading}
        />

        <div className="join w-full">
          <select
            id="carrier"
            name="carrier"
            className="join-item select select-bordered w-1/2"
            disabled={isLoading}
          >
            <option value="-1">{browser.i18n.getMessage("carrier")}</option>
            <option value="1">{browser.i18n.getMessage("carrier_SKT")}</option>
            <option value="2">{browser.i18n.getMessage("carrier_KT")}</option>
            <option value="3">{browser.i18n.getMessage("carrier_LGU")}</option>
            <option value="4">{browser.i18n.getMessage("carrier_SKT_MNVO")}</option>
            <option value="5">{browser.i18n.getMessage("carrier_KT_MNVO")}</option>
            <option value="6">{browser.i18n.getMessage("carrier_LGU_MNVO")}</option>
          </select>

          <input
            type="tel"
            name="phone_number"
            id="phone_number"
            placeholder={browser.i18n.getMessage("phone_number")}
            required
            className="input join-item input-bordered max-w-min"
            disabled={isLoading}
            onChange={(e) => (e.target.value = toHyphenPhone(e.target.value))}
          />
        </div>

        <input
          type="number"
          id="birth"
          required
          name="birth"
          minLength={8}
          maxLength={9}
          min={Number(dayjs().format("YYYYMMDD")) - 1000000}
          max={Number(dayjs().format("YYYYMMDD"))}
          placeholder={browser.i18n.getMessage("birthday")}
          className="input input-bordered w-full"
          disabled={isLoading}
        />

        <div className="join w-full">
          <select
            className="join-item select select-bordered flex-1"
            id="foreigner"
            name="foreigner"
            disabled={isLoading}
          >
            <option value="0">{browser.i18n.getMessage("citizen")}</option>
            <option value="1">{browser.i18n.getMessage("foreigner")}</option>
          </select>

          <select
            className="join-item select select-bordered flex-1"
            id="gender"
            name="gender"
            disabled={isLoading}
          >
            <option value="-1">{browser.i18n.getMessage("gender")}</option>
            <option value="1">{browser.i18n.getMessage("male")}</option>
            <option value="2">{browser.i18n.getMessage("female")}</option>
          </select>
        </div>

        <select id="way" className="select select-bordered w-full" name="way" disabled={isLoading}>
          <option value="-1">{browser.i18n.getMessage("auth_method")}</option>
          <option value="1">{browser.i18n.getMessage("sms")}</option>
          <option value="2">{browser.i18n.getMessage("pass")}</option>
        </select>

        <div>
          <button className="btn" disabled={isLoading}>
            {browser.i18n.getMessage("add_profile")}
          </button>
        </div>
      </form>
    </main>
  );
}
