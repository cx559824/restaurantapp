import React from "react";
import Logo from "./img/logo.png";
import { MdShoppingBasket } from "react-icons/md";

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full">
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-10 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold"> City</p>
        </div>

        <ul className="flex items-center gap-8 ml-auto">
          <li className="text-base text-headingColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
            Home
          </li>
          <li className="text-base text-headingColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
            Menu
          </li>
          <li className="text-base text-headingColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
            About Us
          </li>
          <li className="text-base text-headingColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
            Service
          </li>
        </ul>

        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textColor text-2xl ml-8" />
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
