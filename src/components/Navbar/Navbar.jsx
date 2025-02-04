import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50">
            <div className="bg-[#fff]">
                <div className="lg:w-[970px] lg:m-auto lg:justify-center lg:items-center">
                    <div className="py-5 navbar">
                        <div className="flex-1">
                            <Link to="/">
                                <img
                                    src="/img/parxy.png"
                                    alt=""
                                    className="w-auto h-[40px] align-middle"
                                />
                            </Link>
                        </div>
                        <div className="flex-none">
                            <MonitorNav />
                            <HambugerNav />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const MonitorNav = () => {
    return (
        <div className="max-lg:hidden">
            <ul className="gap-5 text-sm font-semibold menu menu-horizontal">
                <li>
                    <Link to="/" className="px-8">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/project" className="px-8">
                        Project
                    </Link>
                </li>
                <li>
                    <Link to="/product" className="px-8">
                        Product
                    </Link>
                </li>
            </ul>
        </div>
    );
};

const HambugerNav = () => {
    return (
        <div className="lg:hidden navbar-end">
            <div className="dropdown dropdown-end">
                <div
                    tabIndex="0"
                    role="button"
                    className="btn btn-ghost btn-square text-[black]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-5 h-5 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </div>
                <ul
                    tabIndex="0"
                    className="menu menu-sm dropdown-content bg-[#fff] rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/project">Project</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
