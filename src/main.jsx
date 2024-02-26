import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./Context/AppContext.jsx";

import i18n from "i18next";
import enTranslation from "./locales/en.json";
import arTranslation from "./locales/ar.json";
import { I18nextProvider } from "react-i18next";

const localLanguage = localStorage.getItem("language");
const selectedLanguage = localLanguage ? localLanguage : "en";

i18n.init({
  interpolation: { escapeValue: false },
  lng: selectedLanguage,
  resources: {
    en: {
      translation: enTranslation,
    },
    ar: {
      translation: arTranslation,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  </AppProvider>
);
