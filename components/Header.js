import React, { useState } from "react";
import Link from "next/link";
import Banner from "./Banner";

export default function Header() {
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <header id="header" className="bg-white">
      <nav className="container flex flex-wrap items-center justify-between mx-auto py-3">
        <Link
          href="/"
          className="flex items-center space-x-3 "
        >
          <img src="/logo_top.svg" className="w-56 md:w-full h-14" alt="APIDays" />
        </Link>
        <button
          onClick={() => {
            setDisplayNav(!displayNav);
          }}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
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
          className={`${displayNav ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col  md:p-0 mt-4   rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white text-nav ">
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 rounded md:bg-transparent  md:p-0 text-nav "
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="https://airtable.com/appObH1ILShMbYp30/pagMQR4dALkHUDMBS/form"
                target="_blank"
                className="block text-[#083ECB] py-2 px-3 text-nav rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                ADD YOUR API TOOL
              </Link>
            </li>
            <li>
              <Link
                href="https://airtable.com/appObH1ILShMbYp30/shrubDVNRrBRF8I0s"
                target="_blank"
                className="block text-[#083ECB] py-2 px-3 text-nav  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                REPORT A BUG
              </Link>
            </li>
            <li>
              <Link
                href="https://airtable.com/appObH1ILShMbYp30/shrubDVNRrBRF8I0s"
                className="block text-[#083ECB] py-2 px-3 text-nav rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                target="_blank"
             >
                NEW FEATURE IDEA
              </Link>
            </li>
            <li>
              <Link
                href="https://www.apidays.global/"
                target="_blank"
                className="block text-[#083ECB] py-2 px-3 text-nav rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                APIDAYS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
     <Banner />
    </header>
  );
}
