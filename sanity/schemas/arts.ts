import { defineType, defineField } from "sanity";
import { BiPalette } from "react-icons/bi";

export const arts = defineType({
  title: "Arts",
  name: "arts",
  type: "document",
  icon: BiPalette,
  fields: [
    defineField({
      title: "Art Name",
      name: "name",
      type: "string",
    }),
    defineField({
      title: "Art Description",
      name: "description",
      type: "text",
    }),
    defineField({
      title: "Art Image",
      name: "img",
      type: "image",
      validation: (r) => r.required(),
    }),
  ],
});
