// Header.js
const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row justify-between items-center p-4 bg-black text-white">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold text-[#F3AE9F]">Neo Chat</div>
        <span className="text-3xl font-extralight hidden lg:inline">|</span>
        <nav className="flex items-center space-x-4 mt-4 lg:mt-0">
          <a href="#" className="text-white inline hover:text-[#F3AE9F]">
            <span className="material-symbols-outlined align-text-bottom">
              home
            </span>{" "}
            Explore
          </a>
          <a href="#" className="text-white hover:text-[#F3AE9F]">
            <span className="material-symbols-outlined align-text-bottom">
              palette
            </span>{" "}
            Create
          </a>
          <a href="#" className="text-white hover:text-[#F3AE9F]">
            <span className="material-symbols-outlined align-text-bottom">
              edit
            </span>{" "}
            Edit
          </a>
        </nav>
      </div>
      <button className="bg-[#F3AE9F] text-black px-4 py-2 rounded-full mt-4 lg:mt-0">
        Login
      </button>
    </header>
  );
};

export default Header;
