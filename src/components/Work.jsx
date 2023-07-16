import React from "react";

function Work() {
  return (
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
            Writing asynchronous code to execute PostgreSQL queries from node
            application
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
            Development of mobile responsive web applications with Django and
            Django REST framework
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
            Understanding & solving bugs/limitations via HTML, CSS & JavaScript
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
  );
}

export default Work;
