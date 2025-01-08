import { type SchemaTypeDefinition } from "sanity";
import heroImage from "./heroImage";
import promotionImage from "./promotionImage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroImage, promotionImage],
};
