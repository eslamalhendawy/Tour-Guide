import phone from "/assets/Rectangle (2).png";

function PhoneApp() {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-20 px-3 flex flex-col md:flex-row gap-6 items-center ">
        <div className="basis-2/3">
          <h3 className="text-postage font-bold text-3xl text-nowrap mb-6">Why our Application?</h3>
          <p className="text-postage text-lg mb-6 xl:mb-20">Introducing EgyTraveler – the app that transforms your Egypt experience. Easily recognize monuments and landmarks with text-to-speech tech, making your trip both easier and more entertaining. Scan objects to learn historical facts instantly. Plus, bring your favorite items to life using AR technology through your camera. EgyTraveler: your go-to for a seamless and fun-filled exploration of Egypt&apos;s rich heritage.</p>
          <div className="flex justify-center md:justify-start">
            <button className="font-bold text-lg bg-brownOrange hover:bg-postage duration-300 text-white py-4 px-12 rounded-xl">Download Now!</button>
          </div>
        </div>
        <div className="basis-1/3 flex justify-center md:justify-end">
          <img className="max-w-[200px] xl:max-w-[300px]" src={phone} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PhoneApp;
