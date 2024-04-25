import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getData } from "../Services/APICalls";
import { Link } from "react-router-dom";

const ArticlesPage = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  useEffect(() => {
    getData("articles")
      .then((response) => {
        setArticles(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    document.title = "Egytravler | Articles";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-postage">
      <div className="container mx-auto py-3 px-3 minHeight">
        <h3 className={`text-brownOrange text-4xl font-bold mt-12 mb-6 ${selectedLanguage === "ar" && "text-right"}`}>{t("articles")}</h3>
        {loading ? (
          <p className="text-white text-xl font-semibold">Loading</p>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {articles.map((article) => (
              <div key={article._id} className="flex flex-col gap-4 bg-white p-2 rounded-lg mb-4">
                <Link to={`/article/${article._id}`} >
                  <div className="w-full h-[175px] mx-auto">
                    <img src={article.image} alt="" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-brownOrange text-2xl text-center font-bold">{article.title}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlesPage;
