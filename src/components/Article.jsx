import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData, updateData, deleteData } from "../Services/APICalls";
import { useAppContext } from "../Context/AppContext";

const Article = () => {
  const { userData, setUserData } = useAppContext();
  const [article, setArticle] = useState();
  const userToken = localStorage.getItem("userToken");
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    document.title = `Egytravler | ${loading ? "Loading..." : article.title}`;
    window.scrollTo(0, 0);
  }, [loading]);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await getData(`articles/${id}`, userToken);
      setArticle(response.data.article);
      setIsFavorite(response.data.article.isFavorite);
      setLoading(false);
    };
    fetchArticle();
  }, []);

  const toggleFavourite = async () => {
    if (isFavorite) {
      let temp = await deleteData(`articles/favorite/${id}`, userToken);
      setUserData({ ...userData, favoriteArticles: temp.data.data.user.favoriteArticles });
      setIsFavorite(false);
    } else {
      let temp = await updateData(`articles/favorite/${id}`, {}, userToken);
      setUserData({ ...userData, favoriteArticles: temp.data.data.user.favoriteArticles });
      setIsFavorite(true);
    }
  };

  return (
    <div className="bg-postage minHeight">
      {loading ? (
        <p className="text-white text-center pt-24 text-xl font-bold">Loading...</p>
      ) : (
        <>
          <div className="container mx-auto h-[350px] md:h-[650px]">
            <img className="w-full h-full" src={article.image} alt="" />
          </div>
          <div className="container mx-auto px-4 pt-8 pb-20 text-white">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="font-bold text-xl sm:text-3xl">{article.title}</h3>
              {userData.loggedIn && <i onClick={toggleFavourite} className={`fa-heart text-2xl text-[#fb001a] cursor-pointer ${isFavorite ? "fa-solid" : "fa-regular"}`}></i>}
            </div>
            <p className="text-brownOrange font-bold mb-6">{article.hint}</p>
            <span className="font-[400]">{article.when}</span>
            <hr className="bg-white w-[40%] lg:w-[15%] mt-4 mb-6" />
            {article.decription.map((item, index) => (
              <p className="md:text-[18px] mb-8" key={index}>
                {item}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// ${isFavorite ? "fa-solid" : "fa-regular"}
// onClick={toggleFavourite}

export default Article;
