import React from "react";
import ReactDOM from "react-dom/client";
import GlobalProvider from "./providers/GlobalProvider";
import { HashRouter } from "react-router-dom";
import './assets/css/app.css'


ReactDOM.createRoot(document.getElementById("root")).render(
    <HashRouter>
        <GlobalProvider />
    </HashRouter>
);
