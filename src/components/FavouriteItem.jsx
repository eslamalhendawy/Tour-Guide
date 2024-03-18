import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";
import { getData, deleteData } from "../Services/APICalls";
import { useTranslation } from "react-i18next";

const FavouriteItem = ({ id, type }) => {
  const userToken = localStorage.getItem("userToken");
  const { userData, setUserData } = useAppContext();

  const [placeData, setPlaceData] = useState();
  const [loading, setLoading] = useState(true);
  
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      let temp = await getData(`${type === "place" ? "place" : "articles"}/${id}`, userToken);
      if(type === "place"){
        setPlaceData(temp.data.place);
      }else{
        setPlaceData(temp.data.article);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const removeFavourite = async () => {
    let temp = await deleteData(`${type === "place" ? "place" : "articles"}/favorite/${id}`, userToken);
    if(type === "place"){
      setUserData({ ...userData, favoritePlaces: temp.data.data.user.favoritePlaces });
    }else{
      setUserData({ ...userData, favoriteArticles: temp.data.data.user.favoriteArticles });
    }
  };

  return (
    <>
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="border border-white pr-3 rounded-xl flex items-stretch gap-4 max-w-[350px]">
          <div className="basis-1/3">
            <img src={placeData.image} className="h-full w-full rounded-l-xl" />
          </div>
          <div className="flex flex-col gap-4 text-white py-2 basis-2/3">
            <h4 className="font-bold text-2xl">{type === "place" ? placeData.name : placeData.title}</h4>
            <div className="flex flex-row-reverse items-center gap-4 text-lg">
              <i onClick={removeFavourite} className="fa-solid fa-trash ml-auto hover:text-red-600 duration-200 cursor-pointer"></i>
              <Link to={`/${type === "place" ? "place" : "article"}/${id}`} className="bg-brownOrange hover:bg-postage duration-200 rounded-lg p-2" >{t("moreDetails")}</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FavouriteItem;
