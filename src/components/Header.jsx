import { useAppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SideMenu from "./SideMenu";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import ConfirmCode from "./ConfirmCode";
import NewPassword from "./NewPassword";
import ChangeSuccess from "./ChangeSuccess";

import logo from "/assets/6 1.png";

function Header() {
  const { userData, setUserData } = useAppContext();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const logout = () => {
    setUserData({ ...userData, loggedIn: false });
    localStorage.removeItem("userToken");
  };

  return (
    <div className="bg-[#505050]">
      <div className="container mx-auto py-3 px-3">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="max-w-[100px]">
              <img src={logo} alt="" />
            </div>
          </Link>
          <div className="flex items-stretch gap-4">
            <div className="hidden lg:flex bg-brownOrange px-6 py-2 xl:text-lg rounded justify-center items-center font-bold cursor-pointer text-postage" onClick={() => changeLanguage("en")}>
              E
            </div>
            <div className="hidden lg:flex bg-brownOrange px-6 py-2 xl:text-lg rounded justify-center items-center font-bold cursor-pointer text-postage" onClick={() => changeLanguage("ar")}>
              ع
            </div>
            <ul className="hidden lg:flex items-center gap-4 xl:gap-8 xl:text-lg font-semibold text-[#00242D] bg-brownOrange px-6 py-2 rounded">
              <li className="hover:text-white duration-300 cursor-pointer">{t("trips")}</li>
              <Link to="/sinuhe">
                <li className="hover:text-white duration-300 cursor-pointer">{t("sinuhe")}</li>
              </Link>
              <li className="hover:text-white duration-300 cursor-pointer">{t("planner")}</li>
              <Link to="/search">
                <li className="hover:text-white duration-300 cursor-pointer">{t("search")}</li>
              </Link>
              <Link to="/about-us">
                <li className="hover:text-white duration-300 cursor-pointer">{t("aboutus")}</li>
              </Link>
              <Link to="/contact-us">
                <li className="hover:text-white duration-300 cursor-pointer">{t("contactus")}</li>
              </Link>
              {userData.loggedIn ? (
                <li onClick={logout} className="hover:text-white duration-300 cursor-pointer">
                  {userData.name}
                </li>
              ) : (
                <>
                  <li>
                    <SignUp />
                  </li>
                  <li>
                    <Login />
                  </li>
                </>
              )}
            </ul>
          </div>
          <SideMenu />
          <ForgotPassword />
          <ConfirmCode />
          <NewPassword />
          <ChangeSuccess />
        </div>
      </div>
    </div>
  );
}

export default Header;
