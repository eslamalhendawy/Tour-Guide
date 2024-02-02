import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

import "./App.css";

function App() {
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
