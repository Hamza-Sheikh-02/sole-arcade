import { type SchemaTypeDefinition } from "sanity";
import heroImage from "./heroImage";
import promotionImage from "./promotionImage";
import categoriesImage from "./categoriesImage";
import product from "./product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroImage, promotionImage, categoriesImage, product],
};
