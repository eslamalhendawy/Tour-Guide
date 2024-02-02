import { useState } from "react";
import Drawer from "@mui/material/SwipeableDrawer";
import Login from "./Login";

function SideMenu() {
  const [openMenu, setOpen] = useState(false);
  const toggleMenu = (openStatus) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(openStatus);
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
              <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">Tours</li>
              <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">Packages</li>
              <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">Hotels</li>
              <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">Search</li>
              <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">About Us</li>
              <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">Contact Us</li>
            </ul>
          </div>
          <div className=" flex gap-6 mb-6">
            <Login />
            <button className="bg-brownOrange border border-postage text-postage hover:bg-postage hover:text-white duration-300 text-lg font-base py-1 px-8 rounded-lg">Sign Up</button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default SideMenu;
