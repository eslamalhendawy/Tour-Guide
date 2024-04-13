import { useAppContext } from "../Context/AppContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Drawer from "@mui/material/SwipeableDrawer";
import Login from "./Login";
import SignUp from "./SignUp";

function SideMenu() {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  const { userData, setUserData } = useAppContext();
  const [openMenu, setOpen] = useState(false);
  const toggleMenu = (openStatus) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(openStatus);
  };

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
    <div className="lg:hidden">
      <i onClick={toggleMenu(true)} className="fa-solid fa-bars text-xl text-white hover:text-primary duration-300 cursor-pointer"></i>
      <Drawer anchor="right" open={openMenu} onClose={toggleMenu(false)} onOpen={toggleMenu(true)}>
        <div className="w-screen h-full md:max-w-screen-sm flex flex-col justify-between p-3 relative bg-[#505050]">
          <div>
            <div className="flex items-center justify-between">
              <div className="text-2xl text-white hover:text-primary duration-300 mb-6">
                <i className="fa-solid fa-x" onClick={toggleMenu(false)}></i>
              </div>
              <div className="text-2xl text-white hover:text-primary duration-300 mb-6" onClick={() => changeLanguage()}>
                <i className="fa-solid fa-globe"></i>
              </div>
            </div>
            <ul className={`${selectedLanguage === "ar" && "text-right"}`}>
              <Link to="/trips" onClick={toggleMenu(false)}>
                <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">{t("trips")}</li>
              </Link>
              <Link to="/articles" onClick={toggleMenu(false)}>
                <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">{t("articles")}</li>
              </Link>
              <Link to="/places" onClick={toggleMenu(false)}>
                <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">{t("places")}</li>
              </Link>
              <Link to="/search" onClick={toggleMenu(false)}>
                <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">{t("search")}</li>
              </Link>
              <Link to="/about-us" onClick={toggleMenu(false)}>
                <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">{t("aboutus")}</li>
              </Link>
              <Link to="/contact-us" onClick={toggleMenu(false)}>
                <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">{t("contactus")}</li>
              </Link>
            </ul>
          </div>
          <div className=" flex gap-6 mb-6">
            {userData.loggedIn ? (
              <Link to="/profile" onClick={toggleMenu(false)} className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer flex items-center gap-2">
                <i className="fa-solid fa-user"></i>
                <span>{userData.name}</span>
              </Link>
            ) : (
              <>
                <Login />
                <SignUp />
              </>
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default SideMenu;
