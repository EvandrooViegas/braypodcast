import { defineArrayMember, defineField } from "sanity"
const trusted_by = defineField({
    title: "Trusted By",
    name: "trusted_by",
    type: "array",
    of: [
      defineArrayMember({
        title: "Entity",
        name: "entity",
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
        ],
      }),
    ],
  })
  export default trusted_by