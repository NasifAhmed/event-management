import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/Router.jsx";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <React.StrictMode>
            <RouterProvider router={Router} />
        </React.StrictMode>
    </AuthProvider>
);
