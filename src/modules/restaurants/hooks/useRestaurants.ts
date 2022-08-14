import { useQueryClient } from "react-query";
import { restaurantsApiClient } from "../../apiClient";
import {
  useSearchRestaurantsQuery,
  useGetRestaurantsQuery,
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

  const {
    variables: { searchInput },
  } = config;

  const { data, isError, isLoading, error, refetch } =
    useSearchRestaurantsQuery(
      requestClient,
      {
        searchInput: searchInput,
      },
      {
        enabled:
          searchInput.searchTerm && searchInput.searchTerm.length >= 2
            ? true
            : false,
      }
    );

  const {
    data: getRestaurantResponse,
    isError: getRestaurantIsError,
    isLoading: getRestaurantIsLoading,
    error: getRestaurantError,
  } = useGetRestaurantsQuery(
    requestClient,
    {
      pagination: {
        page: searchInput.page,
        pageSize: searchInput.pageSize,
      },
    },
    {
      enabled:
        (searchInput.searchTerm && searchInput.searchTerm.length >= 2) ||
        config.enabled === false
          ? false
          : true,
    }
  );

  const createRestaurant = useCreateRestaurantMutation(requestClient, {
    onSuccess: () => {
      queryClient.invalidateQueries("SearchRestaurants");
      queryClient.invalidateQueries("GetRestaurants");
    },
  });

  const updateRestaurant = useUpdateRestaurantMutation(requestClient, {
    onSuccess: () => {
      queryClient.invalidateQueries("SearchRestaurants");
      queryClient.invalidateQueries("GetRestaurants");
    },
  });

  const deleteRestaurant = useDeleteRestaurantMutation(requestClient, {
    onSuccess: () => {
      queryClient.invalidateQueries("SearchRestaurants");
      queryClient.invalidateQueries("GetRestaurants");
    },
  });

  return {
    data: {
      restaurants:
        data?.searchRestaurants.restaurants ||
        getRestaurantResponse?.restaurants.restaurants ||
        [],
      totalCount:
        data?.searchRestaurants.totalCount ||
        getRestaurantResponse?.restaurants.totalCount ||
        0,
    },
    isError: isError || getRestaurantIsError,
    isLoading: isLoading || getRestaurantIsLoading,
    error: error || getRestaurantError,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
    refetch,
  };
};

export default useRestaurants;
