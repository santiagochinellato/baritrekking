import { defineField, defineType } from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'Preguntas Frecuentes (FAQ)',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Subtítulo', type: 'string' }),
    defineField({
      name: 'questions',
      title: 'Preguntas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'question', title: 'Pregunta', type: 'string' }),
            defineField({ name: 'answer', title: 'Respuesta', type: 'text', rows: 3 }),
          ],
        },
      ],
    }),
  ],
})
