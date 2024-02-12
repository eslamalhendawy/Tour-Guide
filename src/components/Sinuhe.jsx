import { useAppContext } from "../Context/AppContext";
import icon from "/assets/majesticons_send.png";

function Sinuhe() {
  const { userData } = useAppContext();
  return (
    <div className="bg-white minHeight">
      <div className="container mx-auto py-3 px-3">
        <h2 className="text-center font-bold mt-20 mb-6 text-3xl">Welcome Back{userData.loggedIn ? ", " + userData.name : ""}</h2>
        <div className="flex bg-[#F3F1EB] p-3 rounded-xl md:w-[80%] md:mx-auto lg:w-[60%] mb-6">
          <input type="text" className="grow bg-[#F3F1EB] focus:outline-none placeholder:text-xs md:placeholder:text-base" placeholder="Messege Sinuhe or search past chats"/>
          <button className="bg-brownOrange hover:bg-postage duration-300 flex items-center gap-2 text-xs md:text-base text-white p-2 rounded-xl">
            <span>Start New Chat</span>
            <img className="w-[10px] md:w-[16px]" src={icon} alt="" />
          </button>
        </div>
        <h3 className="md:w-[80%] md:mx-auto lg:w-[60%] text-xl">Today</h3>
      </div>
    </div>
  );
}

export default Sinuhe;
