// import { itSkills } from "../assets/data/resumeData.json";
import { v1 as uuid } from "uuid";
import client from "../sanity/client";
import { useEffect, useState } from "react";

const ITSKILLS_QUERY = `*[
  _type == "itSkills"
]|order(_createdAt asc){_id, title}`;

function Itskills() {
  const [itSkills, setItSkills] = useState([]);

  useEffect(() => {
    const fetcItSkillsData = async () => {
      try {
        const data = await client.fetch(ITSKILLS_QUERY);
        setItSkills(data);
      } catch (error) {}
    };
    fetcItSkillsData();
  }, []);

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
