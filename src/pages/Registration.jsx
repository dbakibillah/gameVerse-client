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
                setUser(result.user);
                navigate(location.state?.from?.pathname || "/", { replace: true });
                Swal.fire({
                    title: "Good job!",
                    text: "Registration successfully!",
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
    }

    const handleRegister = (event) => {
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
            .then((result) => {
                setUser(result.user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        Swal.fire({
                            position: "middle",
                            icon: "success",
                            title: "User created successfully",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        navigate("/");
                    })
                    .catch((err) => {
                        Swal.fire({
                            icon: "error",
                            title: "Failed to create user",
                            text: err.message,
                            confirmButtonText: "Try again",
                        });
                    });
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Failed to create user",
                    text: err.message,
                    confirmButtonText: "Try again",
                });
            });
    };

    return (
        <section className="bg-base-100 p-2 py-10 lg:py-16">
            <div className="card w-full max-w-sm shadow-2xl mx-auto animate__animated animate__bounceInDown animate__slow">
                <h2 className="text-3xl font-bold text-center text-c3 mt-4">Registration</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
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
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Photo URL"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
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
                        <button type="submit" className="btn bg-c3 text-white">
                            Registration
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

                    <div className="mt-2">
                        <p className="text-center text-sm">
                            Already have an account?{" "}
                            <Link to="/login" className="link link-hover text-c2 font-bold">
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
