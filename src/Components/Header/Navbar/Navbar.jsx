import { Facebook, Twitter } from "../../../Assets/icons/icons";
import { motion } from "framer-motion";

const Navbar = ({ isMenuOpen }) => {
  return (
    <>
      <nav className="relative left-56">
        <ul className="hidden absolute top-0 left-0 z-40 tracking-widest  md:flex md:static md:h-auto md:w-auto md:flex-row md:items-center md:justify-start md:gap-[3rem] md:bg-transparent md:p-0 md:text-[0.8125rem] md:opacity-100">
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
              className="uppercase text-white transition duration-300 hover:text-soft-red md:text-slate-900 "
            >
              Contact
            </a>
          </li>

          <li>
            <a
              href="/"
              className="block border border- w-70 px-32 py-4 md:border-soft-red uppercase text-white rounded-md transition duration-300 hover:text-soft-red md:rounded-md md:bg-soft-red md:border-[0.188rem] md:py-[7.992px] md:px-[29.992px] md:hover:bg-white"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>

      <nav aria-label="Main">
        <motion.ul
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 2, duration: 2 }}
          id="navbar-menu"
          className={` absolute top-0 left-0 z-40 flex flex-col gap-4 items-center  h-full w-full bg-very-dark-blue/90 tracking-widest opacity-0 md:hidden ${
            isMenuOpen ? "!visible pt-24 pb-8 opacity-100" : ""
          }`}
        >
          <li className="border-t-2 border-grayishblue  text-center p-4 w-80">
            <a
              href="/"
              className="uppercase text-white transition duration-300 hover:text-soft-red md:text-slate-900 "
            >
              Features
            </a>
          </li>

          <li className="border-t-2 border-grayishblue -mt-3 text-center p-4 w-80 ">
            <a
              href="/"
              className="uppercase text-white transition duration-300 hover:text-soft-red md:text-slate-900"
            >
              Pricing
            </a>
          </li>
          <li className="border-b-2 border-t-2 -mt-3 border-grayishblue  text-center p-4 w-80">
            <a
              href="/"
              className="uppercase text-white transition duration-300 hover:text-soft-red md:text-slate-900 "
            >
              Contact
            </a>
          </li>

          <li className="mb-28 mt-4">
            <a
              href="/"
              className="block border border- w-70 px-32 py-4 :border-soft-red uppercase text-white rounded-md transition duration-300 hover:text-soft-red"
            >
              Login
            </a>
          </li>

          <li className="md:hidden">
            <ul className="flex items-center gap-8 relative top-16">
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
                <a
                  href="/"
                  className="block text-2xl uppercase text-slate-900"
                  aria-label="twitter"
                >
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
        </motion.ul>
      </nav>
    </>
  );
};
export default Navbar;
