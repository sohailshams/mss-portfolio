import { softSkills } from "../assets/data/resumeData.json";
import { v1 as uuid } from "uuid";

function Softskills() {
  return (
    <div className="w-10/12 mx-auto my-4 grid grid-cols-2 sm:grid-cols-4">
      {softSkills.softSkillsData.map((skill) => {
        return (
          <span key={uuid()} className="border-2 text-center shadow-lg p-1">
            {skill}
          </span>
        );
      })}
    </div>
  );
}

export default Softskills;
