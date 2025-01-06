import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "../providers/ThemeProvider";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const handleToggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "Logged out successfully!",
                    icon: "success",
                });
            })
            .catch((error) => {
                Swal.fire({
                    title: "Something went wrong!",
                    text: error.message,
                    icon: "error",
                });
            });
    };

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/reviews">All Reviews</NavLink></li>
            <li><NavLink to="/addreview">Add Review</NavLink></li>
            {user && (
                <>
                    <li><NavLink to="/myreviews">My Reviews</NavLink></li>
                    <li><NavLink to="/mywatchlist">My WatchList</NavLink></li>
                </>
            )}
            <li><NavLink to="/about">About Us</NavLink></li>
        </>
    );

    return (
        <section className="dark:bg-gray-900 bg-base-100 sticky top-0 z-10">
            <div className="navbar container mx-auto dark:bg-gray-900 dark:text-gray-200 lg:px-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
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
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>

                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        gameVerse
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
                </div>

                <div className="navbar-end">
                    <div className="flex gap-4 items-center">
                        {user ? (
                            <div className="dropdown dropdown-end">
                                <label
                                    tabIndex={0}
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div
                                        className="w-12 rounded-full"
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content={user.displayName || "User"}
                                        data-tooltip-place="bottom"
                                    >
                                        <img
                                            src={user.photoURL || "https://via.placeholder.com/150"}
                                            alt="User Avatar"
                                        />
                                    </div>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 rounded-box mt-3 w-52 p-2 shadow z-10"
                                >
                                    <li>
                                        <span className="font-bold">
                                            Hello, {user.displayName || "User"}!
                                        </span>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleLogout}
                                            className="btn btn-ghost dark:bg-gray-700"
                                        >
                                            Log Out
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <span className="flex gap-2">
                                <Link to="/login" className="btn btn-ghost">
                                    Login
                                </Link>
                                <Link to="/register" className="btn btn-ghost">
                                    Register
                                </Link>
                            </span>
                        )}
                        <div>
                            <button onClick={handleToggleDarkMode} className="btn btn-ghost btn-circle btn-sm">
                                {
                                    darkMode ? <MdOutlineLightMode className="text-xl" /> : <MdOutlineDarkMode className="text-xl" />
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Tooltip
                id="my-tooltip"
                style={{ zIndex: 1 }}
            />
        </section>
    );
};

export default Navbar;
