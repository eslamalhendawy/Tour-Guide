import { useContext } from "react";
import Modal from "@mui/material/Modal";
import DispatchContext from "../Context/DispatchContext";
import StateContext from "../Context/StateContext";

function ChangeSuccess() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  const handleClose = () => {
    appDispatch({ type: "showMenu", data: "none" });
  };
  return (
    <Modal open={appState.visibleMenu === "changeSuccess"} onClose={handleClose}>
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 sm:p-12 shadow shadow-white rounded-xl w-[300px] sm:w-[450px]">
        <i className="fa-solid fa-x text-lg text-[#a3aab5] hover:text-black duration-300 cursor-pointer ml-auto block w-fit" onClick={handleClose}></i>
        <div className="mb-6 flex justify-center bg-[#fdddb6] w-fit p-4 mx-auto rounded-full">
        <i className="fa-solid fa-check text-brownOrange"></i>
        </div>
        <div className="mb-6">
          <h3 className="font-bold text-2xl text-center">Success</h3>
        </div>
        <p className="text-center mb-4">Your password has been successfully reset.</p>
        <button onClick={() => appDispatch({ type: "showMenu", data: "login" })} className="text-white bg-brownOrange block w-full hover:bg-secondary duration-300 sm:text-lg font-semibold py-1 px-8 rounded-3xl">
          Login
        </button>
      </div>
    </div>
  </Modal>
  )
}

export default ChangeSuccess