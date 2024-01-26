import SideMenu from "./SideMenu";
import Login from "./Login";
import logo from "../assets/Group.png";

function Header() {
  return (
    <div className='container mx-auto py-6 px-3 flex items-center justify-between text-white'>
      <div className="max-w-[200px]">
        <img src={logo} alt="" />
      </div>
      <ul className="hidden lg:flex gap-8 md:text-lg font-semibold">
        <li className="hover:text-primary duration-300 cursor-pointer">Home</li>
        <li className="hover:text-primary duration-300 cursor-pointer">About Us</li>      
        <li className="hover:text-primary duration-300 cursor-pointer">Tour Packages</li>      
        <li className="hover:text-primary duration-300 cursor-pointer">Contact Us</li>      
      </ul>
      <div className="hidden lg:flex items-center ">
        <Login />
        <button className="bg-accent hover:bg-secondary duration-300 text-lg font-semibold py-1 px-8 rounded-3xl">Sign Up</button>
      </div>
      <SideMenu />
    </div>
  )
}

export default Header