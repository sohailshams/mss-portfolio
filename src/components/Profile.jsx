import { portfolio } from "../assets/data/resumeData.json";
import Nav from "./Nav";
import { v1 as uuid } from "uuid";
import Footer from "./Footer";
import Itskills from "./Itskills";
import Softskills from "./Softskills";
import Title from "./Title";
function Profile() {
  return (
    <div>
      <Nav />

      <div className="w-10/12 mx-auto">
        <Title title="Work Experience" />
        <div className="grid grid-cols-1 place-content-around">
          <div className="border-1 shadow-xl px-5 py-5">
            <h2 className="text-lg font-bold sm:font-extrabold py-2 xl:py-5">
              Northcoders, Manchester, UK
            </h2>
            <p className="font-bold">
              Full Stack JavaScript Trainee
              <br /> <span className="font-medium">March 2023 - Present</span>
            </p>
            <ul className="text-left ml-4 pl-6 list-disc">
              <li className="font-base sm:font-semibold py-2">
                Working with HTML5, CSS3 and JavaScript by following Test Driven
                Development principles in pair programming
              </li>
              <li className="font-base sm:font-semibold py-2">
                Writing asynchronous code to execute PostgreSQL queries from
                node application
              </li>
              <li className="font-base sm:font-semibold py-2">
                Developing endpoints using Express.js and testing with Jest and
                SuperTest libraries
              </li>
            </ul>
          </div>
          <div className="border-1 shadow-xl px-5 py-5">
            <h2 className="text-lg font-bold sm:font-extrabold py-2 xl:py-5">
              JB Cole, Manchester, UK
            </h2>
            <p className="font-bold">
              Junior Python Developer (Django) <br />{" "}
              <span className="font-medium">April 2022 - November 2022</span>
            </p>
            <ul className="text-left ml-4 pl-6 list-disc">
              <li className="font-base sm:font-semibold py-2">
                Development of mobile responsive web applications with Django
                and Django REST framework
              </li>
              <li className="font-base sm:font-semibold py-2">
                Application stability supported by unit test creation and
                maintenance using Python standard library module: unittest
              </li>
              <li className="font-base sm:font-semibold py-2">
                Bug investigations enabled by application code debugging and
                collaboration with project manager
              </li>
            </ul>
          </div>
          <div className="border-1 shadow-xl md:ml-4 xl:ml-0 mt-6 sm:mt-0 py-5">
            <h2 className="text-lg font-bold sm:font-extrabold py-2 xl:py-5 pl-5">
              Q4 Inc. Toronto, Canada
            </h2>
            <p className="font-bold pl-5">
              Client Support Analyst <br />{" "}
              <span className="font-medium">April 2021 - March 2022</span>
            </p>
            <ul className="text-left ml-4 pl-10 pr-2 list-disc">
              <li className="font-base sm:font-semibold py-2">
                Provision of web support to a range of clients using Salesforce
                Service Cloud
              </li>
              <li className="font-base sm:font-semibold py-2">
                Enabling customer’s success with content updates/maintenance by
                assisting with fixes and content updates
              </li>
              <li className="font-base sm:font-semibold py-2">
                Understanding & solving bugs/limitations via HTML, CSS &
                JavaScript
              </li>
              <li className="font-base sm:font-semibold py-2">
                Conducting investigation and resolution of bugs and identifying
                product opportunities with HTML, CSS & JavaScript tech stack
              </li>
              <li className="font-base sm:font-semibold py-2">
                Respond efficiently to the clients and provide them excellent
                customer service
              </li>
              <li className="font-base sm:font-semibold py-2">
                Quality Assurance (QA) - Testing of client’s updates
              </li>
            </ul>
          </div>
          <div className="my-4"></div>
        </div>
        <Title title="IT Skills" />
        <Itskills />
        <Title title="Projects" />
        {portfolio.projects.map(
          ({ title, image, url, description, githubUrl }) => {
            let projectImage = "/images/projects/";
            projectImage += image;
            return (
              <div
                className="pt-4 grid sm:grid-cols-2 justify-items-center"
                key={uuid()}
              >
                <div className="max-w-lg border-1 shadow-xl px-5 flex flex-col items-start justify-center">
                  <div>
                    <h2 className="text-lg font-extrabold py-2 xl:py-5">
                      {title}
                    </h2>
                    <p className="text-sm md:text-base">{description}</p>
                  </div>
                  <div className="space-x-4 py-6 xl:pt-8">
                    <a
                      className="border-2 p-2 shadow bg-black text-white hover:bg-gray-800 transition duration-500 text-sm md:text-base font-semibold"
                      href={githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source Code
                    </a>{" "}
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
                      src={projectImage}
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
      <Title title="Soft Skills" />
      <Softskills />
      <Title title="Education" />
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
