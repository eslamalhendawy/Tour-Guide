import { useTranslation } from "react-i18next";
import heroImage from "/assets/kisspng-nefertiti-bust-wrinkle-rhytidectomy-face-nefertiti-5b308d4010a1a4 2.png";

function Hero() {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  return (
    <div className="bg-postage">
      <div className={`container mx-auto py-3 px-3 md:flex items-center ${selectedLanguage === "ar" && "flex-row-reverse"}`}>
        <div className="basis-2/3">
          <h1 className={`text-brownOrange font-bold text-3xl lg:text-5xl mt-6 mb-6 lg:mb-12 text-center ${selectedLanguage === "ar" ? "md:text-right" : "md:text-left"}`}>{t("heroheader")}</h1>
          <p className={`text-white text-lg text-center mb-6 lg:mb-12 ${selectedLanguage === "ar" ? "md:text-right" : "md:text-left"}`}>{t("herosubheader")}</p>
          <p className={`text-center  text-white mb-3 ${selectedLanguage === "ar" ? "md:text-right" : "md:text-left"}`}>
          {t("forabetterexperience")} <span className="text-brownOrange">{t("download")}</span> {t("ourapp")}
          </p>
          <div className={`flex gap-3 items-center justify-center md:justify-start ${selectedLanguage === "ar" ? "md:justify-end" : "md:justify-start"}`}>
            <button className={`flex gap-2 items-center text-white bg-[#212529] hover:bg-black duration-300 p-2 rounded-lg ${selectedLanguage === "ar" && "flex-row-reverse"}`}>
              <i className="fa-brands fa-google-play text-lg lg:text-2xl"></i>
              <div className="uppercase text-left">
                <p className={`text-[9px] lg:text-[10px] ${selectedLanguage === "ar" && "text-right"}`}>{t("getegytravleron")}</p>
                <p className={`text-sm lg:text-base font-bold ${selectedLanguage === "ar" && "text-right"}`}>{t("googleplay")}</p>
              </div>
            </button>
            {/* <button className="flex gap-2 items-center text-white bg-[#212529] hover:bg-black duration-300 p-2 rounded-lg">
              <i className="fa-brands fa-apple text-lg lg:text-2xl"></i>
              <div className="text-xs uppercase text-left">
                <p className="text-[9px] lg:text-[10px]">download on the</p>
                <p className="text-sm lg:text-base font-bold">app store</p>
              </div>
            </button> */}
          </div>
        </div>
        <div className="relative basis-1/3">
          <div className="circle-element size-[100px] lg:size-[130px] rounded-full absolute top-5 lg:top-10 right-0 md:right-10 2xl:right-[100px]"></div>
          <div className="backgound-effect size-[250px] rounded-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"></div>
          <img src={heroImage} className="relative z-10 md:max-w-[400px]" alt="" />
          <div className="circle-element size-[150px] lg:size-[200px] rounded-full absolute bottom-5 lg:bottom-0 left-0"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
