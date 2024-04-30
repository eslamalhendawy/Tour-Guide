import { useEffect, useState } from "react";
import { useAppContext } from "../Context/AppContext";
import { useParams } from "react-router-dom";
import { getData, updateData, deleteData } from "../Services/APICalls";
import Map from "react-map-gl";

import PlaceSlider from "./PlaceSlider";
import axios from "axios";

const Place = () => {
  const { userData, setUserData } = useAppContext();
  const { id } = useParams();
  const [fetching, setFetching] = useState(true);
  const [fetching2, setFetching2] = useState(true);
  const [place, setPlace] = useState();
  const [recommendations, setRecommendations] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [inTrip, setInTrip] = useState(false);
  const userToken = localStorage.getItem("userToken");
  const apiToken = "pk.eyJ1IjoieW91c3NlZnNob3JiYWd5IiwiYSI6ImNsaXRlaWY5YzFsc20za28xc3I3bnpxdWgifQ.in7RNCLdcpC8uWOh5hodGw";
  useEffect(() => {
    document.title = `Egytravler | ${fetching ? "Loading..." : place.name}`;
    window.scrollTo(0, 0);
  }, [fetching]);

  useEffect(() => {
    setFetching(true);
    const fetchData = async () => {
      const temp = await getData(`place/${id}`, userToken);
      console.log(temp);
      setPlace(temp.data.place);
      setIsFavorite(temp.data.place.isFavorite);
      setInTrip(temp.data.place.isTrip);
      setFetching(false);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      let temp = await axios.get(`https://recomend.codepeak.live/recommend/${place.id}`);
      setRecommendations(temp.data.recommendations);
      setFetching2(false);
    };
    if (!fetching) {
      fetchData();
    }
  }, [place]);

  const toggleFavourite = async () => {
    if (isFavorite) {
      let temp = await deleteData(`place/favorite/${id}`, userToken);
      setUserData({ ...userData, favoritePlaces: temp.data.data.user.favoritePlaces });
      setIsFavorite(false);
    } else {
      let temp = await updateData(`place/favorite/${id}`, {}, userToken);
      setUserData({ ...userData, favoritePlaces: temp.data.data.user.favoritePlaces });
      setIsFavorite(true);
    }
  };

  const toggleTrip = async () => {
    if (inTrip) {
      let temp = await deleteData(`place/usertips/${id}`, userToken);
      setUserData({ ...userData, userTrip: temp.data.data.user.userTrips });
      setInTrip(false);
    } else {
      let temp = await updateData(`place/usertips/${id}`, {}, userToken);
      setUserData({ ...userData, userTrip: temp.data.data.user.userTrips });
      setInTrip(true);
    }
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        window.open(`https://www.google.com/maps/dir/${lat},${long}/${place.latitude},${place.longitude}`, "_blank");
      });
    }
  };

  return (
    <section className="bg-postage minHeight p-4">
      {fetching ? (
        <div className="container mx-auto flex items-stretch bg-white rounded-lg p-6 md:p-12 minHeight">Loading...</div>
      ) : (
        <>
          <div className="container mx-auto overflow-hidden">
            <div className="bg-white h-[350px] md:h-[650px]">
              <img className="w-full h-full" src={place.image} alt="" />
            </div>
          </div>
          <div className="container mx-auto bg-white p-6 md:p-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-6">
              <div className="mb-3 md:mb-0">
                <div className="flex items-center gap-4 mb-3">
                  <div>
                    <h3 className="text-brownOrange text-xl md:text-3xl capitalize">{place.name}</h3>
                    {/* <p>Rating: {place.rating} / 5</p> */}
                  </div>
                  {userData.loggedIn && (
                    <>
                      <i onClick={toggleFavourite} className={`fa-heart text-2xl text-[#fb001a] cursor-pointer ${isFavorite ? "fa-solid" : "fa-regular"}`}></i> <i onClick={toggleTrip} className={`fa-bookmark text-2xl text-postage cursor-pointer ${inTrip ? "fa-solid" : "fa-regular"}`}></i>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <i className="fa-solid fa-location-dot text-brownOrange"></i>
                  <span>{place.location}</span>
                </div>
              </div>
              <button onClick={handleLocation} className="bg-brownOrange hover:bg-postage duration-300 text-white py-2 px-8 rounded-lg">
                View Directions
              </button>
            </div>
            <p className="mb-6">{place.description}</p>
            <div className="flex flex-col lg:flex-row gap-6 mb-6">
              {place.highlights.length > 0 && (
                <div className="lg:basis-1/2">
                  <h3 className="capitalize text-brownOrange mb-6 text-xl md:text2xl font-bold">highlights</h3>
                  <ul className="list-disc">
                    {place.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="lg:basis-1/2">
                <h3 className="capitalize text-brownOrange mb-2 text-xl md:text2xl font-bold">Maps</h3>
                <div className="flex items-center gap-2 text-sm mb-4">
                  <i className="fa-solid fa-location-dot text-brownOrange"></i>
                  <span>Location of {place.name}</span>
                </div>
                <div id="map" className="overflow-hidden">
                  <Map
                    mapboxAccessToken={apiToken}
                    mapLib={import("mapbox-gl")}
                    initialViewState={{
                      longitude: place.longitude,
                      latitude: place.latitude,
                      zoom: 13,
                    }}
                    style={{ width: "100%", height: "300px" }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                  />
                </div>
              </div>
            </div>
            <div>
              {fetching2 ? (
                <p>Loading...</p>
              ) : (
                <>
                  <h3 className="capitalize text-brownOrange mb-6 text-xl md:text2xl font-bold">Recommendations</h3>
                  {recommendations.length > 0 ? <PlaceSlider data={recommendations} /> : <p>No recommendations available</p>}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Place;
