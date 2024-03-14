import { useTranslation } from "react-i18next";
import { useAppContext } from "../Context/AppContext";

import settingImg from "/assets/profile2.png";

const InformationMenu = () => {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  const { userData } = useAppContext();

  return (
    <div className="bg-[#032730] px-4 py-6 rounded-lg flex flex-col lg:flex-row gap-6">
      <div>
        <div className="flex flex-col gap-3 mb-4">
          <span className={`text-brownOrange font-semibold text-lg ${selectedLanguage === "ar" && "text-right"}`}>{t("fullname")}</span>
          <input disabled className={`bg-postage p-3 rounded-xl text-white ${selectedLanguage === "ar" && "text-right"}`} type="text" placeholder={t("fullname")} value={userData.name} />
        </div>
        <div className="flex flex-col gap-3 mb-4">
          <span className={`text-brownOrange font-semibold text-lg ${selectedLanguage === "ar" && "text-right"}`}>{t("email")}</span>
          <input disabled className={`bg-postage p-3 rounded-xl text-white truncate ${selectedLanguage === "ar" && "text-right"}`} type="text" placeholder={t("email")} value={userData.email} />
        </div>
        {/* <div className="flex flex-col gap-3 mb-4">
          <span className={`text-brownOrange font-semibold text-lg ${selectedLanguage === "ar" && "text-right"}`}>{t("phonenumber")}</span>
          <input disabled className={`bg-postage p-3 rounded-xl text-white ${selectedLanguage === "ar" && "text-right"}`} type="text" placeholder={t("phonenumber")} value={userData.phoneNumber} />
        </div> */}
        <div className="flex flex-col gap-3">
          <span className={`text-brownOrange font-semibold text-lg ${selectedLanguage === "ar" && "text-right"}`}>{t("address")}</span>
          <input disabled className={`bg-postage p-3 rounded-xl text-white ${selectedLanguage === "ar" && "text-right"}`} type="text" placeholder={t("address")} value={userData.address} />
        </div>
      </div>
      <div className="flex ic justify-center">
        <img src={settingImg} alt="" />
      </div>
    </div>
  );
};

export default InformationMenu;
