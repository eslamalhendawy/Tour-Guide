import { useAppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";

import SideMenu from "./SideMenu";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import ConfirmCode from "./ConfirmCode";
import NewPassword from "./NewPassword";
import ChangeSuccess from "./ChangeSuccess";

import logo from "/assets/6 1.png";

function Header() {
  const { userData } = useAppContext();

  return (
    <div className="bg-[#505050]">
      <div className="container mx-auto py-3 px-3">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="max-w-[100px]">
              <img src={logo} alt="" />
            </div>
          </Link>
          <div className="flex items-stretch gap-4">
            <div className="hidden lg:flex bg-brownOrange px-6 py-2 md:text-lg rounded justify-center items-center">
              <i className="fa-solid fa-globe text-postage hover:text-white duration-300 cursor-pointer"></i>
            </div>
            <ul className="hidden lg:flex items-center gap-4 xl:gap-8 md:text-lg font-semibold text-[#00242D] bg-brownOrange px-6 py-2 rounded">
              <li className="hover:text-white duration-300 cursor-pointer">Tours</li>
              <li className="hover:text-white duration-300 cursor-pointer">Packages</li>
              <li className="hover:text-white duration-300 cursor-pointer">Hotels</li>
              <li className="hover:text-white duration-300 cursor-pointer">Search</li>
              <li className="hover:text-white duration-300 cursor-pointer">About Us</li>
              <li className="hover:text-white duration-300 cursor-pointer">Contact Us</li>
              {userData.loggedIn ? (
                <li  className="hover:text-white duration-300 cursor-pointer">{userData.name}</li>
              ) : (
                <>
                  <li>
                  test
                    {/* <SignUp /> */}
                  </li>
                  <li>
                  test2
                    {/* <Login /> */}
                  </li>
                </>
              )}
            </ul>
          </div>
          {/* <ForgotPassword />
          <SideMenu />
          <ConfirmCode />
          <NewPassword />
          <ChangeSuccess /> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
