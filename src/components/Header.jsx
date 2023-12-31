"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white border-gray-200 dark:bg-gray-900">
      <div className="2xl:max-w-screen-2xl max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <ScrollLink
          to="apresentacao"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
        >
          <img
            src="https://yt3.googleusercontent.com/ytc/APkrFKbFrfSQsg2ONo-x3zYGGg_tpxPzsqXrw73B58P61A=s900-c-k-c0x00ffffff-no-rj"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-black text-red-600 whitespace-nowrap dark:text-white">
            Selfit by Derick
          </span>
        </ScrollLink>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${menuOpen ? "block" : "hidden"}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="cursor-pointer">
              <ScrollLink
                to="apresentacao"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              >
                Home
              </ScrollLink>
            </li>
            <li className="cursor-pointer">
              <ScrollLink
                to="conhecimentos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Conhecimentos
              </ScrollLink>
            </li>
            <li className="cursor-pointer">
              <ScrollLink
                to="experiencia"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Experiências
              </ScrollLink>
            </li>
            <li className="cursor-pointer">
              <ScrollLink
                to="contato"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contato
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

