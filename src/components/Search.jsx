import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Search() {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  const data = [
    {
      heading: "Mohamed Ali Mosque",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, mi in venenatis rutrum.",
      image: "/assets/9f03502a-8451-4a0f-9bb7-740a7ab4e9ba 1.png",
    },
    {
      heading: "Mohamed Ali Mosque",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, mi in venenatis rutrum.",
      image: "/assets/9f03502a-8451-4a0f-9bb7-740a7ab4e9ba 1.png",
    },
    {
      heading: "Mohamed Ali Mosque",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, mi in venenatis rutrum.",
      image: "/assets/9f03502a-8451-4a0f-9bb7-740a7ab4e9ba 1.png",
    },
    {
      heading: "Mohamed Ali Mosque",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, mi in venenatis rutrum.",
      image: "/assets/9f03502a-8451-4a0f-9bb7-740a7ab4e9ba 1.png",
    },
  ];

  useEffect(() => {
    document.title = "Egytravler | Search";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-postage">
      <div className="container mx-auto py-3 px-3 minHeight">
        <h3 className={`text-brownOrange text-4xl font-bold mt-20 mb-6 ${selectedLanguage === "ar" && "text-right"}`}>{t("search")}</h3>
        <div className="flex items-center mb-12">
          <input type="text" className="grow h-[40px] rounded-l-lg focus:outline-none px-1" />
          <div className="h-[40px] bg-brownOrange flex justify-center items-center px-4 rounded-r-lg">
            <i className="fa-solid fa-magnifying-glass text-white"></i>
          </div>
        </div>
        <div className="mb-12">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-stretch rounded-lg mb-8 bg-white">
              <img src={item.image} className="md:max-w-[350px]" alt="" />
              <div className=" grow md:rounded-r-lg p-2 md:flex flex-col justify-center">
                <h3 className="text-brownOrange text-2xl font-bold mb-3 text-center md:text-left">{item.heading}</h3>
                <p className="text-center md:text-left mb-4 lg:w-[60%] 2xl:w-[35%]">{item.description}</p>
                <div className="flex justify-end">
                  <button className="flex items-center gap-4 bg-brownOrange hover:bg-postage duration-300  text-white px-6 py-2 rounded-lg">
                    <span>More Details</span>
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
