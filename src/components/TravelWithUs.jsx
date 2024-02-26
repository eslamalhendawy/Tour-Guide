import { useTranslation } from "react-i18next";
function TravelWithUs() {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  const list = [
    {
      img: "/assets/1f481-1f3fd.svg.png",
      text: "Cultural Exploration: EgyTraveler unlocks the richness of Egypt's culture, offering a seamless journey through historic wonders and modern marvels.",
    },
    {
      img: "/assets/1f556.svg.png",
      text: "Cultural Exploration: EgyTraveler unlocks the richness of Egypt's culture, offering a seamless journey through historic wonders and modern marvels.",
    },
    {
      img: "/assets/1f4b2.svg.png",
      text: "Cultural Exploration: EgyTraveler unlocks the richness of Egypt's culture, offering a seamless journey through historic wonders and modern marvels.",
    },
  ];

  return (
    <div className="bg-postage pt-6 pb-20 px-3">
      <div className="container mx-auto bg-white p-6 rounded-lg">
        <h3 className={`text-brownOrange font-semibold text-xl md:text-2xl xl:text-3xl mb-3 uppercase ${selectedLanguage === "ar" && "text-right"}`}>{t("whytravelwithus")}</h3>
        <div className={`flex flex-col ${selectedLanguage === "ar" ? "items-end" : "items-start"}`}>
          <div className="border-t-4 border-dotted border-brownOrange w-[30%] mb-3"></div>
          <div className="border-t-4 border-dotted border-brownOrange w-[30%] mb-6"></div>
        </div>
        <h4 className={`font-bold text-xl mb-8 ${selectedLanguage === "ar" && "text-right"}`}>{t("ourreason")}</h4>
        <div className="lg:flex gap-6 mb-12">
          {list.map((item, index) => {
            return (
              <div key={index} className="flex sm:items-center gap-4 mb-6 border border-[#151209] p-6">
                <img className="size-[30px] sm:size-[50px]" src={item.img} alt="" />
                <p className="text-base">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TravelWithUs;
