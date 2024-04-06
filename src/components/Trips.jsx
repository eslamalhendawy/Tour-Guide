import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getData } from "../Services/APICalls";
import { useTranslation } from "react-i18next";

const Trips = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  useEffect(() => {
    document.title = "Egytravler | Trips";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await getData("trips");
      setTrips(response.data.trips);
      setLoading(false);
    };
    fetchTrips();
  }, []);
  return (
    <div className="bg-postage minHeight">
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <h1 className={`text-brownOrange font-medium text-4xl mb-6 ${selectedLanguage === "ar" && "text-right"}`}>{t("trips")}</h1>
        {loading ? (
          <p className="text-white text-center pt-24 text-xl font-bold">Loading...</p>
        ) : (
          trips.map((trip, index) => (
            <div key={index} className="flex flex-col md:flex-row  md:items-stretch">
              <div className="basis-1/3 md:rounded-l-xl overflow-hidden">
                <img className="md:h-full" src={trip.image} alt="" />
              </div>
              <div className="bg-white grow md:rounded-r-xl flex flex-col justify-between pl-8 pr-3 py-4">
                <div>
                  <h4 className="text-brownOrange font-medium text-xl lg:text-3xl mb-4">{trip.name}</h4>
                  <p className="font-medium text-lg lg:text-xl mb-6">{trip.description}</p>
                </div>
                <Link to={`/trip/${trip._id}`} className="flex items-center w-fit gap-4 bg-brownOrange hover:bg-postage duration-300 ml-auto text-white px-6 py-2 rounded-lg">
                  <span>{t("moreDetails")}</span>
                  <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Trips;
