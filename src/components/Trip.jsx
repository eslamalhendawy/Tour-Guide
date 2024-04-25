import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../Services/APICalls";

const Trip = () => {
  const [trip, setTrip] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchTrip = async () => {
      const response = await getData(`trips/${id}`);
      setTrip(response.data.trip);
      setLoading(false);
    };
    fetchTrip();
  }, []);

  return (
    <section className="bg-postage minHeight py-6 px-4">
      <div className="container mx-auto bg-white">
        {loading ? (
          <p className="text-center p-24 text-xl font-bold">Loading...</p>
        ) : (
          <div className="flex flex-col">
            <div className="h-[350px] md:h-[650px]">
              <img className="w-full h-full" src={trip.image} alt="" />
            </div>
            <div className="flex flex-col p-6">
              <div>
                <h4 className="text-brownOrange font-medium text-xl lg:text-3xl mb-4">{trip.name}</h4>
                <p className="font-medium text-lg lg:text-xl mb-6">{trip.description}</p>
              </div>
              <div>
                <h4 className="text-brownOrange font-medium text-xl lg:text-2xl mb-4">Trip Locations</h4>
                <div className="bg-[#032730] p-6 rounded-xl">
                  {trip.places.map((place, index) => (
                    <div key={index} className="flex items-center gap-4 mb-4 text-white border border-white rounded-lg overflow-hidden">
                      <img className="size-20" src={place.image} alt="" />
                      <div>
                        <h5 className="font-bold text-lg lg:text-2xl mb-2">{place.name}</h5>
                        <p className="font-medium text-sm lg:text-lg">{place.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Trip;
