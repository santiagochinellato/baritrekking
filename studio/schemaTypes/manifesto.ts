import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'manifesto',
  title: 'Manifesto Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Volver a lo Simple',
    }),
    defineField({
      name: 'description',
      title: 'Main Description',
      type: 'text',
    }),
    defineField({
      name: 'highlight',
      title: 'Highlight Text',
      type: 'string',
      description: 'Text highlighted in teal (e.g., No somos una empresa...)',
    }),
    defineField({
      name: 'values',
      title: 'Values Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'description', type: 'text' }),
            defineField({
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              options: {
                list: [
                  { title: 'Users', value: 'Users' },
                  { title: 'Heart', value: 'Heart' },
                  { title: 'Mountain', value: 'Mountain' },
                ],
              },
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'requirementsTitle',
      title: 'Requirements Title',
      type: 'string',
      initialValue: '¿Quiénes pueden sumarse?',
    }),
    defineField({
      name: 'requirementsIntro',
      title: 'Requirements Intro',
      type: 'text',
    }),
    defineField({
      name: 'requirementsList',
      title: 'Requirements List',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
