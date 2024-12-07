import { Link, useLocation, useNavigate } from "react-router-dom";
import 'animate.css';
import { useContext, useState } from "react";
import Swal from 'sweetalert2';
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {
    const [email, setEmail] = useState("");
    const { signInUser, setUser, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user);
                const redirectPath = location.state || "/";
                navigate(redirectPath, { replace: true });
                Swal.fire({
                    title: "Good job!",
                    text: "Logged in successfully!",
                    icon: "success"
                });
            })
            .catch(err => {
                Swal.fire({
                    title: "Something went wrong!",
                    text: err.message,
                    icon: "error"
                });
            });
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (!/[0-9]/.test(password)) {
            setPasswordError("Password must include at least one number.");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must include at least one uppercase letter.");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setPasswordError("Password must include at least one lowercase letter.");
            return;
        }
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long.");
            return;
        }
        setPasswordError("");

        signInUser(email, password)
            .then(result => {
                setUser(result.user);
                const redirectPath = location.state || "/";
                navigate(redirectPath, { replace: true });
                Swal.fire({
                    title: "Good job!",
                    text: "Logged in successfully!",
                    icon: "success"
                });
            })
            .catch(err => {
                Swal.fire({
                    title: "Something went wrong!",
                    text: err.message,
                    icon: "error"
                });
            });
    };

    return (
        <section className="bg-base-100 py-36">
            <div className="card w-full max-w-sm shadow-2xl mx-auto animate__animated animate__bounceInDown animate__slow">
                <h2 className="text-3xl font-bold text-center p-5 text-c3">Login</h2>
                <form onSubmit={handleLogin} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="input input-bordered"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="input input-bordered w-full"
                                required
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                            >
                                {showPassword ? (
                                    <i className="fa-solid fa-eye-slash"></i>
                                ) : (
                                    <i className="fa-solid fa-eye"></i>
                                )}
                            </span>
                        </div>
                        {passwordError && (
                            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                        )}
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-blue-600 text-white">
                            Login
                        </button>
                    </div>

                    <div className="mt-4">
                        <button
                            onClick={handleGoogleSignIn}
                            type="button"
                            className="btn w-full flex items-center gap-3 bg-white border text-black hover:bg-gray-200"
                        >
                            <img
                                src="https://i.ibb.co/WnqDNrk/google.png"
                                alt="Google Icon"
                                className="w-5 h-5"
                            />
                            Continue with Google
                        </button>
                    </div>

                    <div className="mt-4 text-center">
                        <p className="text-sm">
                            Don&apos;t have an account?{" "}
                            <Link to="/register" className="link link-hover text-c2 font-bold">
                                Register
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;
