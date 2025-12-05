import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Internal title for this document (e.g., 'Main Footer')",
      hidden: true,
      initialValue: "Main Footer",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "linkColumns",
      title: "Link Columns",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Column Title",
              type: "string",
            }),
            defineField({
              name: "links",
              title: "Links",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "text",
                      title: "Link Text",
                      type: "string",
                    }),
                    defineField({
                      name: "href",
                      title: "Link URL",
                      type: "string",
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "Instagram", value: "instagram" },
                  { title: "WhatsApp", value: "whatsapp" },
                  { title: "Facebook", value: "facebook" },
                  { title: "Twitter", value: "twitter" },
                ],
              },
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "followText",
      title: "Follow Us Text",
      type: "string",
      description: "Text below social icons (e.g., 'Seguinos en Instagram...')",
    }),
    defineField({
      name: "copyrightText",
      title: "Copyright Text",
      type: "string",
      description: "The text after the © symbol",
    }),
    defineField({
      name: "developer",
      title: "Developer Credit",
      type: "object",
      fields: [
        defineField({
          name: "name",
          title: "Name",
          type: "string",
        }),
        defineField({
          name: "url",
          title: "Portfolio URL",
          type: "url",
        }),
      ],
    }),
  ],
});
