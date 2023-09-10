import React from "react";
import ReactDOM from "react-dom/client";
import GlobalProvider from "./providers/GlobalProvider";
import { BrowserRouter } from "react-router-dom";
import './assets/css/app.css'


ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <GlobalProvider />
    </BrowserRouter>
);
