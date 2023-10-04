import React from "react";
import { Box, Gear, Logo } from "../assets/Icons";
import { useAuth } from "../helpers/authContext";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
const DashBoard = () => {
  const { user } = useAuth();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="antialiased">
      <nav className="bg-white border-b border-white px-4 py-2.5 dark:bg-indigo-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button
              data-drawer-target="drawer-navigation"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
              className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                aria-hidden="true"
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <a
              href="https://flowbite.com"
              className="flex items-center justify-between mr-4"
            >
              <Logo class="w-10 h-10 stroke-white" />
            </a>
            <aside class="w-10 h-10 stroke-white" />
          </div>
          <p className="font-medium text-white">{user ? user.email : ""}</p>
        </div>
      </nav>
      {/* Sidebar */}
      <aside
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-indigo-800 dark:border-gray-700"
        aria-label="Sidenav"
        id="drawer-navigation"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-indigo-800">
          <form action="#" method="GET" className="md:hidden mb-2">
            <label htmlFor="sidebar-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="search"
                id="sidebar-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
              />
            </div>
          </form>
          <ul className="space-y-2">
            <li>
              <Link
                to="/dashboard/settings"
                className={
                  "flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white dark:hover:bg-white [&.active]:bg-white [&.active]:text-black dark:hover:text-black group" +
                  `${
                    location.pathname == "/dashboard/settings" ? " active" : ""
                  }`
                }
              >
                <Gear />
                <span className="ml-3">Settings</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/calculators"
                className={
                  "flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white dark:hover:bg-white dark:hover:text-black group [&.active]:bg-white [&.active]:text-black" +
                  `${
                    location.pathname == "/dashboard/calculators"
                      ? " active"
                      : ""
                  }`
                }
              >
                <Box />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Calculators
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <main className="p-4 md:ml-64 h-auto pt-20 relative">
        <Outlet />
      </main>
    </div>
  );
};

export default DashBoard;
