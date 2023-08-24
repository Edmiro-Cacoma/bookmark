import { useState } from "react";
import logo from "../../Assets/images/logo-bookmark.svg";
import Navbar from "./Navbar/Navbar";
import Hamburger from "../Header/Navbar/Hamburger/Hamburger";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("lock-scroll");
  };

  return (
    <header className="flex items-center justify-between max-w-[73.375rem] mx-auto p-5 md:py-[2.9375rem]">
      <a
        href="/main"
        className="absolute left-0 z-[100] m-3 -translate-x-[150%] bg-soft-blue p-3 text-white transition focus:translate-x-0"
      >
        Skip to Main Content
      </a>
      <a href="/" className="ml-[0.375rem] z-50">
        <img
          src={logo}
          width={148}
          height={25}
          alt=""
          className={`transition duration-300 ease-in-out md:filter-none ${
            isMenuOpen ? "filter-logo-white" : ""
          }`}
        />
      </a>
      <Hamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Navbar toggle={ toggleMenu} isMenuOpen={isMenuOpen} />
      
    </header>
  );
};
export default Header;
