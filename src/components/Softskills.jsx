import { v1 as uuid } from "uuid";
import { fetchSoftSkills } from "../utils/utils";
import { useQuery } from "@tanstack/react-query";
import ShadowSkeleton from "./ShadowSkeleton";

function Softskills() {
  const {
    data: softSkills,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["softSkills"],
    queryFn: async () => fetchSoftSkills(),
  });

  if (isLoading) return ShadowSkeleton(2);

  if (isError)
    return (
      <p className="text-center py-4 bg-red-200 font-semibold">
        Failed to load Soft Skills
      </p>
    );

  return (
    <div className="my-4 grid grid-cols-2 sm:grid-cols-4">
      {softSkills?.map((skill) => {
        return (
          <span key={uuid()} className="border-2 text-center shadow-lg p-1">
            {skill.title}
          </span>
        );
      })}
    </div>
  );
}

export default Softskills;
