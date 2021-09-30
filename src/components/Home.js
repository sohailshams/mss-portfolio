import bg from '../assets/images/bg.jpg';
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import Nav from './Nav';

function Home() {
  return (
    <div>
      <Nav />

      <div className="relative">
        <img
          className="mx-auto bg-contain bg-no-repeat bg-center h-screen"
          src={bg}
          alt="Background"
        />
        <div className="absolute top-1/4 w-full text-center">
          <div className="mx-auto border-2 w-9/12 md:w-6/12 bg-black opacity-70 text-white">
            <h1 className="font-bold md:font-semibold text-lg md:text-3xl lg:text-5xl px-4 pt-4">
              Muhammad Sohail Shams
            </h1>
            <p className="p-4 md:text-xl md:font-semibold">
              I am a passionate Software Developer with expertise in developing
              mobile responsive web applications. I have a keen interest in
              continually learn and improve my skills in creating high-quality
              web applications and writing clean code.
            </p>
            <div className="flex items-center justify-center space-x-8 pb-6">
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
        </div>
      </div>
    </div>
  );
}

export default Home;
