import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

import Modal from "@mui/material/Modal";

import { updateData } from "../Services/APICalls";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import key from "/assets/Vector.png";

const ChangePassword = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("userToken");
  const { setUserData } = useAppContext();

  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const changePassword = async () => {
    if (currentPassword === "") {
      toast.error("Enter your current password");
      return;
    }
    if (newPassword === "") {
      toast.error("Enter your new password");
      return;
    }
    if (confirmPassword === "") {
      toast.error("Confirm your current password");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
    let temp = await updateData("users/change-password", { currentPassword, newPassword, confirmPassword }, token);
    if (temp.status === 200) {
      toast.success("Password changed successfully");
      setOpen(false);
      setUserData({ name: "", email: "", phoneNumber: "", address: "", visibleMenu: "none", loggedIn: false });
      navigate("/");
    } else {
      toast.error("Password change failed, please try again");
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="bg-brownOrange hover:bg-postage duration-300 py-2  w-[240px] mx-auto text-white rounded-lg">
        {t("changePassword")}
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white p-6 sm:p-12 shadow shadow-white rounded-xl w-[300px] sm:w-[450px]">
            <i className="fa-solid fa-x text-lg text-[#a3aab5] hover:text-black duration-300 cursor-pointer ml-auto block w-fit" onClick={() => setOpen(false)}></i>
            <div className="mb-6 flex justify-center bg-[#fdddb6] w-fit p-4 mx-auto rounded-full">
              <img src={key} alt="key" />
            </div>
            <div className="mb-6">
              <h3 className="font-bold text-2xl text-center">{t("setnewpassword")}</h3>
            </div>
            <p className="text-center mb-4">{t("yournewpassword")}</p>
            <div className="mb-3">
              <p className={`text-[#a3aab5] mb-2 ${selectedLanguage === "ar" ? "text-right" : ""}`}>{t("currentPassword")}</p>
              <input onChange={(e) => setCurrentPassword(e.target.value)} className={`border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none ${selectedLanguage === "ar" ? "text-right" : ""}`} type="password" placeholder={t("currentPassword")} />
            </div>
            <div className="mb-4">
              <p className={`text-[#a3aab5] mb-2 ${selectedLanguage === "ar" ? "text-right" : ""}`}>{t("newpassword")}</p>
              <input onChange={(e) => setNewPassword(e.target.value)} className={`border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none ${selectedLanguage === "ar" ? "text-right" : ""}`} type="password" placeholder={t("newpassword")} />
            </div>
            <div className="mb-3">
              <p className={`text-[#a3aab5] mb-2 ${selectedLanguage === "ar" ? "text-right" : ""}`}>{t("confirmpassword")}</p>
              <input onChange={(e) => setConfirmPassword(e.target.value)} className={`border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none ${selectedLanguage === "ar" ? "text-right" : ""}`} type="password" placeholder={t("confirmpassword")} />
            </div>
            <button onClick={changePassword} className="text-white bg-brownOrange block w-full hover:bg-secondary duration-300 sm:text-lg font-semibold py-1 px-8 rounded-3xl">
              {t("changePassword")}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ChangePassword;
