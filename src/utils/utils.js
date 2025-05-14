import sanityClient from "../sanity/sanityClient";

const ITSKILLS_QUERY = `*[
    _type == "itSkills"
  ]|order(_createdAt asc){_id, title}`;

const SOFTSKILLS_QUERY = `*[
    _type == "softSkills"
  ]|order(_createdAt asc){_id, title}`;

const PROJECTS_QUERY = `*[
    _type == "projects"
  ]|order(_createdAt asc){_id, title, description, sourceCodeUrl, liveSiteUrl, imageUrl}`;

const EXPERIENCE_QUERY = `*[
    _type == "experience"
  ]|order(_createdAt asc){_id, company, location, jobTitle, startDate, endDate, responsibilities}`;

export const fetchItSkills = async () => {
  const data = await sanityClient.fetch(ITSKILLS_QUERY);
  return data;
};

export const fetchSoftSkills = async () => {
  const data = await sanityClient.fetch(SOFTSKILLS_QUERY);
  return data;
};

export const fetchProjects = async () => {
  const data = await sanityClient.fetch(PROJECTS_QUERY);
  return data;
};

export const fetchExperience = async () => {
  const data = await sanityClient.fetch(EXPERIENCE_QUERY);
  return data;
};
