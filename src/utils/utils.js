import sanityClient from "../sanity/sanityClient";

const ITSKILLS_QUERY = `*[
    _type == "itSkills"
  ]|order(_createdAt asc){_id, title}`;

const SOFTSKILLS_QUERY = `*[
    _type == "softSkills"
  ]|order(_createdAt asc){_id, title}`;

export const fetchItSkills = async () => {
  const data = await sanityClient.fetch(ITSKILLS_QUERY);
  return data;
};

export const fetchSoftSkills = async () => {
  const data = await sanityClient.fetch(SOFTSKILLS_QUERY);
  return data;
};
