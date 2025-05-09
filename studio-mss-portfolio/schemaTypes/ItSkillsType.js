import {defineField, defineType} from 'sanity'

export const itSkillsType = defineType({
  name: 'itSkills',
  title: 'itSkills',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
