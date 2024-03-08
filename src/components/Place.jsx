import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../Services/APICalls";
import Map from "react-map-gl";

const Place = () => {
  const { id } = useParams();
  const [fetching, setFetching] = useState(true);
  const [place, setPlace] = useState();
  const apiToken = "pk.eyJ1IjoieW91c3NlZnNob3JiYWd5IiwiYSI6ImNsaXRlaWY5YzFsc20za28xc3I3bnpxdWgifQ.in7RNCLdcpC8uWOh5hodGw";
  useEffect(() => {
    document.title = `Egytravler | ${fetching ? "Loading..." : place.name}`;
    window.scrollTo(0, 0);
  }, [fetching]);

  useEffect(() => {
    const fetchData = async () => {
      const temp = await getData(`place/${id}`);
      setPlace(temp.data.place);
      setFetching(false);
    };
    fetchData();
  }, []);

  const highlights = ["Entertainment - Spotlight unique, can't-miss performances, activities, games that will wow and engage attendees.", "Networking - Note opportunities to make valuable connections and strengthen relationships.", "Education - Promote insightful talks, workshops, etc. from experts that attendees will gain knowledge from.", "Entertainment - Spotlight unique, can't-miss performances, activities, games that will wow and engage attendees.", "Networking - Note opportunities to make valuable connections and strengthen relationships.", "Education - Promote insightful talks, workshops, etc. from experts that attendees will gain knowledge from.", "Entertainment - Spotlight unique, can't-miss performances, activities, games that will wow and engage attendees.", "Networking - Note opportunities to make valuable connections and strengthen relationships.", "Education - Promote insightful talks, workshops, etc. from experts that attendees will gain knowledge from."];
  return (
    <section className="bg-postage minHeight p-4">
      {fetching ? (
        <div className="container mx-auto flex items-stretch bg-white rounded-lg p-6 md:p-12 minHeight">Loading...</div>
      ) : (
        <>
          <div className="container mx-auto overflow-hidden">
            <div className="bg-white rounded-t-xl">
              <img className="h-full w-full rounded-t-xl" src={place.image} alt="" />
            </div>
          </div>
          <div className="container mx-auto bg-white p-6 md:p-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-6">
              <div className="mb-3 md:mb-0">
                <h3 className="text-brownOrange text-xl md:text-3xl mb-3 capitalize">{place.name}</h3>
                <div className="flex items-center gap-2 text-sm">
                  <i className="fa-solid fa-location-dot text-brownOrange"></i>
                  <span>Location of the events</span>
                </div>
              </div>
              <a href="#map" className="bg-brownOrange hover:bg-postage duration-300 text-white py-2 px-8 rounded-lg">View Map</a>
            </div>
            <p className="mb-6">{place.description}</p>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:basis-1/2">
                <h3 className="capitalize text-brownOrange mb-6 text-xl md:text2xl font-bold">highlights Of Pyramids</h3>
                <ul className="list-disc">
                  {highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="lg:basis-1/2">
                <h3 className="capitalize text-brownOrange mb-2 text-xl md:text2xl font-bold">Maps</h3>
                <div className="flex items-center gap-2 text-sm mb-4">
                  <i className="fa-solid fa-location-dot text-brownOrange"></i>
                  <span>Location of Pyramids</span>
                </div>
                <div id="map" className="overflow-hidden">
                  <Map
                    mapboxAccessToken={apiToken}
                    mapLib={import("mapbox-gl")}
                    initialViewState={{
                      longitude: place.longitude,
                      latitude: place.latitude,
                      zoom: 10,
                    }}
                    style={{ width: "100%", height: "300px" }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Place;
