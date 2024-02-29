import { useTranslation } from "react-i18next";

import settingImg from "/assets/profile2.png";

const EditMenu = () => {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  return (
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
  );
};

export default EditMenu;
