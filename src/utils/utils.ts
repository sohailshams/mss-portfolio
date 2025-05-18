import sanityClient from "../sanity/sanityClient";
import {
  ITSKILLS_QUERY,
  SOFTSKILLS_QUERY,
  PROJECTS_QUERY,
  EXPERIENCE_QUERY,
} from "../../studio-mss-portfolio/Queries/Queries";

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

// import { defineQuery } from "groq";

// const ITSKILLS_QUERY = defineQuery(`*[
//     _type == "itSkills"
//   ]|order(_createdAt asc){_id, title}`);

// const SOFTSKILLS_QUERY = defineQuery(`*[
//     _type == "softSkills"
//   ]|order(_createdAt asc){_id, title}`);

// const PROJECTS_QUERY = defineQuery(`*[
//     _type == "projects"
//   ]|order(_createdAt asc){_id, title, description, sourceCodeUrl, liveSiteUrl, imageUrl}`);

// const EXPERIENCE_QUERY = defineQuery(`*[
//     _type == "experience"
//   ]|order(_createdAt asc){_id, company, location, jobTitle, startDate, endDate, responsibilities}`);
