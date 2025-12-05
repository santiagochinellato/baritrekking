import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "settings",
  title: "SEO & Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      description: "Default site title (e.g., Bari.Trekking)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Default Description",
      type: "text",
      description: "Default meta description for the site",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "keywords",
      title: "Default Keywords",
      type: "array",
      of: [{ type: "string" }],
      description: "Default keywords for the site",
    }),
    defineField({
      name: "ogImage",
      title: "Default Social Share Image",
      type: "image",
      description: "Image displayed when sharing on social media",
      options: {
        hotspot: true,
      },
    }),
  ],
});
