import { useAppContext } from "../Context/AppContext";
import { useTranslation } from "react-i18next";
import FavouriteItem from "./FavouriteItem";

const FavouriteArticles = () => {
  const { userData } = useAppContext();
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  return (
    <div className="bg-[#032730] px-4 py-6 rounded-lg ">
      <div className="flex flex-col gap-6">
        <h3 className={`text-white text-2xl font-bold ${selectedLanguage === "ar" && "text-right"}`}>{t("FavouriteArticles")}</h3>
        {userData.favoriteArticles.length === 0 ? <p className={`text-white text-lg ${selectedLanguage === "ar" && "text-right"}`}>{t("noFavouritesFound")}</p> : userData.favoriteArticles.map((article) => <FavouriteItem key={article} id={article} type="article" />)}
      </div>
    </div>
  );
};

export default FavouriteArticles;
