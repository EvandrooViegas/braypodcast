import { defineType, defineField, defineArrayMember } from "sanity";
import { BsPerson } from "react-icons/bs";
import infos from "./infos";
import social_medias from "./social_medias";
import photos from "./photos";
import truested_by from "./trusted_by";
import testimonials from "./testimonials";

export const me = defineType({
  title: "Me",
  name: "me",
  type: "document",
  icon: BsPerson,
  // @ts-ignore
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      title: "What do you do",
      name: "description",
      type: "text",
      validation: (r) => r.required(),
    }),
    defineField({
      title: "Avatar",
      name: "avatar",
      type: "image",
      validation: (r) => r.required(),
    }),
    defineField({
      title: "Last Youtube Video Link",
      name: "video",
      type: "url",
    }),

    defineField({
      title: "Skills",
      name: "skills",
      type: "array",
      validation: (r) => r.required(),
      of: [
        defineArrayMember({
          title: "Skill",
          name: "skill",
          type: "string",
          validation: (r) => r.required(),
        }),
      ],
    }),
    defineField({
      title: "Slogan",
      name: "slogan",
      type: "string",
      validation: (r) => r.min(3).error("Slogan must be longer than 3 words"),
    }),
    photos,
    defineField({
      title: "Best Videos",
      name: "best_videos",
      type: "array",
      of: [{ type: "reference", name: "video", title: "Video", to: [{ type: "video" }] }],
    }),
    defineField({
      title: "Guests",
      name: "guests",
      type: "array",
      of: [{ type: "reference", name: "guests", title: "Guests", to: [{ type: "guests" }] }],
    }),
    social_medias,
    infos,
    testimonials,
    truested_by,
    defineField({
      name: "followers_growth",
      title: "Followers Growth",
      type: "array",
      of: [
        defineField({
          name: "growth",
          title: "Followers Growth",
          type: "document",
          fields: [
            defineField({
              name: "date",
              title: "Date",
              type: "date",
            }),
            defineField({
              name: "value",
              title: "Quantity",
              type: "number",
            }),
          ]
        })
      ],
    }),
  ],
});
