import { defineField, defineType } from "sanity";

export const navbar = defineType({
  name: "navbar",
  title: "Navbar",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Internal title for this document (e.g., 'Main Navbar')",
      hidden: true,
      initialValue: "Main Navbar",
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
      name: "links",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),
            defineField({
              name: "href",
              title: "Link URL",
              type: "string",
              description: "Use # for anchor links within the page",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "cta",
      title: "Call to Action",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Button Text",
          type: "string",
        }),
        defineField({
          name: "link",
          title: "Button Link",
          type: "string",
        }),
      ],
    }),
  ],
});
