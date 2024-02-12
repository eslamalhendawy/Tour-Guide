import { useAppContext } from "../Context/AppContext";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { putData } from "../Services/APICalls";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import key from "/assets/Vector.png";

function NewPassword() {
  const { userData, setUserData } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const handleClose = () => {
    setUserData({ ...userData, visibleMenu: "none" });
  };

  const changePassword = async () => {
    if (email === "") {
      toast.error("Enter your email address");
      return;
    }
    if (password === "") {
      toast.error("Enter your new password");
      return;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
    if (confirmPassword === "") {
      toast.error("Confirm your new password");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (code === "") {
      toast.error("Enter the confirmation code sent to your email");
      return;
    }
    let temp = await putData("users/reset-password", { email, password, passwordConfirm: confirmPassword, forgetCode: code });
    if (temp.status === "success") {
      toast.success("Password changed successfully");
      setUserData({ ...userData, visibleMenu: "login" });
    } else {
      toast.error("Make sure you entered the correct confirmation code");
    }
  };

  return (
    <Modal open={userData.visibleMenu === "newPassword"} onClose={handleClose}>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-6 sm:p-12 shadow shadow-white rounded-xl w-[300px] sm:w-[450px]">
          <i className="fa-solid fa-x text-lg text-[#a3aab5] hover:text-black duration-300 cursor-pointer ml-auto block w-fit" onClick={handleClose}></i>
          <div className="mb-6 flex justify-center bg-[#fdddb6] w-fit p-4 mx-auto rounded-full">
            <img src={key} alt="key" />
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-2xl text-center">Set New Password</h3>
          </div>
          <p className="text-center mb-4">Your new password must be different from previously used passwords.</p>
          <div className="mb-3">
            <p className="text-[#a3aab5] mb-2">Email</p>
            <input onChange={(e) => setEmail(e.target.value)} className="border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none" type="text" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <p className="text-[#a3aab5] mb-2">New Password</p>
            <input onChange={(e) => setPassword(e.target.value)} className="border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none" type="password" placeholder="Enter new password" />
          </div>
          <div className="mb-4">
            <p className="text-[#a3aab5] mb-2">Confirm Password</p>
            <input onChange={(e) => setConfirmPassword(e.target.value)} className="border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none" type="password" placeholder="Confirm New assword" />
          </div>
          <div className="mb-6">
            <p className="text-[#a3aab5] mb-2">Confirmation Code</p>
            <input onChange={(e) => setCode(e.target.value)} className="border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none" type="text" placeholder="Enter code sent to your email" />
          </div>
          <button onClick={changePassword} className="text-white bg-brownOrange block w-full hover:bg-secondary duration-300 sm:text-lg font-semibold py-1 px-8 rounded-3xl">
            Reset Password
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default NewPassword;
