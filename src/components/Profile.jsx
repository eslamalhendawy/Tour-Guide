import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../Context/AppContext";

import SettingsMenu from "./SettingsMenu";
import InformationMenu from "./InformationMenu";

import profileImg from "/assets/profile.png";
import EditMenu from "./EditMenu";

const Profile = () => {
  const { t } = useTranslation();
  const { userData } = useAppContext();
  const [selected, setSelected] = useState("settings");


  return (
    <section className="bg-postage minHeight">
      <div className="container mx-auto flex flex-col lg:flex-row gap-6 items-stretch lg:items-start justify-center p-12 pt-24 px-6">
        <div className="bg-[#032730] flex flex-col items-center gap-6 px-4 pb-6 text-white rounded-lg">
          <div className="mt-[-50px] w-[55%] relative">
            <img src={profileImg} alt="" />
            <div className="absolute right-0 top-[70%] bg-white size-[30px] flex justify-center items-center rounded-full group cursor-pointer">
              <i className="fa-solid fa-pen text-postage group-hover:text-brownOrange duration-300"></i>
            </div>
          </div>
          <h3 className="font-bold text-xl">{userData.name}</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => setSelected("settings")} className={`py-3 px-8  border border-brownOrange rounded-lg ${selected === "settings" || selected === "edit" ? "bg-brownOrange" : "bg-transparent"}`}>
              {t("settings")}
            </button>
            <button onClick={() => setSelected("information")} className={`py-3 px-8  border border-brownOrange rounded-lg ${selected === "information" ? "bg-brownOrange" : "bg-transparent"}`}>
              {t("info")}
            </button>
            <button onClick={() => setSelected("history")} className={`py-3 px-8  border border-brownOrange rounded-lg ${selected === "history" ? "bg-brownOrange" : "bg-transparent"}`}>
              {t("history")}
            </button>
          </div>
        </div>
        {selected === "settings" && (
          <SettingsMenu setSelected={setSelected} />
        )}
        {selected === "information" && (
          <InformationMenu />
        )}
        {selected === "edit" && (
          <EditMenu />
        )}
      </div>
    </section>
  );
};

export default Profile;
