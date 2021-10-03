import { useHistory } from 'react-router-dom';
import cv from '../assets/cv/CV.pdf';

function Nav() {
  const history = useHistory();
  return (
    <div className="flex items-center justify-center space-x-6 py-4 bg-black text-white font-semibold sticky top-0 z-50">
      <h4
        className="hover:text-gray-400 hover:scale-105 transition transform duration-800 ease-in cursor-pointer"
        onClick={() => history.push('/')}
      >
        Home
      </h4>

      <h4
        className="hover:text-gray-400 hover:scale-105 transition transform duration-800 ease-in cursor-pointer"
        onClick={() => history.push('/profile')}
      >
        Profile
      </h4>

      <h4
        className="hover:text-gray-400 hover:scale-105 transition transform duration-800 ease-in cursor-pointer"
        onClick={() => history.push('/contact')}
      >
        Contact
      </h4>

      <h4 className="hover:text-gray-400 hover:scale-105 transition transform duration-800 ease-in cursor-pointer">
        <a href={cv} target="_blank" rel="noreferrer">
          Resume
        </a>
      </h4>
    </div>
  );
}

export default Nav;
