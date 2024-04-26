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
import { useEffect } from "react";

function Header() {
  const { userData } = useAppContext();
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ar");
      localStorage.setItem("language", "ar");
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    }
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
            <div className="hidden lg:flex bg-brownOrange px-6 py-2 xl:text-lg rounded justify-center items-center font-bold cursor-pointer text-postage" onClick={() => changeLanguage()}>
              <i className="fa-solid fa-globe"></i>
            </div>
            <ul className="hidden lg:flex items-center gap-4 xl:gap-8 xl:text-lg font-semibold text-[#00242D] bg-brownOrange px-6 py-2 rounded">
              <Link to="/trips">
                <li className="hover:text-white duration-300 cursor-pointer">{t("trips")}</li>
              </Link>
              <Link to="/articles">
                <li className="hover:text-white duration-300 cursor-pointer">{t("articles")}</li>
              </Link>
              <Link to="/places">
                <li className="hover:text-white duration-300 cursor-pointer">{t("places")}</li>
              </Link>
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
                <Link to="/profile">
                  <div className="flex items-center justify-center gap-1">
                    {userData.avatar === "default.jpg" ? (
                      <div className="size-[30px] rounded-full bg-white flex items-center justify-center capitalize">
                        <span className="text-brownOrange">{userData.name[0]}</span>
                      </div>
                    ) : (
                      <img className="size-[30px] rounded-full" src={userData.avatar} alt="" />
                    )}
                    <li className="hover:text-white duration-300 cursor-pointer">{userData.name}</li>
                  </div>
                </Link>
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
