import logo from "/assets/6 1.png";

function Footer() {
  return (
    <div className="bg-brownOrange rounded-t-2xl">
      <div className="container mx-auto py-8 px-3 text-white flex flex-col md:flex-row gap-6 justify-between">
        <div>
          <div className="max-w-[150px] mb-6 mx-auto md:mx-0">
            <img src={logo} alt="" />
          </div>
          <p className="mb-6 text-lg text-center">You can download the app from the links below:</p>
          <button className="flex gap-2 items-center text-white bg-[#212529] hover:bg-black duration-300 p-2 rounded-lg mx-auto md:mx-0">
            <i className="fa-brands fa-google-play text-lg lg:text-2xl"></i>
            <div className="uppercase text-left">
              <p className="text-[9px] lg:text-[10px]">get egytravler on</p>
              <p className="text-sm lg:text-base font-bold">google play</p>
            </div>
          </button>
        </div>
        <div>
          <ul className="mb-6 space-y-2 text-center md:text-left">
            <li>Why our Application?</li>
            <li>Know History</li>
            <li>Trips</li>
            <li>Sinuhe</li>
            <li>Knowledge Check</li>
          </ul>
          <ul className="flex items-center justify-center gap-3">
            <li>Contact Us</li>
            <li>Terms and conditions</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
