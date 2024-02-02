import img from "/assets/river-nile-egypt-scaled.jpg.png";

function TouristSection() {
  return (
    <div className="bg-postage py-6 px-3">
      <div className="container mx-auto flex flex-col md:flex-row md:items-stretch bg-white">
        <div className="w-full md:basis-1/2">
          <img className="h-full" src={img} alt="" />
        </div>
        <div className="bg-white py-6 pr-3 pl-3 md:pl-8 md:basis-1/2">
          <h3 className="text-brownOrange font-semibold text-xl md:text-2xl xl:text-3xl mb-3 uppercase">Tourist Egypt Tours</h3>
          <div className="border-t-4 border-dotted border-brownOrange w-[30%] mb-3"></div>
          <div className="border-t-4 border-dotted border-brownOrange w-[30%] mb-6"></div>
          <p className="text-base mb-3">A variety of Egypt tours, designed by our team of experts, offering a unique way to explore and experience Egypt.</p>
          <ul className="flex flex-col gap-3 mb-6 xl:mb-12">
            <li>Tours to Cairo</li>
            <li>Tours to the Pyramids</li>
            <li>Tours to Alexanderia</li>
          </ul>
          <button className="bg-brownOrange hover:bg-postage duration-300 text-lg text-white p-3 font-bold">Tourist Egypt Tours <i className="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
    </div>
  );
}

export default TouristSection;
