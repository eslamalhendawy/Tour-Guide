import { useState } from "react";
import Modal from "@mui/material/Modal";

function Login() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen} className="mr-6 text-lg font-semibold hover:text-primary duration-300">
        Login
      </button>
      <Modal open={open} onClose={handleClose}>
        <div className="flex justify-center items-center h-screen ">
          <div className="bg-white p-6 sm:p-12 shadow shadow-white rounded-xl w-[300px] sm:w-[450px]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-2xl">Login</h3>
              <i className="fa-solid fa-x text-lg text-[#a3aab5] hover:text-black duration-300 cursor-pointer" onClick={handleClose}></i>
            </div>
            <div className="mb-3">
              <p className="text-[#a3aab5] mb-2">Email Address</p>
              <input className="border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none" type="text" placeholder="Enter your email address" />
            </div>
            <div className="mb-3">
              <p className="text-[#a3aab5] mb-2">Password</p>
              <input className="border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none" type="text" placeholder="Enter your password" />
            </div>
            <p className="text-right text-[#a3aab5] mb-3">Forgot your password?</p>
            <button className="text-white mb-2 bg-accent block w-full hover:bg-secondary duration-300 sm:text-lg font-semibold py-1 px-8 rounded-3xl">Sign In</button>
            <p className="text-center text-[#a3aab5] mb-2">or</p>
            <div className="text-[#a3aab5] border border-[#a3aab5] flex items-center w-full sm:text-lg font-semibold py-1 px-4 rounded-3xl  mb-2">
              <i className="fab fa-google mr-2"></i>
              <p className="ml-12">Sign In with Google</p>
            </div>
            <div className="flex justify-center gap-2">
              <p>Don&apos;t Have an account ?</p>
              <button className="text-accent hover:text-secondary duration-300  font-medium">Sign Up</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Login;
