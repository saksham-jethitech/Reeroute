import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  const handleClick = () => {
    // setAllLinksToInactive();
    window.scroll(0, 0);
  };

  const handleHowItWorkClick = () => {
    setTimeout(() => {
      const howItWorksSection = document.getElementById("how-it-works");
      if (howItWorksSection) {
        howItWorksSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const location = useLocation();

  return (
    <nav
      className={`w-full  ${
        navbar ? "bg-black" : scrolled ? "bg-black" : "bg-transparent "
      }   fixed  z-10`}
    >
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <img src="/Assets/logo.png" className="h-9" />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-20 md:space-y-0 ">
              <li>
                <NavLink
                  to="/"
                  onClick={handleClick}
                  className={`${
                    location.pathname == "/"
                      ? `border-b-4 border-white rounded`
                      : ``
                  } text-white hover:border-b-4 pb-1 hover:border-white hover:rounded font-semibold font-krub text-base`}
                >
                  Shipper
                </NavLink>
              </li>
              <li>
                <Link
                  to="/trucker"
                  onClick={handleClick}
                  className={`${
                    location.pathname == "/trucker"
                      ? `border-b-4 border-white rounded`
                      : `text-white`
                  } text-white hover:border-b-4 pb-1 hover:border-white hover:rounded font-semibold font-krub text-base`}
                >
                  Trucker
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutUs"
                  onClick={handleClick}
                  className={`${
                    location.pathname == "/aboutUs"
                      ? `border-b-4 border-white rounded`
                      : `text-white`
                  } text-white hover:border-b-4 pb-1 hover:border-white hover:rounded font-semibold font-krub text-base`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={`${
                    location.pathname == "/how-it-works"
                      ? `border-b-4 border-white rounded`
                      : `text-white`
                  } text-white hover:border-b-4 pb-1 hover:border-white hover:rounded font-semibold font-krub text-base`}
                  onClick={handleHowItWorkClick}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <NavLink
                  // onClick={handleGetApp}
                  to="/contactUs"
                  onClick={handleClick}
                  className={`${
                    location.pathname == "/contactUs"
                      ? `border-b-4 border-white rounded`
                      : `text-white`
                  } text-white hover:border-b-4 pb-1 hover:border-white hover:rounded font-semibold font-krub text-base`}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
