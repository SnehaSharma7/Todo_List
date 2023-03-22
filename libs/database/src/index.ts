import { from } from "@apollo/client";
import hasuraresult from "./graphql.hasura.helpers";
export * as hasurahelpers from "./graphql.hasura.helpers";
export * as hasuratypes from "./graphql.hasura.types";

export const hasuraPossibleTypes = {
  ...hasuraresult.possibleTypes,
};
