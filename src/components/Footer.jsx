import { useTranslation } from "react-i18next";
import logo from "/assets/6 1.png";

function Footer() {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  return (
    <div className="bg-brownOrange">
      <div className={`container mx-auto py-8 px-3 text-white flex flex-col gap-6 justify-between ${selectedLanguage === "ar" ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <div className={`flex flex-col ${selectedLanguage === "ar" ? "items-end" : "items-start"}`}>
          <div className="max-w-[150px] mb-6 mx-auto md:mx-0">
            <img src={logo} alt="" />
          </div>
          <p className="mb-6 text-lg text-center">{t("youcandownload")}</p>
          <button className={`flex gap-2 items-center text-white bg-[#212529] hover:bg-black duration-300 p-2 rounded-lg ${selectedLanguage === "ar" && "flex-row-reverse"}`}>
              <i className="fa-brands fa-google-play text-lg lg:text-2xl"></i>
              <div className="uppercase text-left">
                <p className={`text-[9px] lg:text-[10px] ${selectedLanguage === "ar" && "text-right"}`}>{t("getegytravleron")}</p>
                <p className={`text-sm lg:text-base font-bold ${selectedLanguage === "ar" && "text-right"}`}>{t("googleplay")}</p>
              </div>
            </button>
        </div>
        <div className={`flex flex-col ${selectedLanguage === "ar" ? "items-end" : "items-start"}`}>
          <ul className={`mb-6 space-y-2 text-center md:text-left ${selectedLanguage === "ar" ? "md:text-right" : "md:text-left"}`}>
            <li>{t("whyourapp")}</li>
            <li>{t("knowhistory")}</li>
            <li>{t("trips")}</li>
            <li>{t("sinuhe")}</li>
            <li>{t("knowledgecheck")}</li>
          </ul>
          <ul className="flex items-center justify-center gap-3">
            <li>{t("contactus")}</li>
            <li>{t("terms&conditions")}</li>
            <li>{t("aboutus")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
