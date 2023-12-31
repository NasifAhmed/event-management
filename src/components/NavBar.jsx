import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

export default function NavBar() {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const Links = (
        <Fragment>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/process">Process</NavLink>
            </li>
            <li>
                <NavLink to="/about">About Us</NavLink>
            </li>
        </Fragment>
    );

    const logoutHandler = () => {
        toast
            .promise(logOut(), {
                loading: "Logging out...",
                success: <b>Log out successful!</b>,
                error: <b>Could not log out.</b>,
            })
            .then()
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <div className="navbar bg-base-100 mb-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {Links}
                        </ul>
                    </div>
                    <a
                        className="btn btn-ghost normal-case text-xl"
                        onClick={() => navigate("/")}
                    >
                        Techmania
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{Links}</ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <>
                            <div className="flex mr-3">
                                <img src={user.photoURL} />
                                <h1>{user.displayName}</h1>
                            </div>
                            <a className="btn" onClick={logoutHandler}>
                                Log Out
                            </a>
                        </>
                    ) : (
                        <a className="btn" onClick={() => navigate("/login")}>
                            Log In
                        </a>
                    )}
                </div>
            </div>
        </>
    );
}
