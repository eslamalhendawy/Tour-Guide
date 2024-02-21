import Slider from "./Slider";

function TravelSlider() {

  const data = [
    {
      name: "Alexandria",
      Image: "/assets/e61a937d-94dd-48c8-8363-3f4160b2c55a 1.png",
    },
    {
      name: "Cairo",
      Image: "/assets/fa6f4aee-1e56-48bc-895c-37beda243a0c 1.png",
    },
    {
      name: "Sinai",
      Image: "/assets/desktop-wallpaper-i-see-how-moses-got-lost-here-top-of-mt-sinai-egypt-oc-sinai 1 (2).png",
    },
    {
      name: "Alexandria",
      Image: "/assets/e61a937d-94dd-48c8-8363-3f4160b2c55a 1.png",
    },
    {
      name: "Alexandria",
      Image: "/assets/e61a937d-94dd-48c8-8363-3f4160b2c55a 1.png",
    },
    {
      name: "Cairo",
      Image: "/assets/fa6f4aee-1e56-48bc-895c-37beda243a0c 1.png",
    },
    {
      name: "Sinai",
      Image: "/assets/desktop-wallpaper-i-see-how-moses-got-lost-here-top-of-mt-sinai-egypt-oc-sinai 1 (2).png",
    },
    {
      name: "Alexandria",
      Image: "/assets/e61a937d-94dd-48c8-8363-3f4160b2c55a 1.png",
    },
  ];

  return (
    <div className="bg-postage pt-12 pb-6 px-3">
      <div className="container mx-auto bg-white p-6 rounded-lg">
        <h3 className="text-brownOrange text-2xl md:text-3xl text-center md:text-left font-bold mb-6">Near Events</h3>
        <Slider data={data} />
      </div>
    </div>
  );
}

export default TravelSlider;
