'use client'

import { useState } from 'react';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="h-28 w-full bg-background flex justify-between px-10 py-10 items-center">
        <div className="my-10">
          <img src="./logo.png" alt="logo" />
        </div>
        <div className="hidden md:flex gap-10 text-white font-lato text-[1.2rem] lg:mr-20">
          <ul className="flex gap-12">
            <li className="hover:cursor-pointer hover:border-b-2">Home</li>
            <li className="hover:cursor-pointer hover:border-b-2">Services</li>
            <li className="hover:cursor-pointer hover:border-b-2">Products</li>
            <li className="hover:cursor-pointer hover:border-b-2">Contact Us</li>
          </ul>
        </div>
        <div className="md:hidden text-white">
          <button
            className="focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isSidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {isSidebarOpen && (
        <div className="md:hidden bg-background fixed top-0 left-0 w-1/3 h-full z-50 shadow-xl shadow-white rounded-e-[3rem] animate-slide-in border-t-[1px] border-r-[1px]">
          <div className="absolute right-6 top-4 text-white">
          <button
            className="focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isSidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
          <ul className="flex flex-col gap-4 text-white font-lato text-[1.2rem] pt-20 pl-10">
            <li className="hover:cursor-pointer">Home</li>
            <li className="hover:cursor-pointer">Services</li>
            <li className="hover:cursor-pointer">Products</li>
            <li className="hover:cursor-pointer">Contact Us</li>
          </ul>
        </div>
      )}
    </>
  );
}
