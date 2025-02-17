import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProviders";

const Registration = () => {
    const navigate = useNavigate();
    const { createUser, setUser, updateUserProfile, googleSignIn } = useContext(AuthContext);

    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
                const newUser = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                };
                fetch("https://game-verse-server-six.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newUser),
                })
                    .then(response => response.json())
                    .catch(error => {
                        Swal.fire({
                            icon: "error",
                            title: "Failed to save user data",
                            text: error.message,
                        });
                    });

                navigate("/", { replace: true });
                Swal.fire({
                    title: "Good job!",
                    text: "Registration successfully with Google!",
                    icon: "success",
                });
            })
            .catch(err => {
                Swal.fire({
                    title: "Something went wrong!",
                    text: err.message,
                    icon: "error",
                });
            });
    };

    const handleRegister = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photo.value;
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

        createUser(email, password)
            .then(result => {
                setUser(result.user);

                const newUser = { name, email, photo };
                fetch("https://game-verse-server-six.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newUser),
                }).catch(error => {
                    Swal.fire({
                        icon: "error",
                        title: "Failed to save user data",
                        text: error.message,
                    });
                });

                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        Swal.fire({
                            icon: "success",
                            title: "User created successfully",
                            timer: 1500,
                        });
                        navigate("/");
                    })
                    .catch(err => {
                        Swal.fire({
                            icon: "error",
                            title: "Failed to create user",
                            text: err.message,
                        });
                    });
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Failed to create user",
                    text: err.message,
                });
            });
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-10 lg:py-16">
            <div className="card w-full max-w-sm shadow-2xl bg-white dark:bg-gray-800 mx-auto animate__animated animate__bounceInDown">
                <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mt-4">
                    Registration
                </h2>
                <form onSubmit={handleRegister} className="card-body space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-800 dark:text-gray-300">
                                Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered dark:bg-gray-700 dark:text-gray-100"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-800 dark:text-gray-300">
                                Email
                            </span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered dark:bg-gray-700 dark:text-gray-100"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-800 dark:text-gray-300">
                                Photo URL
                            </span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Photo URL"
                            className="input input-bordered dark:bg-gray-700 dark:text-gray-100"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-800 dark:text-gray-300">
                                Password
                            </span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-100"
                                required
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 cursor-pointer text-gray-500 dark:text-gray-300"
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
                        <button
                            type="submit"
                            className="btn bg-blue-600 hover:bg-blue-700 text-white w-full transition-transform duration-300 hover:scale-105 border-none"
                        >
                            Register
                        </button>
                    </div>

                    <div className="mt-4">
                        <button
                            onClick={handleGoogleSignIn}
                            type="button"
                            className="btn w-full flex items-center gap-3 bg-white border text-black dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                            <img
                                src="https://i.ibb.co/WnqDNrk/google.png"
                                alt="Google Icon"
                                className="w-5 h-5"
                            />
                            Continue with Google
                        </button>
                    </div>

                    <div className="mt-2 text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Already have an account?{" "}
                            <Link to="/login" className="link link-hover text-blue-600 dark:text-blue-400 font-bold">
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Registration;
