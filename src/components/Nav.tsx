import SearchComponent from "./SearchBar";

const Nav = () => {
  return (
    <nav className="bg-prim text-white border-b-white border-b shadow-white fixed top-0 w-full px-3 ">
      <div className="  sm:max-w-md md:max-w-4xl lg:max-w-5xl xl:max-w-6xl  flex justify-between items-center mx-auto  py-3">
        <div className="logo">
          <img src="https://yts.mx/assets/images/website/logo-YTS.svg" alt="" />
        </div>
        <div className="nav-links flex items-center justify-center space-x-2 ">
          <div>
            <SearchComponent />
          </div>
          <ul className="flex justify-between items-center space-x-2">
            <li>Home</li>
            <li>4K</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
