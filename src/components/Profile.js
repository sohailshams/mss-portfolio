import { portfolio } from '../assets/data/resumeData.json';
import Nav from './Nav';
import { v1 as uuid } from 'uuid';
function Profile() {
  return (
    <div>
      <Nav />

      <div className="w-10/12 mx-auto">
        <h2 className="text-center my-4 text-4xl font-semibold">IT Skills</h2>
        <div className="space-x-4 text-center text-xs grid grid-cols-2 sm:grid-cols-4">
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4 ml-4">
            HTML5/CSS3
          </button>

          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4">
            TailwindCSS
          </button>
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4">
            Bootstrap
          </button>
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4">
            Materialize
          </button>
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4">
            JavaScript
          </button>
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4">
            JQuery
          </button>
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4">
            React
          </button>
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4">
            Python
          </button>
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4">
            Flask/Django
          </button>
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4">
            SQLite3/Firebase
          </button>
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4">
            Git
          </button>
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4">
            Github
          </button>
        </div>
        <h2 className="text-center my-4 text-4xl font-semibold">Projects</h2>
        {portfolio.projects.map(
          ({ title, image, url, description, githubUrl }) => {
            let projectImage = require('../assets/images/projects/' + image);
            return (
              <div
                className="pt-4 grid sm:grid-cols-2 justify-items-center"
                key={uuid()}
              >
                <div className="max-w-sm border-1 shadow-xl px-5">
                  <h2 className="text-lg font-extrabold py-2 xl:py-5">
                    {title}
                  </h2>
                  <p className="text-sm md:text-base">{description}</p>
                  <div className="space-x-4 py-6 xl:pt-8">
                    <a
                      className="border-2 p-2 shadow bg-black text-white hover:bg-gray-800 transition duration-500 text-sm md:text-base font-semibold"
                      href={githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source Code
                    </a>{' '}
                    <a
                      className="border-2 p-2 shadow bg-black text-white hover:bg-gray-800 transition duration-500 text-sm md:text-base font-semibold"
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Site
                    </a>
                  </div>
                </div>
                <div className="border-1 shadow-xl md:ml-4 xl:ml-0 mt-6 md:mt-0 transition duration-700 ease-in-out transform hover:scale-105">
                  <a href={url} target="_blank" rel="noreferrer">
                    <img
                      className="object-cover h-full w-full"
                      src={projectImage.default}
                      alt={title}
                    />
                  </a>
                </div>
                <div className="my-4"></div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Profile;
