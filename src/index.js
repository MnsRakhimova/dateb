import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SitebarItem from "./NavigationBar/SitebarItem";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SitebarItem />
  </React.StrictMode>
);
