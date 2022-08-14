import { restaurantsApiClient } from "../../apiClient";
import {
  useSearchRestaurantsQuery,
  SearchRestaurantsQueryVariables,
} from "../graphql";

interface UseRestaurantsInput {
  enabled?: boolean;
  variables: SearchRestaurantsQueryVariables;
}

const useRestaurants = (config: UseRestaurantsInput) => {
  const requestClient = restaurantsApiClient();

  const { data, isError, isLoading, error } = useSearchRestaurantsQuery(
    requestClient,
    {
      searchInput: config.variables.searchInput,
    },
    {
      enabled: config?.enabled || true,
    }
  );

  return {
    data: {
      restaurants: data?.searchRestaurants.restaurants || [],
      totalCount: data?.searchRestaurants.totalCount || 0,
    },
    isError,
    isLoading,
    error,
  };
};

export default useRestaurants;
