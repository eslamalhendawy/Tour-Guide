import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../Context/AppContext";

import SettingsMenu from "./SettingsMenu";
import InformationMenu from "./InformationMenu";
import UpdateAvatar from "./UpdateAvatar";
import Favourites from "./Favourites";
import FavouriteArticles from "./FavouriteArticles";
import UserTrip from "./UserTrip";

import EditMenu from "./EditMenu";

const Profile = () => {
  const { t } = useTranslation();
  const { userData } = useAppContext();
  const [selected, setSelected] = useState("settings");

  useEffect(() => {
    document.title = "Egytravler | Profile";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-postage minHeight">
      <div className="container mx-auto flex flex-col lg:flex-row gap-6 items-stretch lg:items-start justify-center p-12 pt-24 px-6">
        <div className="bg-[#032730] flex flex-col items-center gap-6 px-4 pb-6 text-white rounded-lg">
          <UpdateAvatar />
          <h3 className="font-bold text-xl">{userData.name}</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => setSelected("settings")} className={`py-3 px-8  border border-brownOrange rounded-lg ${selected === "settings" || selected === "edit" ? "bg-brownOrange" : "bg-transparent"}`}>
              {t("settings")}
            </button>
            <button onClick={() => setSelected("information")} className={`py-3 px-8  border border-brownOrange rounded-lg ${selected === "information" ? "bg-brownOrange" : "bg-transparent"}`}>
              {t("info")}
            </button>
            <button onClick={() => setSelected("favorites")} className={`py-3 px-8  border border-brownOrange rounded-lg ${selected === "favorites" ? "bg-brownOrange" : "bg-transparent"}`}>
              {t("favourites")}
            </button>
          </div>
        </div>
        {selected === "settings" && <SettingsMenu setSelected={setSelected} />}
        {selected === "information" && <InformationMenu />}
        {selected === "edit" && <EditMenu />}
        {selected === "favorites" && (
          <div className="flex flex-col gap-6">
            <UserTrip />
            <Favourites />
            <FavouriteArticles />
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
