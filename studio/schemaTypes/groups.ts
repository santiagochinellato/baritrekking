import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'groups',
  title: 'Groups Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Nuestros Espacios',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    // Trekking Card
    defineField({
      name: 'trekkingCard',
      title: 'Trekking Card',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({ name: 'badge', type: 'string' }),
        defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
        defineField({
          name: 'levels',
          title: 'Levels',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'stats',
          title: 'Stats',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'label', type: 'string' }),
                defineField({ name: 'value', type: 'string' }),
                defineField({
                  name: 'icon',
                  type: 'string',
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
      ],
    }),
    // Social Card
    defineField({
      name: 'socialCard',
      title: 'Social Card',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'badge', type: 'string' }),
        defineField({ name: 'description', type: 'string' }),
        defineField({ name: 'price', type: 'string' }),
        defineField({
          name: 'benefits',
          title: 'Benefits',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'name', type: 'string' }),
                defineField({ name: 'desc', type: 'string' }),
                defineField({ name: 'emoji', type: 'string' }),
              ],
            },
          ],
        }),
      ],
    }),
    // Prevention Card
    defineField({
      name: 'preventionCard',
      title: 'Prevention Card',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({ name: 'tagline', type: 'string' }),
      ],
    }),
    // Community Card
    defineField({
      name: 'communityCard',
      title: 'Community Card',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({ name: 'tagline', type: 'string' }),
      ],
    }),
  ],
})
