import { portfolio } from '../assets/data/resumeData.json';
import Nav from './Nav';
import { v1 as uuid } from 'uuid';
function Profile() {
  return (
    <div>
      <Nav />

      <div className="w-10/12 mx-auto">
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
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <div className="space-x-4 pt-4">
                    <a
                      className="border-2 p-2 shadow bg-black text-white hover:bg-gray-800 transition duration-500"
                      href={githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source Code
                    </a>{' '}
                    <a
                      className="border-2 p-2 shadow bg-black text-white hover:bg-gray-800 transition duration-500"
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
