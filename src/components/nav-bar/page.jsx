"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-950 text-white">
      <nav className="max-w-screen-xl flex items-center justify-between mx-auto p-4 ">
        <section className="flex items-center space-x-4">
          <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about-us"}>About</Link>
            </li>
            <li>
              <Link href={"/service"}>Services</Link>
            </li>
          </ul>
        </section>

        <section className="hidden md:flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Register
          </button>
        </section>

        {/* Mobile Menu (Hamburger Icon) - Show on smaller screens */}
        <section className="md:hidden">
          <button onClick={toggleDropdown}>
            <TfiMenu size={24} />
          </button>

          {/* Mobile Menu (Conditional Rendering) */}
          {isDropdownOpen && (
            <ul className="absolute right-0 bg-gray-950 text-white shadow-lg mt-2 py-2 w-full">
              <li className="block px-4 py-2 hover:bg-gray-700">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="block px-4 py-2 hover:bg-gray-700">
                <Link href={"/about-us"}>About</Link>
              </li>
              <li className="block px-4 py-2 hover:bg-gray-700">
                <Link href={"/service"}>Services</Link>
              </li>
              <li className="block px-4 py-2 hover:bg-gray-700">Login</li>
              <li className="block px-4 py-2 hover:bg-gray-700">Register</li>
            </ul>
          )}
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
