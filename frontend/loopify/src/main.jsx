import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../src/styles/extra.css";
import "../src/styles/swiperStyles.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId =
  "394954289615-hgk85f9ul09op4flt4evf7ngpdaomb8a.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={clientId}>
    <App />
  </GoogleOAuthProvider>
);
