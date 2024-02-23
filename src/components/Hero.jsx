import { useTranslation } from "react-i18next";
import heroImage from "/assets/kisspng-nefertiti-bust-wrinkle-rhytidectomy-face-nefertiti-5b308d4010a1a4 2.png";

function Hero() {
  const { t } = useTranslation();
  return (
    <div className="bg-postage">
      <div className="container mx-auto py-3 px-3 md:flex items-center">
        <div className="basis-2/3">
          <h1 className="text-brownOrange font-bold text-3xl lg:text-5xl mt-6 mb-6 lg:mb-12 text-center md:text-left">Egy traveler your best way to have fun in Egypt</h1>
          <p className="text-white text-lg text-center md:text-left mb-6 lg:mb-12">Egytraveler is designed to revolutionize the way you have fun in Egypt. Utilizing advanced computer vision and augmented reality technologies, it enhances your tourist experience by offering interactive and immersive adventures at famous landmarks and monuments. Explore different cities, book hotels, and delve into Egypt&apos;s rich history with our app as your trusted guide.</p>
          <p className="text-center md:text-left text-white mb-3">
            For a better experience <span className="text-brownOrange">download</span> our App
          </p>
          <div className="flex gap-3 items-center justify-center md:justify-start">
            <button className="flex gap-2 items-center text-white bg-[#212529] hover:bg-black duration-300 p-2 rounded-lg">
              <i className="fa-brands fa-google-play text-lg lg:text-2xl"></i>
              <div className="uppercase text-left">
                <p className="text-[9px] lg:text-[10px]">get egytravler on</p>
                <p className="text-sm lg:text-base font-bold">google play</p>
              </div>
            </button>
            {/* <button className="flex gap-2 items-center text-white bg-[#212529] hover:bg-black duration-300 p-2 rounded-lg">
              <i className="fa-brands fa-apple text-lg lg:text-2xl"></i>
              <div className="text-xs uppercase text-left">
                <p className="text-[9px] lg:text-[10px]">download on the</p>
                <p className="text-sm lg:text-base font-bold">app store</p>
              </div>
            </button> */}
          </div>
        </div>
        <div className="relative basis-1/3">
          <div className="circle-element size-[100px] lg:size-[130px] rounded-full absolute top-5 lg:top-10 right-0 md:right-10 2xl:right-[100px]"></div>
          <div className="backgound-effect size-[250px] rounded-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"></div>
          <img src={heroImage} className="relative z-10 md:max-w-[400px]" alt="" />
          <div className="circle-element size-[150px] lg:size-[200px] rounded-full absolute bottom-5 lg:bottom-0 left-0"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
