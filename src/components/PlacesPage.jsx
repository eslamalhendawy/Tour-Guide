import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getData } from "../Services/APICalls";
import { Link } from "react-router-dom";

const PlacesPage = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  useEffect(() => {
    getData("place")
      .then((response) => {
        console.log(response.data);
        setArticles(response.data.places);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(articles);

  useEffect(() => {
    document.title = "Egytravler | Places";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-postage">
      <div className="container mx-auto py-3 px-3 minHeight">
        <h3 className={`text-brownOrange text-4xl font-bold mt-12 mb-6 ${selectedLanguage === "ar" && "text-right"}`}>{t("places")}</h3>
        {loading ? (
          <p className="text-white text-xl font-semibold">Loading...</p>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {articles.map((article) => (
              <Link to={`/article/${article._id}`} key={article._id}>
                <div className="flex flex-col gap-4 bg-white p-2 rounded-lg mb-4">
                  <div className="max-w-[300px] h-[175px] mx-auto">
                    <img src={article.image} alt="" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-brownOrange text-center text-lg font-bold">{article.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default PlacesPage