import { useState, useRef } from "react";
import { useAppContext } from "../Context/AppContext";
import { useTranslation } from "react-i18next";

import { updateData } from "../Services/APICalls";
import Modal from "@mui/material/Modal";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateAvatar = () => {
  const token = localStorage.getItem("userToken");
  const { userData, setUserData } = useAppContext();
  const fileInput = useRef(null);
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  const [newImage, setNewImage] = useState(null);
  const [open, setOpen] = useState(false);

  const updateHandler = async () => {
    if (newImage === null) {
      toast.error("Please select an image to upload");
      return;
    }
    toast.info("Updating profile image, please wait...");
    const formData = new FormData();
    formData.append("avatar", newImage);
    let temp = await updateData("users/edit-profile", formData, token);
    if (temp.status === 200) {
      setUserData({ ...userData, avatar: temp.data.data.user.avatar });
      toast.success("Profile image updated successfully");
      setOpen(false);
    } else {
      toast.error("Profile image update failed, please try again");
    }
  };
  return (
    <>
      <div className="mt-[-50px] relative">
        {userData.avatar === "default.jpg" ? (
          <div className="size-[130px] md:size-[230px] rounded-full bg-white flex items-center justify-center capitalize">
            <span className="text-brownOrange text-6xl">{userData.name[0]}</span>
          </div>
        ) : (
          <img className="size-[130px] md:size-[230px] rounded-full" src={userData.avatar} alt="" />
        )}
        <div onClick={() => setOpen(true)} className="absolute right-0 top-[70%] bg-white size-[30px] flex justify-center items-center rounded-full group cursor-pointer">
          <i className="fa-solid fa-pen text-postage group-hover:text-brownOrange duration-300"></i>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white p-6 sm:p-12 shadow shadow-white rounded-xl w-[300px] sm:w-[450px]">
            <div className={`flex items-center justify-between mb-6 ${selectedLanguage === "ar" && "flex-row-reverse"}`}>
              <h3 className="font-bold text-2xl">{t("updateProfileImage")}</h3>
              <i className="fa-solid fa-x text-lg text-[#a3aab5] hover:text-black duration-300 cursor-pointer" onClick={() => setOpen(false)}></i>
            </div>
            <div className={`flex flex-col mb-6 ${selectedLanguage === "ar" ? "items-end" : "items-start"}`}>
              <p className={`text-[#a3aab5] mb-2 ${selectedLanguage === "ar" ? "text-right" : ""}`}>{t("chooseNewImage")}</p>
              <button onClick={() => fileInput.current.click()} className="bg-brownOrange hover:bg-postage duration-200 text-white py-2 px-6 rounded-xl font-semibold">
                {t("upload")}
              </button>
              <input className="hidden" type="file" ref={fileInput} onChange={(e) => setNewImage(e.target.files[0])} />
            </div>
            <div className="flex items-center justify-center">
              <button onClick={updateHandler} className="bg-brownOrange hover:bg-postage duration-200 text-white py-2 px-6 rounded-xl font-semibold">
                {t("update")}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateAvatar;
