import img from "/assets/sharm-old-town-egypt-sinai-mountains-view-scaled.jpg.png";

function ToursSection() {
  return (
    <div className="bg-postage py-6 px-3">
      <div className="container mx-auto flex flex-col md:flex-row-reverse md:items-stretch">
        <div className="w-full md:basis-1/2">
          <img className="h-full" src={img} alt="" />
        </div>
        <div className="bg-white py-6 pr-3 pl-3 md:pl-8 md:basis-1/2">
          <h3 className="text-brownOrange font-semibold text-xl md:text-2xl xl:text-3xl mb-3 uppercase">Egypt tours package</h3>
          <div className="border-t-4 border-dotted border-brownOrange w-[30%] mb-3"></div>
          <div className="border-t-4 border-dotted border-brownOrange w-[30%] mb-6"></div>
          <p className="text-base mb-3">Our Egypt Package Tours are designed around for a range of travel styles, themes, lengths, and languages, so we aim to have something for everyone.</p>
          <ul className="flex flex-col gap-3 mb-6 xl:mb-12">
            <li>Egypt Package Tours</li>
            <li>Overnight & Short Egypt Tour Packages</li>
            <li>Private Tours in Egypt</li>
          </ul>
          <button className="bg-brownOrange hover:bg-postage duration-300 text-lg text-white p-3 font-bold">
            Egypt Package Tours <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToursSection;
