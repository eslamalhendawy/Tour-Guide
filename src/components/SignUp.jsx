import { useState } from "react";
import { useAppContext } from "../Context/AppContext";
import { useTranslation } from "react-i18next";
import Modal from "@mui/material/Modal";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { postData } from "../Services/APICalls";

function SignUp() {
  const { userData, setUserData } = useAppContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const { t, i18n } = useTranslation();
  const selectedLangauge = i18n.language;
  const regEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

  const handleOpen = () => {
    setUserData({ ...userData, visibleMenu: "signup" });
  }

  const handleClose = () => {
    setUserData({ ...userData, visibleMenu: "none" });
  }

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
      setUserData({ name: temp.data.user.name, email: temp.data.user.email, loggedIn: true, visibleMenu: "none" });
      toast.success("Account created successfully");
    }else{
      console.log(temp);
      toast.error("Sign Up failed, try again later");
    }
  }

  return (
    <div>
      <button onClick={handleOpen} className="bg-brownOrange border border-postage text-postage hover:bg-postage hover:text-white duration-300 xl:text-lg font-base py-1 px-8 rounded-lg">
        {t("signup")}
      </button>
      <Modal open={userData.visibleMenu === "signup"} onClose={handleClose}>
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white p-6 sm:p-12 shadow shadow-white rounded-xl w-[300px] sm:w-[450px]">
            <div className={`flex items-center justify-between mb-6 ${selectedLangauge === "ar" && "flex-row-reverse"}`}>
              <h3 className="font-bold text-2xl">{t("createaccount")}</h3>
              <i className="fa-solid fa-x text-lg text-[#a3aab5] hover:text-black duration-300 cursor-pointer" onClick={handleClose}></i>
            </div>
            <div className="mb-3">
              <p className={`text-[#a3aab5] mb-2 ${selectedLangauge === "ar" ? "text-right" : ""}`}>{t("name&surname")}</p>
              <input onChange={(e) => setName(e.target.value)} className={`border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none ${selectedLangauge === "ar" ? "text-right" : ""}`} type="text" placeholder={t("name&surname")} />
            </div>
            <div className="mb-3">
              <p className={`text-[#a3aab5] mb-2 ${selectedLangauge === "ar" ? "text-right" : ""}`}>{t("email")}</p>
              <input onChange={(e) => setEmail(e.target.value)} className={`border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none ${selectedLangauge === "ar" ? "text-right" : ""}`} type="text" placeholder={t("email")} />
            </div>
            <div className="mb-3">
              <p className={`text-[#a3aab5] mb-2 ${selectedLangauge === "ar" ? "text-right" : ""}`}>{t("password")}</p>
              <input onChange={(e) => setPassword(e.target.value)} className={`border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none ${selectedLangauge === "ar" ? "text-right" : ""}`} type="password" placeholder={t("password")} />
            </div>
            <div className="mb-3">
              <p className={`text-[#a3aab5] mb-2 ${selectedLangauge === "ar" ? "text-right" : ""}`}>{t("confirmpassword")}</p>
              <input onChange={(e) => setConfirmPass(e.target.value)} className={`border border-[#a3aab5] p-2 rounded-lg block w-full focus:outline-none ${selectedLangauge === "ar" ? "text-right" : ""}`} type="password" placeholder={t("confirmpassword")} />
            </div>
            <div className={`mb-3 flex items-center gap-3 ${selectedLangauge === "ar" && "flex-row-reverse"}`}>
              <input type="checkbox" name="" id="" />
              <p>
                {t("iagreewith")} <span className="text-brownOrange">{t("terms")}</span> {t("and")} <span className="text-brownOrange">{t("privacy")}</span>
              </p>
            </div>
            <button onClick={handleSignUp} className="text-white mb-2 bg-brownOrange block w-full hover:bg-secondary duration-300 sm:text-lg font-semibold py-1 px-8 rounded-3xl">{t("signup")}</button>
            <p className="text-center text-[#a3aab5] mb-2">{t("or")}</p>
            <div className="text-[#a3aab5] border border-[#a3aab5] flex items-center w-full sm:text-lg font-semibold py-1 px-4 rounded-3xl  mb-2">
              <i className="fab fa-google mr-2"></i>
              <p className="ml-12">{t("signupwithgoogle")}</p>
            </div>
            <div className={`flex justify-center gap-2 ${selectedLangauge === "ar" && "flex-row-reverse"}`}>
              <p>{t("alreadyhaveaccount")}</p>
              <button onClick={() => setUserData({ ...userData, visibleMenu: "login" })} className="text-brownOrange hover:text-secondary duration-300  font-medium">
                {t("signin")}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SignUp;
