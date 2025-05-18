import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex items-center justify-center space-x-6 py-4 bg-black text-white font-semibold sticky top-0 z-50 border-b-2 border-white">
      <Link
        className="hover:text-gray-400 hover:scale-105 transition transform duration-800 ease-in cursor-pointer"
        to={"/"}
      >
        Home
      </Link>

      <Link
        className="hover:text-gray-400 hover:scale-105 transition transform duration-800 ease-in cursor-pointer"
        to={"/profile"}
      >
        Profile
      </Link>

      <Link
        className="hover:text-gray-400 hover:scale-105 transition transform duration-800 ease-in cursor-pointer"
        to={"/contact"}
      >
        Contact
      </Link>
    </div>
  );
}

export default Nav;
