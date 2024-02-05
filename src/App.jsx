import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useImmerReducer } from "use-immer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import StateContext from "./Context/StateContext";
import DispatchContext from "./Context/DispatchContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

import "./App.css";

function App() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("userToken")),
    visibleMenu: "none",
  };
  function myReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true;
        break;
      case "logout":
        draft.loggedIn = false;
        localStorage.clear();
        break;
      case "showMenu":
        draft.visibleMenu = action.data;
    }
  }

  const [state, dispatch] = useImmerReducer(myReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </Router>
        <ToastContainer autoClose={2500} theme="dark" newestOnTop={true} />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
