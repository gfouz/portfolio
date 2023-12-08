'use client';
import React from 'react';
import HamburgerIcon from 'components/icons/HamburgerIcon';

const HamburgerMenu = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/images/fouz-logo.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Giovani Fouz
          </span>
        </a>
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="group relative me-2 inline-flex items-center justify-center  overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800 md:hidden"
        >
          <span className="relative rounded-md bg-white px-6 py-1 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
            {open ? 'close' : 'open'}
          </span>
        </button>
        <div
          className={
            open
              ? 'w-full md:block md:w-auto'
              : 'hidden w-full md:block md:w-auto'
          }
          id="navbar-solid-bg"
        >
          <ul className="mt-4 flex flex-col rounded-lg bg-gray-50 text-left font-medium rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:dark:bg-transparent">
            <li>
              <a
                href="#"
                className="block rounded px-3 py-2 text-white  md:bg-transparent md:p-0  md:dark:bg-transparent"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default HamburgerMenu;
