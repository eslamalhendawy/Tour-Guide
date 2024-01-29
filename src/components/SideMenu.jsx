import { useState } from "react";
import Drawer from "@mui/material/SwipeableDrawer";

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
        <div className="w-screen h-full md:max-w-screen-sm flex flex-col justify-between p-3 relative bg-[#1f1f1f]">
          <div>
            <div className="text-2xl text-white hover:text-primary duration-300 mb-6">
              <i className="fa-solid fa-x" onClick={toggleMenu(false)}></i>
            </div>
            <ul>
              <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">Home</li>
              <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">About Us</li>
              <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">Tour Packages</li>
              <li className="text-white font-semibold text-lg hover:text-primary duration-300 cursor-pointer mb-6">Contact Us</li>
            </ul>
          </div>
          <div className=" flex flex-col gap-6 mb-6">
            <button className="text-white text-lg font-semibold hover:text-primary duration-300">Login</button>
            <button className="text-white bg-accent hover:bg-secondary duration-300 text-lg font-semibold py-1 px-8 rounded-3xl">Sign Up</button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default SideMenu;
