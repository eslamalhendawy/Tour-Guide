import React from "react";

function Footer() {
  return (
    <div className="bg-brownOrange">
      <div className="container mx-auto py-8 px-3 text-white md:flex gap-4 justify-between">
        <div>
          <h3 className="text-center md:text-left mb-2 uppercase">Travel To Egypt</h3>
          <ul className="text-center md:text-left flex flex-col gap-1 mb-6">
            <li>
              <p>Tourist Egypt Tours</p>
            </li>
            <li>
              <p>Tourist Egypt Hotels</p>
            </li>
            <li>
              <p>Tourist Egypt Package Tours</p>
            </li>
            <li>
              <p>Private Tours in Egypt</p>
            </li>
            <li>
              <p>Cairo Tours</p>
            </li>
            <li>
              <p>Sinai Tours</p>
            </li>
            <li>
              <p>Pyramids Tours</p>
            </li>
            <li>
              <p>Luxor Tours</p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-center md:text-left mb-2 uppercase">Need Help ?</h3>
          <ul className="text-center md:text-left flex flex-col gap-1 mb-6">
            <li>
              <p>Tourist Egypt Tours</p>
            </li>
            <li>
              <p>Tourist Egypt Hotels</p>
            </li>
            <li>
              <p>Tourist Egypt Package Tours</p>
            </li>
            <li>
              <p>Private Tours in Egypt</p>
            </li>
            <li>
              <p>Cairo Tours</p>
            </li>
            <li>
              <p>Sinai Tours</p>
            </li>
            <li>
              <p>Pyramids Tours</p>
            </li>
            <li>
              <p>Luxor Tours</p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-center md:text-left mb-2 uppercase">stay in touch</h3>
          <p className="text-center md:text-left lg:w-[80%] mb-2">Subscribe to our newsletter for the latest updates and special offers</p>
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <input className="bg-brownOrange border border-white h-[50px] focus:outline-none px-1" type="text" />
            <button className="border-postage bg-postage text-white duration-300 text-base font-base h-[50px] px-4">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
