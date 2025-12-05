import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'socialWall',
  title: 'Social Wall',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Nuestra Comunidad en Acción'
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'text',
      initialValue: 'Compartimos momentos reales de nuestras aventuras en la montaña y encuentros sociales.'
    }),
    defineField({
      name: 'items',
      title: 'Social Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Story (Vertical)', value: 'story' },
                  { title: 'Post (Square)', value: 'post' }
                ],
                layout: 'radio'
              },
              initialValue: 'post'
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true
              }
            }),
            defineField({
              name: 'username',
              title: 'Username',
              type: 'string',
              initialValue: 'Bari.Trekking'
            }),
            defineField({
              name: 'handle',
              title: 'Handle',
              type: 'string',
              initialValue: '@bari.trekking'
            })
          ],
          preview: {
            select: {
              title: 'username',
              subtitle: 'type',
              media: 'image'
            }
          }
        }
      ]
    })
  ]
})
