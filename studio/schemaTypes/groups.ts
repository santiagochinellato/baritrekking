import { defineField, defineType } from 'sanity'

export const groups = defineType({
  name: 'groups',
  title: 'Sección Espacios (Groups)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      initialValue: 'Nuestros Espacios',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      rows: 2,
      initialValue: 'Trekking gratuito para todos, club social con membresía opcional.',
    }),

    // Trekking Card
    defineField({
      name: 'trekkingCard',
      title: 'Tarjeta Trekking Principal',
      type: 'object',
      fields: [
        defineField({ name: 'badge', title: 'Badge (Ej: Acceso Libre)', type: 'string' }),
        defineField({ name: 'title', title: 'Título', type: 'string' }),
        defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 3 }),
        defineField({ name: 'image', title: 'Imagen de Fondo', type: 'image', options: { hotspot: true } }),
        defineField({
          name: 'levels',
          title: 'Niveles',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'stats',
          title: 'Estadísticas',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'label', type: 'string', title: 'Etiqueta' }),
                defineField({ name: 'value', type: 'string', title: 'Valor' }),
                defineField({
                  name: 'icon',
                  type: 'string',
                  title: 'Icono (Nombre Lucide)',
                  options: {
                    list: [
                      { title: 'Mountain', value: 'Mountain' },
                      { title: 'Users', value: 'Users' },
                      { title: 'Calendar', value: 'Calendar' },
                      { title: 'GraduationCap', value: 'GraduationCap' },
                      { title: 'Heart', value: 'Heart' },
                    ],
                  },
                }),
              ],
            },
          ],
        }),
        defineField({ name: 'buttonText', title: 'Texto Botón', type: 'string', initialValue: 'Unirme al Grupo' }),
        defineField({ name: 'buttonLink', title: 'Enlace Botón', type: 'url' }),
      ],
    }),

    // Social Card
    defineField({
      name: 'socialCard',
      title: 'Tarjeta Club Social',
      type: 'object',
      fields: [
        defineField({ name: 'badge', title: 'Badge', type: 'string' }),
        defineField({ name: 'title', title: 'Título', type: 'string' }),
        defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 2 }),
        defineField({ name: 'price', title: 'Precio', type: 'string' }),
        defineField({
          name: 'benefits',
          title: 'Beneficios',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'emoji', type: 'string', title: 'Emoji' }),
                defineField({ name: 'name', type: 'string', title: 'Nombre' }),
                defineField({ name: 'desc', type: 'string', title: 'Descripción Corta' }),
              ],
            },
          ],
        }),
        defineField({ name: 'buttonText', title: 'Texto Botón', type: 'string', initialValue: 'Acceder Ahora' }),
        defineField({ name: 'buttonLink', title: 'Enlace Botón', type: 'url' }),
      ],
    }),

    // Prevention Card
    defineField({
      name: 'preventionCard',
      title: 'Tarjeta Prevención',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Título', type: 'string' }),
        defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 3 }),
        defineField({ name: 'tagline', title: 'Frase final', type: 'string' }),
      ],
    }),

    // Community Card
    defineField({
      name: 'communityCard',
      title: 'Tarjeta Comunidad',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Título', type: 'string' }),
        defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 3 }),
        defineField({ name: 'tagline', title: 'Frase final', type: 'string' }),
      ],
    }),
  ],
})
