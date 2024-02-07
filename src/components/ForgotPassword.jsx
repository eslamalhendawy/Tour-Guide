import { useAppContext } from "../Context/AppContext";
import { useState } from "react";
import Modal from "@mui/material/Modal";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgotPassword() {
  const { userData, setUserData } = useAppContext();
  const [email, setEmail] = useState("");
  const regEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const handleClose = () => {
    setUserData({ ...userData, visibleMenu: "none" });
  };

  const sendEmail = () => {
    if(email === ""){
      toast.error("Enter your email address");
      return;
    }
    if(!regEmail.test(email)){
      toast.error("Enter a valid email address");
      return;
    }
    setUserData({ ...userData, visibleMenu: "confirmCode" });
    console.log(email);
  }

  return (
    <Modal open={userData.visibleMenu === "password"} onClose={handleClose}>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-6 sm:p-12 shadow shadow-white rounded-xl w-[300px] sm:w-[450px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-2xl">Reset Password</h3>
            <i className="fa-solid fa-x text-lg text-[#a3aab5] hover:text-black duration-300 cursor-pointer" onClick={handleClose}></i>
          </div>
          <div className="mb-6">
            <p className="text-[#a3aab5] mb-2">Email Address</p>
            <input onChange={(e) => setEmail(e.target.value)} className="border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none" type="text" placeholder="Enter your email address" />
          </div>
          <button onClick={sendEmail} className="text-white bg-brownOrange block w-full hover:bg-secondary duration-300 sm:text-lg font-semibold py-1 px-8 rounded-3xl">
            Send Confirmation Code
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ForgotPassword;