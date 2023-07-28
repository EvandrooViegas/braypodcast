import { defineArrayMember, defineField } from "sanity"

const photos = defineField({
    title: "Photos",
    name: "photos",
    type: "array",
    of: [
      defineArrayMember({
        title: "photo",
        name: "photo",
        type: "image",
      }),
    ],
  })
  export default photos