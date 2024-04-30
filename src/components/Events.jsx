import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../Services/APICalls";
import Map from "react-map-gl";

const Events = () => {
  const { id } = useParams();
  const [fetching, setFetching] = useState(true);
  const [event, setEvent] = useState();
  const apiToken = "pk.eyJ1IjoieW91c3NlZnNob3JiYWd5IiwiYSI6ImNsaXRlaWY5YzFsc20za28xc3I3bnpxdWgifQ.in7RNCLdcpC8uWOh5hodGw";
  useEffect(() => {
    document.title = `Egytravler | ${fetching ? "Loading..." : event.name}`;
    window.scrollTo(0, 0);
  }, [fetching]);

  useEffect(() => {
    const fetchData = async () => {
      const temp = await getData(`event/${id}`);
      console.log(temp);
      setEvent(temp.data.event);
      setFetching(false);
    };
    fetchData();
  }, []);

  const handleLocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        console.log(lat, long);
        window.location.href = `https://www.google.com/maps/dir/${lat},${long}/${event.latitude},${event.longitude}`;
      })
    }
  }

  return (
    <section className="bg-postage minHeight p-4">
      {fetching ? (
        <div className="container mx-auto flex items-stretch bg-white rounded-lg p-6 md:p-12 minHeight">Loading...</div>
      ) : (
        <>
          <div className="container mx-auto overflow-hidden">
            <div className="bg-white h-[350px] md:h-[650px]">
              <img className="h-full w-full" src={event.images[0]} alt="" />
            </div>
          </div>
          <div className="container mx-auto bg-white p-6 md:p-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-6">
              <div className="mb-3 md:mb-0">
                <h3 className="text-brownOrange text-xl md:text-3xl mb-3 capitalize">{event.name}</h3>
                <div className="flex items-center gap-2 text-sm">
                  <i className="fa-solid fa-location-dot text-brownOrange"></i>
                  <span>{event.location}</span>
                </div>
              </div>
              <button onClick={handleLocation} className="bg-brownOrange hover:bg-postage duration-300 text-white py-2 px-8 rounded-lg">View Directions</button>
            </div>
            <p className="mb-6">{event.description}</p>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:basis-1/2">
                <h3 className="capitalize text-brownOrange mb-6 text-xl md:text2xl font-bold">highlights Of {event.name}</h3>
                <ul className="list-disc">
                  {event.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="lg:basis-1/2">
                <h3 className="capitalize text-brownOrange mb-2 text-xl md:text2xl font-bold">Maps</h3>
                <div className="flex items-center gap-2 text-sm mb-4">
                  <i className="fa-solid fa-location-dot text-brownOrange"></i>
                  <span>Location of {event.name}</span>
                </div>
                <div id="map" className="overflow-hidden">
                  <Map
                    mapboxAccessToken={apiToken}
                    mapLib={import("mapbox-gl")}
                    initialViewState={{
                      longitude: event.longitude,
                      latitude: event.latitude,
                      zoom: 13,
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

export default Events;
