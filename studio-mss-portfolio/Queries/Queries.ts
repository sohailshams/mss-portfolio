import {defineQuery} from 'groq'

export const ITSKILLS_QUERY = defineQuery(`*[
    _type == "itSkills"
  ]|order(_createdAt asc){_id, title}`)

export const SOFTSKILLS_QUERY = defineQuery(`*[
    _type == "softSkills"
  ]|order(_createdAt asc){_id, title}`)

export const PROJECTS_QUERY = defineQuery(`*[
    _type == "projects"
  ]|order(_createdAt asc){_id, title, description, sourceCodeUrl, liveSiteUrl, imageUrl}`)

export const EXPERIENCE_QUERY = defineQuery(`*[
    _type == "experience"
  ]|order(_createdAt asc){_id, company, location, jobTitle, startDate, endDate, responsibilities}`)
