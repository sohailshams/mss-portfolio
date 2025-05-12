import { v1 as uuid } from "uuid";
import { fetchSoftSkills } from "../utils/utils";
import { useQuery } from "@tanstack/react-query";

function Softskills() {
  const {
    data: softSkills,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["softSkills"],
    queryFn: async () => fetchSoftSkills(),
  });

  if (isError || isLoading) return null;

  return (
    <div className="w-10/12 mx-auto my-4 grid grid-cols-2 sm:grid-cols-4">
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
