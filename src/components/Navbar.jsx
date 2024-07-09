import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { IoMdCreate } from "react-icons/io";

const Navbar = () => {
  const { isAuthenticated, isAdmin } = useContext(AppContext);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "/home", current: false },
    { name: "Services", href: "#", current: false },
    { name: "Pricing", href: "#", current: false },
    { name: "Contact", href: "#", current: false },
  ];

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    navigate("/");
  };

  const toggleSidenav = () => {
    setSidenavOpen(!sidenavOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 w-full shadow-sm z-40">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-normal whitespace-nowrap">
              Career App
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
            onClick={toggleSidenav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-dark md:p-0 ${
                      item.current
                        ? "bg-primary text-white md:bg-transparent md:text-primary"
                        : "text-gray-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {isAuthenticated() ? (
                <>
                  {isAdmin() && (
                    <>
                      <button
                        onClick={() => navigate("/admin/create-blog")}
                        type="button"
                        title="Create New"
                        className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-full text-sm p-2  dark:bg-lime-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-lime-800"
                      >
                        <IoMdCreate />
                      </button>
                    </>
                  )}
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-primary-light font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary dark:hover:bg-primary-dark focus:outline-none dark:focus:ring-primary-dark"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  type="button"
                  className="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-primary-light font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary dark:hover:bg-primary-dark focus:outline-none dark:focus:ring-primary-dark"
                >
                  Login
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {/*----------- Sidenav Overlay -------------------*/}
      {sidenavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleSidenav}
        ></div>
      )}
      {/* Sidenav */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          sidenavOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-500 focus:outline-none"
          onClick={toggleSidenav}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col mt-8 p-4">
          {navItems.map((item, index) => (
            <li key={index} className="mb-2">
              <Link
                to={item.href}
                className={`block py-2 px-4 rounded hover:bg-primary-light ${
                  item.current ? "bg-primary text-white" : "text-gray-900"
                }`}
                onClick={toggleSidenav}
              >
                {item.name}
              </Link>
            </li>
          ))}
          {isAuthenticated() ? (
            <>
              {isAdmin() && (
                <button
                  onClick={() => {
                    navigate("/admin/create-blog");
                    toggleSidenav();
                  }}
                  type="button"
                  className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-2.5 py-1  dark:bg-lime-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-lime-800"
                >
                  Create New
                </button>
              )}
              <button
                onClick={() => {
                  handleLogout();
                  toggleSidenav();
                }}
                type="button"
                className="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-primary-light font-medium rounded-lg text-sm px-5 py-2.5 mt-2 dark:bg-primary dark:hover:bg-primary-dark focus:outline-none dark:focus:ring-primary-dark"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                toggleSidenav();
              }}
              type="button"
              className="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-primary-light font-medium rounded-lg text-sm px-5 py-2.5 mt-2 dark:bg-primary dark:hover:bg-primary-dark focus:outline-none dark:focus:ring-primary-dark"
            >
              Login
            </button>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
