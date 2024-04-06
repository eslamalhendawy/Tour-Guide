import { useAppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";


const SettingsMenu = ({setSelected}) => {
  const navigate = useNavigate();
  const { setUserData } = useAppContext();
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  const logout = () => {
    setUserData({ name: "", email: "", phoneNumber: "", address: "", visibleMenu: "none", loggedIn: false });
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="bg-[#032730] px-4 py-6 rounded-lg">
      <h4 className={`text-white font-bold text-3xl mb-4 ${selectedLanguage === "ar" && "text-right"}`}>{t("settings")}</h4>
      <div className="flex flex-col gap-3">
        <button onClick={() => setSelected("edit")} className="bg-brownOrange hover:bg-postage duration-300 w-[240px] mx-auto py-2 px-16 text-white rounded-lg">
          {t("editProfile")}
        </button>
        <ChangePassword />
        <button onClick={logout} className="bg-brownOrange hover:bg-postage duration-300 w-[240px] mx-auto py-2 px-16 text-white rounded-lg">
          {t("signout")}
        </button>
        <DeleteAccount />
      </div>
    </div>
  );
};

export default SettingsMenu;
