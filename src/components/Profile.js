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
                      className="border-2 p-2 shadow bg-black text-white"
                      href={githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source Code
                    </a>{' '}
                    <a href={url} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  </div>
                </div>
                <div className="border-1 shadow-xl">
                  <img
                    className="object-cover h-full w-full"
                    src={projectImage.default}
                    alt={title}
                  />
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
