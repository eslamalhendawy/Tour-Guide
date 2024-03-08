import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getData } from "../Services/APICalls";
import EventSlider from "./EventSlider";

function TravelSlider() {
  const [fetching, setFetching] = useState(true);
  const [events, setEvents] = useState([]);
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  useEffect(() => {
    const fetchData = async () => {
      const temp = await getData("event");
      setEvents(temp.data.events);
      setFetching(false);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-postage pt-12 pb-6 px-3">
      <div className="container mx-auto bg-white p-6 rounded-lg">
        <h3 className={`text-brownOrange text-2xl md:text-3xl text-center font-bold mb-6 ${selectedLanguage === "ar" ? "md:text-right" : "md:text-left"}`}>{t("nearevents")}</h3>
        {fetching ? <p>Loading...</p> : <EventSlider data={events} />}
      </div>
    </div>
  );
}

export default TravelSlider;
