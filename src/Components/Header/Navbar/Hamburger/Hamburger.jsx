const HamburgerMenu = ({ toggleMenu, isMenuOpen }) => {
  return (
    <button
      type="button"
      aria-expanded="true"
      aria-haspopup={isMenuOpen}
      aria-owns="navbar-menu"
      onClick={toggleMenu}
      className="cursor-pointer z-50 flex justify-between md:hidden"
    >
      <span className="sr-only">{isMenuOpen ? "close menu" : "open menu"}</span>
      <span
        className={`h-0.5 w-7 z-50 transform transition duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-2 rotate-45 bg-white" : "bg-slate-900"
        }`}
        aria-hidden="true"
      ></span>

      <span
        className={`h-0.5 w-7 z-50 transform transition duration-300 ease-in-out ${
          isMenuOpen ? "opacity-0" : ""
        }`}
        aria-hidden="true"
      ></span>

      <span
        className={`h-0.5 w-7 z-50 transform transition duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-2 rotate-45 bg-white" : "bg-slate-900"
        }`}
        aria-hidden="true"
      ></span>
    </button>
  );
};
export default HamburgerMenu;
