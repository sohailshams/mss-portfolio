import { v1 as uuid } from "uuid";
import { useQuery } from "@tanstack/react-query";
import { fetchItSkills } from "../utils/utils";

function Itskills() {
  const {
    data: itSkills,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["itSkills"],
    queryFn: async () => fetchItSkills(),
  });

  if (isError || isLoading) return null;

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
}

export default Itskills;
