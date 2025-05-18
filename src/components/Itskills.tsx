import { v1 as uuid } from "uuid";
import { useQuery } from "@tanstack/react-query";
import { fetchItSkills } from "../utils/utils";
import ShadowSkeleton from "./ShadowSkeleton";
import { ItSkills } from "../../studio-mss-portfolio/sanity.types";

const Itskills: React.FC = () => {
  const {
    data: itSkills,
    isLoading,
    isError,
  } = useQuery<ItSkills[]>({
    queryKey: ["itSkills"],
    queryFn: async () => fetchItSkills(),
  });

  if (isLoading) return ShadowSkeleton(2);

  if (isError)
    return (
      <p className="text-center py-4 bg-red-200 font-semibold">
        Failed to load IT Skills
      </p>
    );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 text-center text-xs ">
      {itSkills?.map((skill) => {
        return (
          <span
            key={uuid()}
            className="border-2 p-2 shadow bg-black text-white rounded-full mt-4 cursor-not-allowed"
          >
            {skill.title}
          </span>
        );
      })}
    </div>
  );
};

export default Itskills;
