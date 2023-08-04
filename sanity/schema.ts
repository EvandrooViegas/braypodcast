import { type SchemaTypeDefinition } from "sanity";
import { me } from "./schemas/me";
import { videos } from "./schemas/video";
import { arts } from "./schemas/arts";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [me, arts, videos],
};
