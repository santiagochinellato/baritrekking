import { defineField, defineType } from 'sanity'

export const communityCTA = defineType({
  name: 'communityCTA',
  title: 'CTA Comunidad',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 2 }),
    defineField({ name: 'buttonText', title: 'Texto Botón', type: 'string' }),
    defineField({ name: 'buttonLink', title: 'Enlace Botón', type: 'url' }),
  ],
})
