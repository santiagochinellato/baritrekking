import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Preguntas Frecuentes',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'question', type: 'string' }),
            defineField({ name: 'answer', type: 'text' }),
          ],
        },
      ],
    }),
  ],
})
