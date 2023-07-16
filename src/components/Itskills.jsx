import { itSkills } from "../assets/data/resumeData.json";
import { v1 as uuid } from "uuid";

function Itskills() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 text-center text-xs ">
      {itSkills.itSkillsData.map((skill) => {
        return (
          <span
            key={uuid()}
            className="border-2 p-2 shadow bg-black text-white rounded-full mt-4 cursor-not-allowed"
          >
            {skill}
          </span>
        );
      })}
    </div>
  );
}

export default Itskills;
