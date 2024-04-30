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
  const [categories, setCategories] = useState([
    {
      name: "All",
      id: "",
    },
    {
      name: "Ecotourism",
      id: "65f504187bd323b0249c51e0",
    },
    {
      name: "Cultural",
      id: "65f5041c7bd323b0249c51e2",
    },
    {
      name: "Leisure",
      id: "65f504237bd323b0249c51e4",
    },
    {
      name: "Medical",
      id: "65f504277bd323b0249c51e6",
    },
    {
      name: "Sports",
      id: "65f5042a7bd323b0249c51e8",
    },
    {
      name: "Religious",
      id: "6619a09681b958670554951b",
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    document.title = "Egytravler | Search";
    window.scrollTo(0, 0);
  }, []);

  const searchHandler = async () => {   
    if (query.trim() === "") {
      toast.error("Please enter a valid search query");
      return;
    }
    setEmpty(false);
    let temp = await getData(`place/search?search=${query}&category=${selectedCategory}`);
    console.log(temp);
    if (temp.status === "success") {
      setFetching(false);
      setResults(temp.data.places);
    }
  };

  return (
    <div className="bg-postage">
      <div className="container mx-auto py-3 px-3 minHeight">
        <h3 className={`text-brownOrange text-4xl font-bold mt-12 mb-6 ${selectedLanguage === "ar" && "text-right"}`}>{t("search")}</h3>
        <div className={`flex lg:w-[60%]  items-center mb-12 ${selectedLanguage === "ar" && "flex-row-reverse ml-auto"}`}>
          <input type="text" className={`w-[200px] sm:w-auto sm:grow h-[50px]  focus:outline-none px-1 text-lg ${selectedLanguage === "ar" ? "rounded-r-lg text-right" : "rounded-l-lg"}`} placeholder={`${selectedLanguage === "ar" ? "ابحث هنا" : "Search here..."}`} onChange={(e) => setQuery(e.target.value)} />
          <select className="h-[50px] w-[50px] lg:w-[100px] outline-none" onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map((category, index) => (
              <option key={index} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <button onClick={searchHandler} className={`h-[50px] bg-brownOrange flex justify-center items-center px-4 cursor-pointer hover:bg-[#ad733b] duration-200 ${selectedLanguage === "ar" ? "rounded-l-lg" : "rounded-r-lg"}`}>
            <i className="fa-solid fa-magnifying-glass text-white"></i>
          </button>
        </div>
        {empty ? null : fetching ? (
          <div className="bg-white rounded-lg p-4 w-[80%]">Loading...</div>
        ) : (
          <>
            <div className={`bg-white rounded-lg p-4 mb-6 lg:w-[80%] ${selectedLanguage === "ar" && "ml-auto"}`}>{results.length} Result(s) Found</div>
            <div className={`mb-12 lg:w-[80%] ${selectedLanguage === "ar" && "ml-auto"}`}>
              {results.length > 0 &&
                results.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center md:items-stretch rounded-lg mb-8 bg-white">
                    <div className="md:h-[210px] h-[180px] w-full md:w-[350px]">
                    <img src={item.image} className="w-full h-full rounded-t-lg md:rounded-t-none md:rounded-bl-lg md:rounded-tl-lg" alt="" />
                    </div>
                    <div className=" grow md:rounded-r-lg py-2 px-2 md:px-8 gap-6 flex flex-col items-center md:items-start justify-center">
                      <h3 className="text-brownOrange text-2xl font-bold text-center md:text-left">{item.name}</h3>
                      {/* <p>Rating: {item.rating} / 5</p> */}
                      <Link to={`/place/${item._id}`} className="flex items-center w-fit gap-4 bg-brownOrange hover:bg-postage duration-300  text-white px-6 py-2 rounded-lg">
                        <span>{t("moreDetails")}</span>
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
