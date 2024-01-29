import React from "react";
import heroImage from "../assets/kisspng-nefertiti-bust-wrinkle-rhytidectomy-face-nefertiti-5b308d4010a1a4 2.png";

function Hero() {
  return (
    <div className="bg-postage">
      <div className="container mx-auto py-3 px-3">
        <div>
          <h1 className="text-brownOrange font-bold text-2xl my-6 text-center">Egy traveler your best way to have fun in Egypt</h1>
          <p className="text-white text-lg text-center mb-6">Egytraveler is designed to revolutionize the way you have fun in Egypt. Utilizing advanced computer vision and augmented reality technologies, it enhances your tourist experience by offering interactive and immersive adventures at famous landmarks and monuments. Explore different cities, book hotels, and delve into Egypt&apos;s rich history with our app as your trusted guide.</p>
          <p className="text-center text-white mb-3">
            For a better experience <span className="text-brownOrange">download</span> our App
          </p>
          <div className="flex gap-3 items-center justify-center">
            <button className="flex gap-2 items-center text-white bg-black p-2 rounded-lg">
              <i className="fa-brands fa-google-play text-lg"></i>
              <div className="text-xs uppercase text-left">
                <p>get egytravler on</p>
                <p>google play</p>
              </div>
            </button>
            <button className="flex gap-2 items-center text-white bg-black p-2 rounded-lg">
              <i className="fa-brands fa-apple text-lg"></i>
              <div className="text-xs uppercase text-left">
                <p>download on the</p>
                <p>app store</p>
              </div>
            </button>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
