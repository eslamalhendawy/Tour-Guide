import { useAppContext } from "../Context/AppContext";
import { useState } from "react";
import Modal from "@mui/material/Modal";

import { postData } from "../Services/APICalls";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const { userData, setUserData } = useAppContext();
  const handleOpen = () => {
    setUserData({ ...userData, visibleMenu: "login" });
  };
  const handleClose = () => {
    setUserData({ ...userData, visibleMenu: "none" });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    let temp = await postData("auth/signin", { email, password });
    if (temp.status === "success") {
      localStorage.setItem("userToken", temp.token);
      setUserData({ name: temp.data.user.name, email: temp.data.user.email, loggedIn: true, visibleMenu: "none" });
      toast.success("Logged in successfully");
    } else {
      toast.error("Login failed, please try again.");
    }
  };

  return (
    <div>
      <button onClick={handleOpen} className="bg-brownOrange border border-postage text-postage hover:bg-postage hover:text-white duration-300 xl:text-lg font-base py-1 px-8 rounded-lg">
        Sign in
      </button>
      <Modal open={userData.visibleMenu === "login"} onClose={handleClose}>
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white p-6 sm:p-12 shadow shadow-white rounded-xl w-[300px] sm:w-[450px]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-2xl">Sign In</h3>
              <i className="fa-solid fa-x text-lg text-[#a3aab5] hover:text-black duration-300 cursor-pointer" onClick={handleClose}></i>
            </div>
            <div className="mb-3">
              <p className="text-[#a3aab5] mb-2">Email Address</p>
              <input onChange={(e) => setEmail(e.target.value)} className="border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none" type="text" placeholder="Enter your email address" />
            </div>
            <div className="mb-3">
              <p className="text-[#a3aab5] mb-2">Password</p>
              <input onChange={(e) => setPassword(e.target.value)} className="border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none" type="password" placeholder="Enter your password" />
            </div>
            <p onClick={() => setUserData({ ...userData, visibleMenu: "password" })} className="text-right text-[#a3aab5] hover:text-black duration-300 cursor-pointer mb-3">
              Forgot your password?
            </p>
            <button onClick={handleLogin} className="text-white mb-2 bg-brownOrange block w-full hover:bg-secondary duration-300 sm:text-lg font-semibold py-1 px-8 rounded-3xl">
              Sign In
            </button>
            <p className="text-center text-[#a3aab5] mb-2">or</p>
            <div className="text-[#a3aab5] border border-[#a3aab5] flex items-center w-full sm:text-lg font-semibold py-1 px-4 rounded-3xl  mb-2">
              <i className="fab fa-google mr-2"></i>
              <p className="ml-12">Sign In with Google</p>
            </div>
            <div className="flex justify-center gap-2">
              <p>Don&apos;t Have an account ?</p>
              <button onClick={() => setUserData({ ...userData, visibleMenu: "signup" })} className="text-brownOrange hover:text-secondary duration-300  font-medium">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Login;
