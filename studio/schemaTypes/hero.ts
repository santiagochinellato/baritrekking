import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title1',
      title: 'Título Parte 1 (Blanco)',
      type: 'string',
      description: 'Primera parte del título principal (ej. COMUNIDAD DE MONTAÑA.)',
    }),
    defineField({
      name: 'title2',
      title: 'Título Parte 2 (Naranja)',
      type: 'string',
      description: 'Segunda parte del título principal (ej. DE RESIDENTES, PARA RESIDENTES.)',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      description: 'Texto del subtítulo',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Imagen de Fondo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ctaText',
      title: 'Texto del Botón',
      type: 'string',
      initialValue: 'Explorá la Comunidad',
    }),
  ],
})
