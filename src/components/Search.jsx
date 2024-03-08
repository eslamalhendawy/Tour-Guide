import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getData } from "../Services/APICalls";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Search() {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  const [results, setResults] = useState([]);
  const [empty, setEmpty] = useState(true);
  const [query, setQuery] = useState("");
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    document.title = "Egytravler | Search";
    window.scrollTo(0, 0);
  }, []);

  const searchHandler = async () => {
    setEmpty(false);
    if (query.trim() === "") {
      toast.error("Please enter a valid search query");
      return;
    }
    let temp = await getData(`place/search?search=${query}`);
    if (temp.status === "success") {
      setFetching(false);
      setResults(temp.data.places);
    }
  };

  return (
    <div className="bg-postage">
      <div className="container mx-auto py-3 px-3 minHeight">
        <h3 className={`text-brownOrange text-4xl font-bold mt-20 mb-6 ${selectedLanguage === "ar" && "text-right"}`}>{t("search")}</h3>
        <div className={`flex items-center mb-12 ${selectedLanguage === "ar" && "flex-row-reverse"}`}>
          <input type="text" className={`grow h-[50px]  focus:outline-none px-2 text-lg ${selectedLanguage === "ar" ? "rounded-r-lg text-right" : "rounded-l-lg"}`} placeholder={`${selectedLanguage === "ar" ? "ابحث هنا" : "Search here..."}`} onChange={(e) => setQuery(e.target.value)} />
          <button onClick={searchHandler} className={`h-[50px] bg-brownOrange flex justify-center items-center px-4  cursor-pointer hover:bg-[#ad733b] duration-200 ${selectedLanguage === "ar" ? "rounded-l-lg" : "rounded-r-lg"}`}>
            <i className="fa-solid fa-magnifying-glass text-white"></i>
          </button>
        </div>
        {empty ? null : fetching ? (
          <div className="bg-white rounded-lg p-4">Loading...</div>
        ) : (
          <>
            <div className="bg-white rounded-lg p-4 mb-6">{results.length} Result(s) Found</div>
            <div className="mb-12">
              {results.length > 0 &&
                results.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center md:items-stretch rounded-lg mb-8 bg-white">
                    <img src={item.image} className="md:max-w-[350px] rounded-t-lg md:rounded-t-none md:rounded-bl-lg md:rounded-tl-lg" alt="" />
                    <div className=" grow md:rounded-r-lg py-2 px-2 md:px-8 gap-6 flex flex-col items-center md:items-start justify-center">
                      <h3 className="text-brownOrange text-2xl font-bold text-center md:text-left">{item.name}</h3>
                      <Link to={`/place/${item._id}`} className="flex items-center w-fit gap-4 bg-brownOrange hover:bg-postage duration-300  text-white px-6 py-2 rounded-lg">
                        <span>More Details</span>
                        <i className="fa-solid fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Search;
