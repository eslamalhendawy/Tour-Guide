import { useEffect } from "react";
import Hero from "./Hero";
import PhoneApp from "./PhoneApp";
import YouMayLike from "./YouMayLike";
import CardSlider from "./CardSlider";
import TravelWithUs from "./TravelWithUs";
import NearEvents from "./NearEvents";

function HomePage() {
  useEffect(() => {
    document.title = "Egytravler | Home";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <PhoneApp />
      {/* <TravelSlider /> */}
      <YouMayLike />
      <CardSlider />
      <NearEvents />
      <TravelWithUs />
    </div>
  );
}

export default HomePage;
