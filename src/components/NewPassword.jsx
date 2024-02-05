import { useContext } from "react";
import Modal from "@mui/material/Modal";
import DispatchContext from "../Context/DispatchContext";
import StateContext from "../Context/StateContext";

import key from "/assets/Vector.png";

function NewPassword() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  const handleClose = () => {
    appDispatch({ type: "showMenu", data: "none" });
  };
  return (
    <Modal open={appState.visibleMenu === "newPassword"} onClose={handleClose}>
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
            <p className="text-[#a3aab5] mb-2">New Password</p>
            <input className="border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none" type="text" placeholder="Enter new password" />
          </div>
          <div className="mb-6">
            <p className="text-[#a3aab5] mb-2">Confirm Password</p>
            <input className="border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none" type="text" placeholder="Confirm New assword" />
          </div>
          <button onClick={() => appDispatch({ type: "showMenu", data: "changeSuccess" })} className="text-white bg-brownOrange block w-full hover:bg-secondary duration-300 sm:text-lg font-semibold py-1 px-8 rounded-3xl">
            Reset Password
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default NewPassword;
