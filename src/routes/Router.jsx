import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Test from "../pages/Test";
import ServiceDetails from "../pages/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import About from "../pages/About";
import Process from "../pages/Process";
import NotFound from "../pages/NotFound";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <LogIn />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/process",
                element: (
                    <PrivateRoute>
                        <Process />
                    </PrivateRoute>
                ),
            },
            {
                path: "/about",
                element: (
                    <PrivateRoute>
                        <About />
                    </PrivateRoute>
                ),
            },
            {
                path: "/service/:id",
                element: (
                    <PrivateRoute>
                        <ServiceDetails />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);
