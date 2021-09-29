function Nav() {
  return (
    <div className="flex items-center justify-center space-x-6 py-4 bg-black text-white font-semibold sticky top-0 z-50">
      <a href="#">
        <h4 className="hover:text-gray-400 hover:scale-105 transition transform duration-800 ease-in">
          Home
        </h4>
      </a>
      <a href="#">
        <h4 className="hover:text-gray-400 hover:scale-105 transition transform duration-800 ease-in">
          Profile
        </h4>
      </a>
      <a href="#">
        <h4 className="hover:text-gray-400 hover:scale-105 transition transform duration-800 ease-in">
          Contact
        </h4>
      </a>
      <a href="#">
        <h4 className="hover:text-gray-400 hover:scale-105 transition transform duration-800 ease-in">
          Resume
        </h4>
      </a>
    </div>
  );
}

export default Nav;
