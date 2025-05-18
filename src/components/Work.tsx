import React from "react";
import { v1 as uuid } from "uuid";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { fetchExperience } from "../utils/utils";
import ShadowSkeleton from "./ShadowSkeleton";
import { Experience } from "../../studio-mss-portfolio/sanity.types";

function Work() {
  const {
    data: experience,
    isLoading,
    isError,
  } = useQuery<Experience[]>({
    queryKey: ["experience"],
    queryFn: async () => fetchExperience(),
  });

  if (isLoading) return ShadowSkeleton(4);

  if (isError)
    return (
      <p className="text-center py-4 bg-red-200 font-semibold">
        Failed to load experience
      </p>
    );

  return (
    <div className="grid grid-cols-1 place-content-around">
      {experience?.map((exp) => {
        return (
          <div key={exp._id} className="border-1 shadow-xl px-5 py-5">
            <h2 className="text-lg font-bold sm:font-extrabold py-2 xl:py-5">
              {exp.company}, {exp.location}
            </h2>
            <p className="font-bold">
              {exp.jobTitle} <br />{" "}
              <span className="font-medium">
                {format(new Date(exp.startDate!), "MMMM yyyy")} -{" "}
                {format(new Date(exp.endDate!), "MMMM yyyy")}
              </span>
            </p>
            <ul className="text-left ml-4 pl-6 list-disc">
              {exp.responsibilities?.map((responsibility) => {
                return (
                  <li key={uuid()} className="font-base sm:font-semibold py-2">
                    {responsibility}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <div className="my-4"></div>
    </div>
  );
}

export default Work;
