import { defineType, defineField } from "sanity";
import { PiPersonSimpleLight } from "react-icons/pi";

export const guests = defineType({
  title: "Guests",
  name: "guests",
  type: "document",
  icon: PiPersonSimpleLight,
  fields: [
    defineField({
      title: "Guest Name",
      name: "name",
      type: "string",
      validation: (r) => r.required(),

    }),

    defineField({
      title: "Guest Link",
      name: "link",
      type: "url",
    }),
    defineField({
      title: "Guest Image",
      name: "img",
      type: "image",
      validation: (r) => r.required(),
    }),
  ],
});
