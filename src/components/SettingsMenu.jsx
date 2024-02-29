import { useAppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


const SettingsMenu = ({setSelected}) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useAppContext();
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  const logout = () => {
    setUserData({ name: "", email: "", visibleMenu: "none", loggedIn: false });
    navigate("/");
  };

  return (
    <div className="bg-[#032730] px-4 py-6 rounded-lg">
      <h4 className={`text-white font-bold text-3xl mb-4 ${selectedLanguage === "ar" && "text-right"}`}>{t("settings")}</h4>
      <div className="flex flex-col  gap-3">
        <button onClick={() => setSelected("edit")} className="bg-brownOrange hover:bg-postage duration-300 py-2 px-16 text-white rounded-lg">
          {t("editProfile")}
        </button>
        <button onClick={() => setUserData({ ...userData, visibleMenu: "password" })} className="bg-brownOrange hover:bg-postage duration-300 py-2 px-16 text-white rounded-lg">
          {t("resetpassword")}
        </button>
        <button onClick={logout} className="bg-brownOrange hover:bg-postage duration-300 py-2 px-16 text-white rounded-lg">
          {t("signout")}
        </button>
        <button className="bg-brownOrange hover:bg-postage duration-300 py-2 px-16 text-white rounded-lg">{t("deleteAccount")}</button>
      </div>
    </div>
  );
};

export default SettingsMenu;
