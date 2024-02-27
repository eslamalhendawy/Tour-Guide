import { useEffect } from "react";
import map from "/assets/map.png";

const Place = () => {
  useEffect(() => {
    document.title = "Egytravler | Place";
    window.scrollTo(0, 0);
  }, []);
  const paragraphs = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare erat ac tempor consectetur. Donec dictum lectus et velit pretium, lacinia pulvinar nisl sollicitudin. Curabitur finibus mi mi, et gravida libero blandit nec. Duis dignissim massa a diam imperdiet, ut scelerisque est vestibulum. Donec accumsan leo eu massa ultrices blandit. Aliquam fringilla augue et massa efficitur congue eu et justo. Vestibulum a ipsum tincidunt, sollicitudin tellus eu, varius eros. Proin aliquam tortor dolor, in vulputate tellus interdum ac. Nunc malesuada tellus sem, at tincidunt sapien porta et. Mauris maximus nisi est, sed fringilla erat hendrerit quis. Cras ullamcorper quam", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare erat ac tempor consectetur. Donec dictum lectus et velit pretium, lacinia pulvinar nisl sollicitudin. Curabitur finibus mi mi, et gravida libero blandit nec. Duis dignissim massa a diam imperdiet, ut scelerisque est vestibulum. Donec accumsan leo eu massa ultrices blandit. Aliquam fringilla augue et massa efficitur congue eu et justo. Vestibulum a ipsum tincidunt, sollicitudin tellus eu, varius eros. Proin aliquam tortor dolor, in vulputate tellus interdum ac. Nunc malesuada tellus sem, at tincidunt sapien porta et. Mauris maximus nisi est, sed fringilla erat hendrerit quis. Cras ullamcorper quam", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare erat ac tempor consectetur. Donec dictum lectus et velit pretium, lacinia pulvinar nisl sollicitudin. Curabitur finibus mi mi, et gravida libero blandit nec. Duis dignissim massa a diam imperdiet, ut scelerisque est vestibulum. Donec accumsan leo eu massa ultrices blandit. Aliquam fringilla augue et massa efficitur congue eu et justo. Vestibulum a ipsum tincidunt, sollicitudin tellus eu, varius eros. Proin aliquam tortor dolor, in vulputate tellus interdum ac. Nunc malesuada tellus sem, at tincidunt sapien porta et. Mauris maximus nisi est, sed fringilla erat hendrerit quis. Cras ullamcorper quam"];

  const highlights = ["Entertainment - Spotlight unique, can't-miss performances, activities, games that will wow and engage attendees.", "Networking - Note opportunities to make valuable connections and strengthen relationships.", "Education - Promote insightful talks, workshops, etc. from experts that attendees will gain knowledge from.", "Entertainment - Spotlight unique, can't-miss performances, activities, games that will wow and engage attendees.", "Networking - Note opportunities to make valuable connections and strengthen relationships.", "Education - Promote insightful talks, workshops, etc. from experts that attendees will gain knowledge from.", "Entertainment - Spotlight unique, can't-miss performances, activities, games that will wow and engage attendees.", "Networking - Note opportunities to make valuable connections and strengthen relationships.", "Education - Promote insightful talks, workshops, etc. from experts that attendees will gain knowledge from."];
  return (
    <section className="bg-postage minHeight p-4">
      <div className="container mx-auto flex items-stretch bg-white rounded-lg overflow-hidden gap-2">
        <div className="basis-1/2">
          <img className="h-full" src="/assets/place1.png" alt="" />
        </div>
        <div className="basis-1/2 space-y-2">
          <img className="w-full" src="/assets/place2.png" alt="" />
          <img className="w-full" src="/assets/place3.png" alt="" />
        </div>
      </div>
      <div className="container mx-auto bg-white p-6 md:p-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-6">
          <div className="mb-3 md:mb-0">
            <h3 className="text-brownOrange text-xl md:text-3xl mb-3 capitalize">Pyramids of giza</h3>
            <div className="flex items-center gap-2 text-sm">
              <i className="fa-solid fa-location-dot text-brownOrange"></i>
              <span>Location of the events</span>
            </div>
          </div>
          <button className="bg-brownOrange hover:bg-postage duration-300 text-white py-2 px-8 rounded-lg">View Map</button>
        </div>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-6">
            {paragraph}
          </p>
        ))}
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-6">
            {paragraph}
          </p>
        ))}
        <div className="flex flex-col lg:flex-row gap-6">
          <div>
            <h3 className="capitalize text-brownOrange mb-6 text-xl md:text2xl font-bold">highlights Of Pyramids</h3>
            <ul className="list-disc">
              {highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="capitalize text-brownOrange mb-2 text-xl md:text2xl font-bold">Maps</h3>
            <div className="flex items-center gap-2 text-sm mb-4">
              <i className="fa-solid fa-location-dot text-brownOrange"></i>
              <span>Location of Pyramids</span>
            </div>
            <div>
              <img src={map} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Place;
