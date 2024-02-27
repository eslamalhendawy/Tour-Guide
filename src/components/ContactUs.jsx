import { useEffect } from "react";
import { useTranslation } from "react-i18next";
function ContactUs() {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  useEffect(() => {
    document.title = "Egytravler | Contact Us";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-postage">
      <div className="container mx-auto py-3 px-3">
        <h1 className="text-center text-white font-bold text-5xl mt-24 mb-12">{t("contactus")}</h1>
        <div className="bg-white p-6 rounded-xl max-w-3xl mx-auto mb-12">
          <div className={`md:flex gap-6 mb-6 ${selectedLanguage === "ar" && "flex-row-reverse"}`}>
            <div className="flex flex-col basis-1/2">
              <span className={`text-brownOrange block mb-2 font-semibold ${selectedLanguage === "ar" && "text-right"}`}>{t("fullname")}</span>
              <input className={`bg-[#D9D9D9] px-2 py-2 rounded-lg focus:outline-none placeholder:text-[#3333338C] ${selectedLanguage === "ar" && "text-right"}`} type="text" placeholder={t("fullname")} />
            </div>
            <div className="flex flex-col basis-1/2">
              <span className={`text-brownOrange block mb-2 font-semibold ${selectedLanguage === "ar" && "text-right"}`}>{t("email")}</span>
              <input className={`bg-[#D9D9D9] px-2 py-2 rounded-lg focus:outline-none placeholder:text-[#3333338C] ${selectedLanguage === "ar" && "text-right"}`} type="text" placeholder={t("email")} />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <span className={`text-brownOrange block mb-2 font-semibold ${selectedLanguage === "ar" && "text-right"}`}>{t("subject")}</span>
            <input className={`bg-[#D9D9D9] px-2 py-2 rounded-lg focus:outline-none placeholder:text-[#3333338C] ${selectedLanguage === "ar" && "text-right"}`} type="text" placeholder={t("subject")} />
          </div>
          <div className="flex flex-col">
            <span className={`text-brownOrange block mb-2 font-semibold ${selectedLanguage === "ar" && "text-right"}`}>{t("message")}</span>
            <textarea className={`bg-[#D9D9D9] px-2 py-2 rounded-lg focus:outline-none placeholder:text-[#3333338C] resize-none ${selectedLanguage === "ar" && "text-right"}`} placeholder={t("message")} name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button className="bg-brownOrange hover:bg-postage duration-300 py-2 px-12 rounded-lg text-white">{t("submit")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
