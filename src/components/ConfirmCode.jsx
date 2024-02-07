import { useAppContext } from "../Context/AppContext";
import { useState } from "react";
import Modal from "@mui/material/Modal";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ConfirmCode() {
  const { userData, setUserData } = useAppContext();
  const [code, setCode] = useState("");
  const handleClose = () => {
    setUserData({ ...userData, visibleMenu: "none" });
  };

  const sendCode = () => {
    if (code === "") {
      toast.error("Enter the confirmation code");
      return;
    }
    setUserData({ ...userData, visibleMenu: "newPassword" });
  };

  return (
    <Modal open={userData.visibleMenu === "confirmCode"} onClose={handleClose}>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-6 sm:p-12 shadow shadow-white rounded-xl w-[300px] sm:w-[450px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-2xl">Confirmation Code</h3>
            <i className="fa-solid fa-x text-lg text-[#a3aab5] hover:text-black duration-300 cursor-pointer" onClick={handleClose}></i>
          </div>
          <div className="mb-6">
            <p className="text-[#a3aab5] mb-2">Confirmation Code</p>
            <input onChange={(e) => setCode(e.target.value)} className="border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none" type="text" placeholder="Enter code sent to your email" />
          </div>
          <button onClick={sendCode} className="text-white bg-brownOrange block w-full hover:bg-secondary duration-300 sm:text-lg font-semibold py-1 px-8 rounded-3xl">
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmCode;
