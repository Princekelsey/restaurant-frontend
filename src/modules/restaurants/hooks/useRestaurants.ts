import { useQueryClient } from "react-query";
import { restaurantsApiClient } from "../../apiClient";
import {
  useSearchRestaurantsQuery,
  SearchRestaurantsQueryVariables,
  useCreateRestaurantMutation,
  useDeleteRestaurantMutation,
  useUpdateRestaurantMutation,
} from "../graphql";

interface UseRestaurantsInput {
  enabled?: boolean;
  variables: SearchRestaurantsQueryVariables;
}

const useRestaurants = (config: UseRestaurantsInput) => {
  const requestClient = restaurantsApiClient();

  const queryClient = useQueryClient();

  const { data, isError, isLoading, error } = useSearchRestaurantsQuery(
    requestClient,
    {
      searchInput: config.variables.searchInput,
    },
    {
      enabled: config?.enabled || true,
    }
  );

  const createRestaurant = useCreateRestaurantMutation(requestClient, {
    onSuccess: () => {
      queryClient.invalidateQueries("SearchRestaurants");
    },
  });

  const updateRestaurant = useUpdateRestaurantMutation(requestClient, {
    onSuccess: () => {
      queryClient.invalidateQueries("SearchRestaurants");
    },
  });

  const deleRestaurant = useDeleteRestaurantMutation(requestClient, {
    onSuccess: () => {
      queryClient.invalidateQueries("SearchRestaurants");
    },
  });

  return {
    data: {
      restaurants: data?.searchRestaurants.restaurants || [],
      totalCount: data?.searchRestaurants.totalCount || 0,
    },
    isError,
    isLoading,
    error,
    createRestaurant,
    updateRestaurant,
    deleRestaurant,
  };
};

export default useRestaurants;
