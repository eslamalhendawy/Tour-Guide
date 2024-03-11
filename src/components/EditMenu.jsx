import { useState } from "react";
import { useAppContext } from "../Context/AppContext";
import { useTranslation } from "react-i18next";
import { updateData } from "../Services/APICalls";

import settingImg from "/assets/profile2.png";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditMenu = () => {
  const token = localStorage.getItem("userToken");
  const { userData, setUserData } = useAppContext();
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber);
  const [address, setAddress] = useState(userData.address);
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  const regEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const regNumbers = /^\d+$/;

  const updateProfile = async () => {
    if (name.trim() === "") {
      toast.error("Please enter your name");
      return;
    }
    if (email.trim() === "") {
      toast.error("Please enter your email");
      return;
    }
    if (!regEmail.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }
    // if(phoneNumber === "" ){
    //   toast.error("Please enter your phone number");
    //   return;
    // }
    // if(!regNumbers.test(phoneNumber)){
    //   toast.error("Please enter a valid phone number");
    //   return;
    // }
    if (address === "" || address === undefined) {
      toast.error("Please enter your address");
      return;
    }
    let temp = await updateData("users/edit-profile", { name, email, address }, token);
    if (temp.status === 200) {
      toast.success("Profile updated successfully");
      setUserData({ ...userData, name: temp.data.data.user.name, email: temp.data.data.user.email, address: temp.data.data.user.address });
    }
  };

  return (
    <div className="bg-[#032730] px-4 py-6 rounded-lg ">
      <div className="flex flex-col lg:flex-row gap-6 mb-4">
        <div>
          <div className="flex flex-col gap-3 mb-4">
            <span className={`text-brownOrange font-semibold text-lg ${selectedLanguage === "ar" && "text-right"}`}>{t("fullname")}</span>
            <input value={name} onChange={(e) => setName(e.target.value)} className={`bg-postage p-3 rounded-xl outline-none text-white ${selectedLanguage === "ar" && "text-right"}`} type="text" placeholder={t("fullname")} />
          </div>
          <div className="flex flex-col gap-3 mb-4">
            <span className={`text-brownOrange font-semibold text-lg ${selectedLanguage === "ar" && "text-right"}`}>{t("email")}</span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className={`bg-postage p-3 rounded-xl outline-none text-white ${selectedLanguage === "ar" && "text-right"}`} type="text" placeholder={t("email")} />
          </div>
          {/* <div className="flex flex-col gap-3 mb-4">
            <span className={`text-brownOrange font-semibold text-lg ${selectedLanguage === "ar" && "text-right"}`}>{t("phonenumber")}</span>
            <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className={`bg-postage p-3 rounded-xl outline-none text-white ${selectedLanguage === "ar" && "text-right"}`} type="text" placeholder={t("phonenumber")} />
          </div> */}
          <div className="flex flex-col gap-3">
            <span className={`text-brownOrange font-semibold text-lg ${selectedLanguage === "ar" && "text-right"}`}>{t("address")}</span>
            <input value={address} onChange={(e) => setAddress(e.target.value)} className={`bg-postage p-3 rounded-xl outline-none text-white ${selectedLanguage === "ar" && "text-right"}`} type="text" placeholder={t("address")} />
          </div>
        </div>
        <div className="flex ic justify-center">
          <img src={settingImg} alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button onClick={updateProfile} className="bg-brownOrange hover:bg-postage duration-300 text-white py-3 px-12 rounded-lg">
          {t("save")}
        </button>
      </div>
    </div>
  );
};

export default EditMenu;
