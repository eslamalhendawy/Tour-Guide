import { useContext, useState } from "react";
import Modal from "@mui/material/Modal";
import DispatchContext from "../Context/DispatchContext";
import StateContext from "../Context/StateContext";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { postData } from "../Services/APICalls";

function SignUp() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  const handleOpen = () => {
    appDispatch({ type: "showMenu", data: "signup" });
  };
  const handleClose = () => {
    appDispatch({ type: "showMenu", data: "none" });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const regEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

  const handleSignUp = async () => {
    if(name === "" ){
      toast.error("Enter your name and surname");
      return;
    }
    if(email === "" ){
      toast.error("Enter your email address");
      return;
    }
    if(!regEmail.test(email)){
      toast.error("Enter a valid email address");
      return;
    }
    if(password === "" ){
      toast.error("Enter your password");
      return;
    }
    if(confirmPass === "" ){
      toast.error("Confirm your password");
      return;
    }
    if(password.length < 8){
      toast.error("Password must be at least 8 characters");
      return;
    }
    if(password !== confirmPass){
      toast.error("Passwords do not match");
      return;
    }
    let temp = await postData("auth/signup", { name, email, password, passwordConfirm: confirmPass });
    if(temp.status === "success"){
      localStorage.setItem("userToken", temp.token);
      localStorage.setItem("name", temp.data.user.name);
      localStorage.setItem("email", temp.data.user.email);
      toast.success("Account created successfully");
      appDispatch({ type: "login" });
      appDispatch({ type: "showMenu", data: "none" });
    }else{
      console.log(temp);
      toast.error("Sign Up failed, try again later");
    }
  }

  return (
    <div>
      <button onClick={handleOpen} className="bg-brownOrange border border-postage text-postage hover:bg-postage hover:text-white duration-300 text-lg font-base py-1 px-8 rounded-lg">
        Sign Up
      </button>
      <Modal open={appState.visibleMenu === "signup"} onClose={handleClose}>
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white p-6 sm:p-12 shadow shadow-white rounded-xl w-[300px] sm:w-[450px]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-2xl">Create Account</h3>
              <i className="fa-solid fa-x text-lg text-[#a3aab5] hover:text-black duration-300 cursor-pointer" onClick={handleClose}></i>
            </div>
            <div className="mb-3">
              <p className="text-[#a3aab5] mb-2">Name and Surname</p>
              <input onChange={(e) => setName(e.target.value)} className="border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none" type="text" placeholder="Enter your name and surname" />
            </div>
            <div className="mb-3">
              <p className="text-[#a3aab5] mb-2">Email Address</p>
              <input onChange={(e) => setEmail(e.target.value)} className="border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none" type="text" placeholder="Enter your email address" />
            </div>
            <div className="mb-3">
              <p className="text-[#a3aab5] mb-2">Password</p>
              <input onChange={(e) => setPassword(e.target.value)} className="border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none" type="password" placeholder="Enter your password" />
            </div>
            <div className="mb-3">
              <p className="text-[#a3aab5] mb-2">Confim Password</p>
              <input onChange={(e) => setConfirmPass(e.target.value)} className="border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none" type="password" placeholder="Confirm password" />
            </div>
            <div className="mb-3 flex items-center gap-3">
              <input type="checkbox" name="" id="" />
              <p>
                I agree with <span className="text-brownOrange">Terms</span> and <span className="text-brownOrange">Privacy</span>
              </p>
            </div>
            <button onClick={handleSignUp} className="text-white mb-2 bg-brownOrange block w-full hover:bg-secondary duration-300 sm:text-lg font-semibold py-1 px-8 rounded-3xl">Sign Up</button>
            <p className="text-center text-[#a3aab5] mb-2">or</p>
            <div className="text-[#a3aab5] border border-[#a3aab5] flex items-center w-full sm:text-lg font-semibold py-1 px-4 rounded-3xl  mb-2">
              <i className="fab fa-google mr-2"></i>
              <p className="ml-12">Sign Up with Google</p>
            </div>
            <div className="flex justify-center gap-2">
              <p>Don&apos;t Have an account ?</p>
              <button onClick={() => appDispatch({ type: "showMenu", data: "login" })} className="text-brownOrange hover:text-secondary duration-300  font-medium">
                Log In
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SignUp;
