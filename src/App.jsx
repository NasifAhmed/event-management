import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function App() {
    return (
        <div className="max-w-screen-xl mx-auto space-y-8">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster position="bottom-center" reverseOrder={false} />
        </div>
    );
}
