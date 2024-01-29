import SideMenu from "./SideMenu";
import Login from "./Login";
import logo from "../assets/6 1.png";

function Header() {
  return (
    <div className="bg-[#505050]">
      <div className="container mx-auto py-3 px-3">
        <div className="flex items-center justify-between">
          <div className="max-w-[100px]">
            <img src={logo} alt="" />
          </div>
          <ul className="hidden lg:flex items-center gap-4 xl:gap-8 md:text-lg font-semibold text-[#00242D] bg-brownOrange px-6 py-2 rounded">
            <li className="hover:text-white duration-300 cursor-pointer">Tours</li>
            <li className="hover:text-white duration-300 cursor-pointer">Packages</li>
            <li className="hover:text-white duration-300 cursor-pointer">Hotels</li>
            <li className="hover:text-white duration-300 cursor-pointer">Search</li>
            <li className="hover:text-white duration-300 cursor-pointer">About Us</li>
            <li className="hover:text-white duration-300 cursor-pointer">Contact Us</li>
            <li>
              <button className="bg-brownOrange border border-postage text-postage hover:bg-postage hover:text-white duration-300 text-lg font-base py-1 px-8 rounded-lg">Sign Up</button>
            </li>
            <li>
              <Login />
            </li>
          </ul>
          <SideMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
