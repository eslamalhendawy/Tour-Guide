import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { getData } from "./Services/APICalls";
import { useAppContext } from "./Context/AppContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Search from "./components/Search";
import Sinuhe from "./components/Sinuhe";
import Events from "./components/Events";
import Place from "./components/Place";
import Profile from "./components/Profile";
import Article from "./components/Article";
import Trips from "./components/Trips";
import Trip from "./components/Trip";
import ArticlesPage from "./components/ArticlesPage";
import PlacesPage from "./components/PlacesPage";

import "./App.css";

function App() {
  const loggedIn = Boolean(localStorage.getItem("userToken"));
  const { setUserData } = useAppContext();
  useEffect(() => {
    if (loggedIn) {
      getData("users/get-profile", localStorage.getItem("userToken"))
        .then((response) => {
          setUserData({ name: response.data.user.name, email: response.data.user.email, address: response.data.user.address, avatar: response.data.user.avatar, favoritePlaces: response.data.user.favoritePlaces, favoriteArticles: response.data.user.favoriteArticles, userTrip: response.data.user.userTrips, loggedIn: true, visibleMenu: "none" });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/search" element={<Search />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/places" element={<PlacesPage />} />
          <Route path="/event/:id" element={<Events />} />
          <Route path="/place/:id" element={<Place />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/trip/:id" element={<Trip />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer autoClose={2500} theme="dark" newestOnTop={true} />
    </>
  );
}

export default App;
