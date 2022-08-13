import { GraphQLClient } from "graphql-request";
import { API_URL } from "../constants";

let client: null | GraphQLClient = null;

export const restaurantsApiClient = (): GraphQLClient => {
  if (client === null) {
    return new GraphQLClient(API_URL);
  }

  return client;
};
