import { type SchemaTypeDefinition } from "sanity";
import heroImage from "./heroImage";
import promotionImage from "./promotionImage";
import categoriesImage from "./categoriesImage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroImage, promotionImage, categoriesImage],
};
