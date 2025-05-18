import {defineField, defineType} from 'sanity'

export const softSkillsType = defineType({
  name: 'softSkills',
  title: 'Soft Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
