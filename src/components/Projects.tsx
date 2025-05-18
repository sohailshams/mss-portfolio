import { v1 as uuid } from "uuid";
import { useQuery } from "@tanstack/react-query";
import { urlFor } from "../sanity/image";
import ShadowSkeleton from "./ShadowSkeleton";
import { fetchProjects } from "../utils/utils";
import { Projects } from "../../studio-mss-portfolio/sanity.types";

const Project: React.FC = () => {
  const {
    data: projects,
    isLoading,
    isError,
  } = useQuery<Projects[]>({
    queryKey: ["projects"],
    queryFn: async () => fetchProjects(),
  });

  if (isLoading) return ShadowSkeleton(4);

  if (isError)
    return (
      <p className="text-center py-4 bg-red-200 font-semibold">
        Failed to load projects
      </p>
    );

  return projects?.map(
    ({ title, imageUrl, liveSiteUrl, description, sourceCodeUrl }) => {
      return (
        <div
          className="pt-4 grid sm:grid-cols-2 justify-items-center"
          key={uuid()}
        >
          <div className="max-w-lg border-1 shadow-xl px-5 flex flex-col items-start justify-center">
            <div>
              <h2 className="text-lg font-extrabold py-2 xl:py-5">{title}</h2>
              <p className="text-sm md:text-base">{description}</p>
            </div>
            <div className="space-x-4 py-6 xl:pt-8">
              <a
                className="border-2 p-2 shadow bg-black text-white hover:bg-gray-800 transition duration-500 text-sm md:text-base font-semibold"
                href={sourceCodeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Source Code
              </a>{" "}
              <a
                className="border-2 p-2 shadow bg-black text-white hover:bg-gray-800 transition duration-500 text-sm md:text-base font-semibold"
                href={liveSiteUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>
          <div className="border-1 shadow-xl md:ml-4 xl:ml-0 mt-6 md:mt-0 transition duration-700 ease-in-out transform hover:scale-105">
            <a href={liveSiteUrl} target="_blank" rel="noreferrer">
              <img
                className="object-cover h-full w-full"
                src={urlFor(imageUrl!).url()}
                alt={title}
              />
            </a>
          </div>
          <div className="my-4"></div>
        </div>
      );
    }
  );
};

export default Project;
