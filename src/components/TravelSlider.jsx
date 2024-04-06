import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getData } from "../Services/APICalls";

import PlaceSlider from "./PlaceSlider";

function TravelSlider() {
  const [fetching, setFetching] = useState(true);
  const [places, setPlaces] = useState([]);
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  useEffect(() => {
    const fetchData = async () => {
      const temp = await getData("place/recomended");
      setPlaces(temp.data.places);
      setFetching(false);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-postage pt-12 pb-6 px-3">
      <div className="container mx-auto bg-white p-6 rounded-lg">
        <div className={`flex items-center justify-between  ${selectedLanguage === "ar" && "flex-row-reverse"}`}>
          <h3 className={`text-brownOrange text-2xl md:text-3xl text-center font-bold mb-6 ${selectedLanguage === "ar" ? "md:text-right" : "md:text-left"}`}>{t("recommended")}</h3>
          <Link to="/places" className="block text-center text-brownOrange font-bold text-lg mb-6">{t("seeAll")}</Link>
        </div>
        {fetching ? <p>Loading...</p> : <PlaceSlider data={places} />}
      </div>
    </div>
  );
}

export default TravelSlider;
