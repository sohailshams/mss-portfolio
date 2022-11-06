import { portfolio } from '../assets/data/resumeData.json';
import Nav from './Nav';
import { v1 as uuid } from 'uuid';
import Footer from './Footer';
function Profile() {
  return (
    <div>
      <Nav />
      
      <div className="w-10/12 mx-auto">
      <h2 className="text-center my-4 text-3xl font-bold sm:font-semibold pt-2 sm:text-4xl">
        Work Experience
      </h2>
      <div className="pt-4 grid sm:grid-cols-2 place-content-around">
        <div className="border-1 shadow-xl px-5">
          <h2 className="text-lg font-bold sm:font-extrabold py-2 xl:py-5">
            JB Cole, Manchester, UK
            </h2>
            <p className='font-medium '>Junior Python Developer April 2022 till Present</p>
          <ul className='text-left ml-4 pl-6 list-disc'>
            <li className="font-base sm:font-semibold py-2">
              Writing clean code of Python and Django for custom web applications.
            </li>
            <li className="font-base sm:font-semibold py-2">
              Writing unit tests and debug code.
            </li>
            <li className="font-base sm:font-semibold py-2">
              Collaborate with developers to build mobile-responsive software.
            </li>
          </ul>   
        </div>
        <div className="border-1 shadow-xl md:ml-4 xl:ml-0 mt-6 sm:mt-0">
          <h2 className="text-lg font-bold sm:font-extrabold py-2 xl:py-5 pl-5">
            Q4 Inc. Toronto, Canada
          </h2>
          <p className='font-medium pl-5'>Client Support Analyst April 2021 till March 2022 </p>
          <ul className='text-left ml-4 pl-10 pr-2 list-disc'>
            <li className="font-base sm:font-semibold py-2">
              Provide web support to the clients in a timely manner using Salesforce Service Cloud.
            </li>
            <li className="font-base sm:font-semibold py-2">
              Help clients with fixes and content updates to keep their websites up to date.
            </li>
            <li className="font-base sm:font-semibold py-2">
              Understanding & solving bugs/limitations via HTML, CSS & JavaScript/JQuery.
            </li>
            <li className="font-base sm:font-semibold py-2">
              Respond efficiently to the clients and provide them excellent customer service.
            </li>
            <li className="font-base sm:font-semibold py-2">
              Quality Assurance (QA) - Testing of client’s updates.
            </li>
          </ul>
        </div>
        <div className="my-4"></div>
      </div>

        <h2 className="text-center my-4 text-4xl font-semibold">IT Skills</h2>
        <div className="space-x-4 text-center text-xs grid grid-cols-2 sm:grid-cols-4">
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4 ml-4 cursor-not-allowed">
            HTML5/CSS3
          </button>

          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4 cursor-not-allowed">
            TailwindCSS
          </button>
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4 cursor-not-allowed">
            Bootstrap
          </button>
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4 cursor-not-allowed">
            Materialize
          </button>
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4 cursor-not-allowed">
            JavaScript
          </button>
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4 cursor-not-allowed">
            JQuery
          </button>
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4 cursor-not-allowed">
            React
          </button>
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4 cursor-not-allowed">
            Python/Django
          </button>
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4 cursor-not-allowed">
            Django REST Framework
          </button>
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4 cursor-not-allowed">
            SQLite3/Firebase
          </button>
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4 cursor-not-allowed">
            Git
          </button>
          <button className="border-2 p-2 shadow bg-black text-white rounded-full mt-4 cursor-not-allowed">
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

      <h2 className="text-center my-4 text-4xl font-semibold">Soft Skills</h2>
      <div className="w-10/12 mx-auto my-4 grid grid-cols-2 sm:grid-cols-4">
        <span className="border-2 text-center shadow-lg p-1">Creative</span>
        <span className="border-2 text-center shadow-lg p-1">Proactive</span>
        <span className="border-2 text-center shadow-lg p-1">Team Player</span>
        <span className="border-2 text-center shadow-lg p-1">Fast learner</span>
        <span className="border-2 text-center shadow-lg p-1">
          Result Oriented
        </span>
        <span className="border-2 text-center shadow-lg p-1">
          Communication
        </span>
        <span className="border-2 text-center shadow-lg p-1">
          Analytic Thinker
        </span>
        <span className="border-2 text-center shadow-lg p-1">
          Problem Solver
        </span>
        <span className="border-2 text-center shadow-lg p-1">
          Service Minded
        </span>
        <span className="border-2 text-center shadow-lg p-1">
          Well Structured
        </span>
        <span className="border-2 text-center shadow-lg p-1">Planner</span>
        <span className="border-2 text-center shadow-lg p-1">Flexible</span>
      </div>
      <h2 className="text-center my-4 text-4xl font-semibold pt-2">
        Education
      </h2>
      <div className="my-4 text-center">
        <h3 className="text-lg font-semibold sm:font-extrabold shadow-lg w-10/12 md:w-6/12 mx-auto">
          Code Institute, Dublin - Ireland
        </h3>
        <p className="font-base sm:font-semibold py-2">
          Diploma in Software Development • December 2020
        </p>
        <h3 className="text-lg font-semibold sm:font-extrabold shadow-lg w-10/12 md:w-6/12 mx-auto">
          Linnæus University, Kalmar - Sweden
        </h3>
        <p className="font-base sm:font-semibold py-2">
          Master in Marketing • December 2010
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
