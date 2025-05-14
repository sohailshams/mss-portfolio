import {defineField, defineType} from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  type: 'document',
  title: 'Experience',
  fields: [
    defineField({
      name: 'company',
      type: 'string',
      title: 'Company',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      type: 'string',
      title: 'Location',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'jobTitle',
      type: 'string',
      title: 'Job Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      type: 'date',
      title: 'Start Date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      type: 'date',
      title: 'End Date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'responsibilities',
      type: 'array',
      title: 'Responsibilities',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),
  ],
})
