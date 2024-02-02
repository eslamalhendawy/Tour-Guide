import img from "/assets/sharm-el-sheikh-sunshine-resort-scaled.jpg.png";

function HotelsSection() {
  return (
    <div className="bg-postage py-6 px-3">
      <div className="container mx-auto flex flex-col md:flex-row md:items-stretch bg-white">
        <div className="w-full md:basis-1/2">
          <img className="h-full" src={img} alt="" />
        </div>
        <div className="bg-white py-6 pr-3 pl-3 md:pl-8 md:basis-1/2">
          <h3 className="text-brownOrange font-semibold text-xl md:text-2xl xl:text-3xl mb-3 uppercase">Hotels</h3>
          <div className="border-t-4 border-dotted border-brownOrange w-[30%] mb-3"></div>
          <div className="border-t-4 border-dotted border-brownOrange w-[30%] mb-6"></div>
          <p className="text-base mb-3">Book your Egypt Hotels with Tourist Egypt and take advantage of our selection of the country&apos;s best places to stay, many with special benefits.</p>
          <ul className="flex flex-col gap-3 mb-6 xl:mb-12">
            <li>Hotels in Cairo</li>
            <li>Hotels in Sharm El-Sheikh</li>
            <li>Hotels in Luxor</li>
            <li>Hotels in Red Sea & Sinai</li>
            <li>Hotels in Alexandria</li>
          </ul>
          <button className="bg-brownOrange hover:bg-postage duration-300 text-lg text-white p-3 font-bold">
            Tourist Egypt Hotels <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelsSection;
