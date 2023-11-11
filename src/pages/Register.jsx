import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Register() {
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const locationState = useLocation().state;
    const [error, setError] = useState();

    const registerHandler = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const pass = e.target[2].value;
        // reset error
        setError("");
        if (pass.length < 6) {
            setError("Error: Password should be 6+ characters long !");
        } else if (/^[^A-Z]*$/.test(pass)) {
            setError(
                "Error: Password should have at lease one capital letter !"
            );
        } else if (/^[a-zA-Z0-9]*$/.test(pass)) {
            setError(
                "Error: Password should have at lease one special character !"
            );
        }
        if (error === "") {
            toast
                .promise(createUser(email, pass), {
                    loading: "Registering...",
                    success: <b>Registration successful!</b>,
                    error: <b>Could not register.</b>,
                })
                .then((result) => {
                    console.log(result.user);
                    updateUser(result.user, { displayName: name })
                        .then(() => {
                            console.log("User profile created successfully");

                            navigate(locationState ? locationState : "/");
                        })
                        .catch((error) => {
                            console.error(
                                "Error updating user profile:",
                                error
                            );
                            setError(error.message);
                        });
                })
                .catch((error) => {
                    setError(error.message);
                    console.error(error);
                });
        }
    };

    return (
        <>
            <div
                className="hero min-h-screen bg-base-200"
                onSubmit={registerHandler}
            >
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {error && <p className="text-red-700">{error}</p>}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">
                                Register
                            </button>
                        </div>
                        <p>
                            Already have a account ?{" "}
                            <Link
                                className="underline cursor-pointer"
                                to="/login"
                            >
                                log in
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}
