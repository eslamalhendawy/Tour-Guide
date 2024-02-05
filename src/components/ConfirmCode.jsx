import { useContext } from "react";
import Modal from "@mui/material/Modal";
import DispatchContext from "../Context/DispatchContext";
import StateContext from "../Context/StateContext";

function ConfirmCode() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  const handleClose = () => {
    appDispatch({ type: "showMenu", data: "none" });
  };
  return (
    <Modal open={appState.visibleMenu === "confirmCode"} onClose={handleClose}>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-6 sm:p-12 shadow shadow-white rounded-xl w-[300px] sm:w-[450px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-2xl">Confirmation Code</h3>
            <i className="fa-solid fa-x text-lg text-[#a3aab5] hover:text-black duration-300 cursor-pointer" onClick={handleClose}></i>
          </div>
          <div className="mb-6">
            <p className="text-[#a3aab5] mb-2">Confirmation Code</p>
            <input className="border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none" type="text" placeholder="Enter code sent to your email" />
          </div>
          <button onClick={() => appDispatch({ type: "showMenu", data: "newPassword" })} className="text-white bg-brownOrange block w-full hover:bg-secondary duration-300 sm:text-lg font-semibold py-1 px-8 rounded-3xl">
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmCode;
