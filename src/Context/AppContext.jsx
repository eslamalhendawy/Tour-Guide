import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    avatar: "",
    visibleMenu: "none",
    favoritePlaces: [],
    favoriteArticles: [],
    userTrip: [],
    loggedIn: false,
  });
  return <AppContext.Provider value={{ userData, setUserData }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
