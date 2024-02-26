import { useTranslation } from "react-i18next";
import phone from "/assets/Rectangle (2).png";

function PhoneApp() {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  return (
    <div className="bg-white">
      <div className={`container mx-auto py-20 px-3 flex flex-col  gap-6 items-center ${selectedLanguage === "ar" ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <div className="basis-2/3">
          <h3 className={`text-postage font-bold text-3xl text-nowrap mb-6 ${selectedLanguage === "ar" && "text-right"}`}>{t("whyourapp")}</h3>
          <p className={`text-postage text-lg mb-6 xl:mb-20 ${selectedLanguage === "ar" && "text-right"}`}>{t("phonetext")}</p>
          <div className={`flex justify-center ${selectedLanguage === "ar" ? "md:justify-end" : "md:justify-start"}`}>
            <button className="font-bold text-lg bg-brownOrange hover:bg-postage duration-300 text-white py-4 px-12 rounded-xl">{t("donloadnow")}</button>
          </div>
        </div>
        <div className="basis-1/3 flex justify-center md:justify-end">
          <img className="max-w-[200px] xl:max-w-[300px]" src={phone} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PhoneApp;
