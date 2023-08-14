import { type SchemaTypeDefinition } from "sanity";
import { me } from "./schemas/me";
import { videos } from "./schemas/video";
import { guests } from "./schemas/guests";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [me, guests, videos],
};
