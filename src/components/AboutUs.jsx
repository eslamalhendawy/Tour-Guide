import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  useEffect(() => {
    document.title = "Egytravler | About Us";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-postage">
      <div className="minHeight container mx-auto py-3 px-3">
      <h1 className="text-center text-white font-bold text-5xl mt-24 mb-12">{t("aboutus")}</h1>
      <div className="md:w-[70%] lg:w-[50%] mx-auto mb-8">
        <span className={`text-white font-bold text-xl md:text-2xl block mb-2 ${selectedLanguage === "ar" && "text-right"}`}>{t("whoarewe")}</span>
        <p className={`text-white md:text-lg ${selectedLanguage === "ar" && "text-right"}`}>{t("whoarewetext")}</p>
      </div>
      <div className="md:w-[70%] lg:w-[50%] mx-auto mb-24">
        <span className={`text-white font-bold text-xl md:text-2xl block mb-2 ${selectedLanguage === "ar" && "text-right"}`}>{t("ourpurpose")}</span>
        <p className={`text-white md:text-lg ${selectedLanguage === "ar" && "text-right"}`}>{t("ourpurposetext")}</p>
      </div>
    </div>
    </div>
  );
}

export default AboutUs;
