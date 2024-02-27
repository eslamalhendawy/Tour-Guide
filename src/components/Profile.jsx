import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

import profileImg from "/assets/profile.png";
import settingImg from "/assets/profile2.png";

const Profile = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { userData, setUserData } = useAppContext();
  const selectedLanguage = i18n.language;
  const [selected, setSelected] = useState("settings");

  const logout = () => {
    setUserData({ name: "", email: "", visibleMenu: "none", loggedIn: false });
    navigate("/");
  };

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
          <div className="bg-[#032730] px-4 py-6 rounded-lg">
            <h4 className="text-white font-bold text-3xl mb-4">Settings</h4>
            <div className="flex flex-col  gap-3">
              <button onClick={() => setSelected("edit")} className="bg-brownOrange hover:bg-postage duration-300 py-2 px-16 text-white rounded-lg">
                Edit Profile
              </button>
              <button onClick={() => setUserData({ ...userData, visibleMenu: "password" })} className="bg-brownOrange hover:bg-postage duration-300 py-2 px-16 text-white rounded-lg">
                Change Password
              </button>
              <button onClick={logout} className="bg-brownOrange hover:bg-postage duration-300 py-2 px-16 text-white rounded-lg">
                Sign Out
              </button>
              <button className="bg-brownOrange hover:bg-postage duration-300 py-2 px-16 text-white rounded-lg">Delete Account</button>
            </div>
          </div>
        )}
        {selected === "information" && (
          <div className="bg-[#032730] px-4 py-6 rounded-lg flex flex-col lg:flex-row gap-6">
            <div>
              <div className="flex flex-col gap-3 mb-4">
                <span className={`text-brownOrange font-semibold text-lg ${selectedLanguage === "ar" && "text-right"}`}>{t("fullname")}</span>
                <input disabled className={`bg-postage p-3 rounded-xl text-white ${selectedLanguage === "ar" && "text-right"}`} type="text" placeholder={t("fullname")} value={userData.name} />
              </div>
              <div className="flex flex-col gap-3 mb-4">
                <span className={`text-brownOrange font-semibold text-lg ${selectedLanguage === "ar" && "text-right"}`}>{t("email")}</span>
                <input disabled className={`bg-postage p-3 rounded-xl text-white truncate ${selectedLanguage === "ar" && "text-right"}`} type="text" placeholder={t("email")} value={userData.email}  />
              </div>
              <div className="flex flex-col gap-3 mb-4">
                <span className={`text-brownOrange font-semibold text-lg ${selectedLanguage === "ar" && "text-right"}`}>{t("phonenumber")}</span>
                <input disabled className={`bg-postage p-3 rounded-xl text-white ${selectedLanguage === "ar" && "text-right"}`} type="text" placeholder={t("phonenumber")} />
              </div>
              <div className="flex flex-col gap-3">
                <span className={`text-brownOrange font-semibold text-lg ${selectedLanguage === "ar" && "text-right"}`}>{t("address")}</span>
                <input disabled className={`bg-postage p-3 rounded-xl text-white ${selectedLanguage === "ar" && "text-right"}`} type="text" placeholder={t("address")} />
              </div>
            </div>
            <div className="flex ic justify-center">
              <img src={settingImg} alt="" />
            </div>
          </div>
        )}
        {selected === "edit" && (
          <div className="bg-[#032730] px-4 py-6 rounded-lg ">
            <div className="flex flex-col lg:flex-row gap-6 mb-4">
              <div>
                <div className="flex flex-col gap-3 mb-4">
                  <span className={`text-brownOrange font-semibold text-lg ${selectedLanguage === "ar" && "text-right"}`}>{t("fullname")}</span>
                  <input className={`bg-postage p-3 rounded-xl outline-none text-white ${selectedLanguage === "ar" && "text-right"}`} type="text" placeholder={t("fullname")} />
                </div>
                <div className="flex flex-col gap-3 mb-4">
                  <span className={`text-brownOrange font-semibold text-lg ${selectedLanguage === "ar" && "text-right"}`}>{t("email")}</span>
                  <input className={`bg-postage p-3 rounded-xl outline-none text-white ${selectedLanguage === "ar" && "text-right"}`} type="text" placeholder={t("email")} />
                </div>
                <div className="flex flex-col gap-3 mb-4">
                  <span className={`text-brownOrange font-semibold text-lg ${selectedLanguage === "ar" && "text-right"}`}>{t("phonenumber")}</span>
                  <input className={`bg-postage p-3 rounded-xl outline-none text-white ${selectedLanguage === "ar" && "text-right"}`} type="text" placeholder={t("phonenumber")} />
                </div>
                <div className="flex flex-col gap-3">
                  <span className={`text-brownOrange font-semibold text-lg ${selectedLanguage === "ar" && "text-right"}`}>{t("address")}</span>
                  <input className={`bg-postage p-3 rounded-xl outline-none text-white ${selectedLanguage === "ar" && "text-right"}`} type="text" placeholder={t("address")} />
                </div>
              </div>
              <div className="flex ic justify-center">
                <img src={settingImg} alt="" />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-brownOrange hover:bg-postage duration-300 text-white py-3 px-12 rounded-lg">{t("save")}</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
