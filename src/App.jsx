import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { getData } from "./Services/APICalls";
import { useAppContext } from "./Context/AppContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

import "./App.css";

function App() {
  const loggedIn = Boolean(localStorage.getItem("userToken"));
  const { setUserData } = useAppContext();
  useEffect(() => {
    if (loggedIn) {
      getData("users/get-profile", localStorage.getItem("userToken"))
        .then((response) => {
          console.log(response);
          setUserData({ name: response.data.user.name, email: response.data.user.email , loggedIn: true});
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer autoClose={2500} theme="dark" newestOnTop={true} />
    </div>
  );
}

export default App;
