import { useAppContext } from "../Context/AppContext";
import { useState } from "react";
import Drawer from "@mui/material/SwipeableDrawer";
import Login from "./Login";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";

function SideMenu() {
  const { userData, setUserData } = useAppContext();
  const [openMenu, setOpen] = useState(false);
  const toggleMenu = (openStatus) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(openStatus);
  };
  const logout = () => {
    setUserData({ ...userData, loggedIn: false });
    localStorage.removeItem("userToken");
  };
  return (
    <div className="lg:hidden">
      <i onClick={toggleMenu(true)} className="fa-solid fa-bars text-xl text-white hover:text-primary duration-300 cursor-pointer"></i>
      <Drawer anchor="right" open={openMenu} onClose={toggleMenu(false)} onOpen={toggleMenu(true)}>
        <div className="w-screen h-full md:max-w-screen-sm flex flex-col justify-between p-3 relative bg-[#505050]">
          <div>
            <div className="text-2xl text-white hover:text-primary duration-300 mb-6">
              <i className="fa-solid fa-x" onClick={toggleMenu(false)}></i>
            </div>
            <ul>
              <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">Trips</li>
              <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">Sinuhe</li>
              <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">Planner</li>
              <Link to="/search" onClick={toggleMenu(false)}>
                <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">Search</li>
              </Link>
              <Link to="/about-us" onClick={toggleMenu(false)}>
                <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">About Us</li>
              </Link>
              <Link to="/contact-us" onClick={toggleMenu(false)}>
                <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className=" flex gap-6 mb-6">
            {userData.loggedIn ? (
              <button onClick={logout} className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer flex items-center gap-2">
                <i className="fa-solid fa-user"></i>
                <span>{userData.name}</span>
              </button>
            ) : (
              <>
                <Login />
                <SignUp />
              </>
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default SideMenu;
