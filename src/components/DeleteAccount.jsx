import { useAppContext } from "../Context/AppContext";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { deleteData } from "../Services/APICalls";

import Modal from "@mui/material/Modal";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteAccount = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const { userData, setUserData } = useAppContext();
  const token = localStorage.getItem("userToken");

  const deleteAccount = async () => {
    if (password === "") {
      toast.error("Please enter your password to delete your account.");
      return;
    }

    let temp = await deleteData("users/delete-account", token, { password });
    if (temp.status === 200) {
      toast.info("Account deleted successfully");
      setOpen(false);
      setUserData({ name: "", email: "", phoneNumber: "", address: "", loggedIn: false, visibleMenu: "none" });
      localStorage.removeItem("userToken");
      navigate("/");
    } else {
      toast.error("Account deletion failed, please try again");
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="bg-brownOrange hover:bg-postage duration-300 w-[240px] mx-auto py-2 px-16 text-white rounded-lg">
        {t("deleteAccount")}
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white p-6 sm:p-12 shadow shadow-white rounded-xl w-[300px] sm:w-[450px]">
            <div className={`flex items-center justify-between mb-6  ${selectedLanguage === "ar" ? "flex-row-reverse" : ""}`}>
              <h3 className="font-bold text-2xl">{t("deleteAccount")}</h3>
              <i className="fa-solid fa-x text-lg text-[#a3aab5] hover:text-black duration-300 cursor-pointer" onClick={() => setOpen(false)}></i>
            </div>
            <p className="text-center mb-4">{t("deleteAccountText")}</p>
            <div className="mb-6">
              <p className={`text-[#a3aab5] mb-2 ${selectedLanguage === "ar" ? "text-right" : ""}`}>{t("password")}</p>
              <input onChange={(e) => setPassword(e.target.value)} className={`border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none ${selectedLanguage === "ar" ? "text-right" : ""}`} type="password" placeholder={t("password")} />
            </div>
            <div className="flex items-center justify-center">
              <button onClick={deleteAccount} className="text-white bg-brownOrange hover:bg-postage duration-300 py-2 px-12 rounded-lg">
                {t("delete")}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteAccount;
