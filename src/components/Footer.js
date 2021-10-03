import {
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaCopyright,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className="grid sm:grid-cols-2 bg-black text-white content-center text-center py-3">
      <div className="flex justify-center">
        <p className="px-2">
          Created with love and passion. Copyright
          <FaCopyright className="mx-1 inline-flex" />
          2021 MSS
        </p>
      </div>
      <div className=" font-semibold flex justify-center space-x-4 mt-2 sm:mt-0">
        <a
          href="https://github.com/sohailshams"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare className="text-3xl hover:text-gray-400 hover:scale-105 transition transform duration-800 ease-in" />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-sohail-shams-56995126/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-3xl hover:text-gray-400 hover:scale-105 transition transform duration-800 ease-in" />
        </a>
        <a
          href="https://www.facebook.com/sohail.252/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare className="text-3xl hover:text-gray-400 hover:scale-105 transition transform duration-800 ease-in" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
