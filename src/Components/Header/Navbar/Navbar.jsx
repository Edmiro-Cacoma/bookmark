import Hamburger from "./Hamburger/Hamburger";
import { Facebook, Twitter } from "../../../Assets/icons/icons";

const Navbar = ({ toggleMenu, isMenuOpen }) => {
  return (
    <nav aria-label="Main">
      <Hamburger toggleMenu={toggleMenu} isMenuOPen={isMenuOpen} />
      <ul
        id="navbar-menu"
        className={`transition-visibility invisible absolute top-0 left-0 z-40 flex flex-col items-center justify-between h-full w-full bg-very-dark-blue/90 tracking-widest opacity-0 md:visible md:static md:h-auto md:w-auto md:flex-row md:items-center md:justify-start md:gap-[3rem] md:bg-transparent md:p-0 md:text-[0.8125rem] md:opacity-100  ${
          isMenuOpen ? "!visible px-8 pt-24 pb-8 opacity-100" : ""
        }`}
      >
        <li>
          <a
            href="/"
            className="uppercase text-white transition duration-300 hover:text-soft-red md:text-slate-900"
          >
            Features
          </a>
        </li>

        <li>
          <a
            href="/"
            className="uppercase text-white transition duration-300 hover:text-soft-red md:text-slate-900"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="/"
            className="uppercase text-white transition duration-300 hover:text-soft-red md:text-slate-900"
          >
            Contact
          </a>
        </li>

        <li>
          <a
            href="/"
            className="block border-soft-red uppercase text-white rounded-full transition duration-300 hover:text-soft-red md:rounded-md md:bg-soft-red md:border-[0.188rem] md:py-[7.992px] md:px-[29.992px] md:hover:bg-white"
          >
            Login
          </a>
        </li>

        <li className="md:hidden">
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="/"
                className="block text-2xl uppercase text-slate-900"
                aria-label="facebook"
              >
                <img
                  src={Facebook}
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a href="/" className="block text-2xl uppercase text-slate-900" aria-label="twitter">
                <img
                  src={Twitter}
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;