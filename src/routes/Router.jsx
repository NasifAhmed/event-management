import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Test from "../pages/Test";
import ServiceDetails from "../pages/ServiceDetails";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/test",
                element: <Test />,
            },
            {
                path: "/service/:id",
                element: <ServiceDetails />,
            },
        ],
    },
]);
