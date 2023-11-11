import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function LogIn() {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const locationState = useLocation().state;
    const [error, setError] = useState();

    const loginHandler = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const pass = e.target[1].value;
        // reset error
        setError("");

        toast
            .promise(signIn(email, pass), {
                loading: "Logging in...",
                success: <b>Log in successful!</b>,
                error: <b>Could not log in.</b>,
            })
            .then((result) => {
                console.log(result.user);
                navigate(locationState ? locationState : "/");
            })
            .catch((error) => {
                setError(error.message);
                console.error(error);
            });
    };

    const googleHandler = () => {
        // reset error
        setError("");

        toast
            .promise(googleSignIn(), {
                loading: "Logging in...",
                success: <b>Log in successful!</b>,
                error: <b>Could not log in.</b>,
            })
            .then((result) => {
                console.log(result.user);
                navigate(locationState ? locationState : "/");
            })
            .catch((error) => {
                setError(error.message);
                console.error(error);
            });
    };

    return (
        <>
            <div
                className="hero min-h-screen bg-base-200"
                onSubmit={loginHandler}
            >
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>
                            Already have a account ?{" "}
                            <Link
                                className="underline cursor-pointer"
                                to="/register"
                            >
                                register
                            </Link>
                        </p>
                    </form>
                    <div className="flex flex-col items-center">
                        <div className="divider">OR</div>
                        <button
                            className="btn btn-primary"
                            onClick={googleHandler}
                        >
                            Google Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
