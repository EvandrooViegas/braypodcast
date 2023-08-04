import { defineArrayMember, defineField } from "sanity"
const testimonials = defineField({
    title: "Testimonials",
    name: "testimonials",
    type: "array",
    of: [
      defineArrayMember({
        title: "Testimonials",
        name: "testimonial",
        type: "document",
        fields: [
          defineField({
            title: "Name",
            name: "name",
            type: "string",
            validation: r => r.required()
          }),
          defineField({
            title: "Avatar",
            name: "avatar",
            type: "image",
            validation: r => r.required()
          }),
          defineField({
            title: "Mesage",
            name: "message",
            type: "text",
            validation: r => r.required()
          }),
          defineField({
            title: "Link",
            name: "link",
            type: "url",
          }),
        ],
      }),
    ],
  })
  export default testimonials