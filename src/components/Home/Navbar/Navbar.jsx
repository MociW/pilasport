const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50">
            <div className="bg-[#fff]">
                <div className="lg:w-[970px] lg:m-auto lg:justify-center lg:items-center">
                    <div className="navbar">
                        <div className="flex-1">
                            <a href="#start">
                                <img
                                    src="/img/parxy.png"
                                    alt="EduSquad Logo - Engineering Education Support for Quality Advancements"
                                    className="w-auto h-[80px] align-middle"
                                />
                            </a>
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
        <div className=" max-lg:hidden">
            <ul className="gap-5 text-sm font-semibold menu menu-horizontal">
                <li>
                    <a href="#about" className="px-8">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#overview" className="px-8">
                        Project
                    </a>
                </li>
                <li>
                    <a href="#training-program" className="px-8">
                        Product
                    </a>
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
                        <a href="#about">Home</a>
                    </li>
                    <li>
                        <a href="#overview">Project</a>
                    </li>
                    <li>
                        <a href="#training-program">Product</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
