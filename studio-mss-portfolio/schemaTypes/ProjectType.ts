import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sourceCodeUrl',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'liveSiteUrl',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageUrl',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
  ],
})
