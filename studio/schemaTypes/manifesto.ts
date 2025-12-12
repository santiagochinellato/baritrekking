import { defineField, defineType } from 'sanity'

export const manifesto = defineType({
  name: 'manifesto',
  title: 'Manifiesto',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'description', title: 'Descripción Principal', type: 'text', rows: 3 }),
    defineField({ name: 'highlight', title: 'Frase Destacada (Teal)', type: 'string' }),
    
    defineField({
      name: 'values',
      title: 'Valores',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Título', type: 'string' }),
            defineField({ name: 'description', title: 'Descripción', type: 'text' }),
            defineField({
              name: 'icon',
              title: 'Icono',
              type: 'string',
              options: { list: ['Users', 'Heart', 'Mountain', 'Map', 'Shield'] },
            }),
          ],
        },
      ],
    }),


    defineField({ 
      name: 'requirementsBadge', 
      title: 'Badge Requisitos', 
      type: 'string', 
      initialValue: '⚠️ Requisitos para sumarte' 
    }),
    defineField({ name: 'requirementsTitle', title: 'Título Requisitos', type: 'string' }),
    defineField({ name: 'requirementsIntro', title: 'Intro Requisitos', type: 'text' }),
    defineField({
      name: 'requirementsList',
      title: 'Lista de Requisitos',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    
    defineField({ name: 'ctaText', title: 'Texto Botón', type: 'string', initialValue: '¿Cumplís los requisitos? Sumate Ahora' }),
    defineField({ name: 'ctaLink', title: 'Enlace Botón', type: 'url' }),
  ],
})
