import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreateRestaurantInput = {
  address: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createRestaurant: Restaurant;
  deleteRestaurant: Scalars['Boolean'];
  updateRestaurant: Restaurant;
};


export type MutationCreateRestaurantArgs = {
  data: CreateRestaurantInput;
};


export type MutationDeleteRestaurantArgs = {
  id: Scalars['String'];
};


export type MutationUpdateRestaurantArgs = {
  data: UpdateRestaurantInput;
  id: Scalars['String'];
};

export type PaginationInput = {
  page: Scalars['Float'];
  pageSize: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  restaurants: RestaurantPaginatationResponse;
  searchRestaurants: RestaurantPaginatationResponse;
};


export type QueryRestaurantsArgs = {
  pagination: PaginationInput;
};


export type QuerySearchRestaurantsArgs = {
  searchInput: SearchRestaurantInput;
};

export type Restaurant = {
  __typename?: 'Restaurant';
  address: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  phone: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type RestaurantPaginatationResponse = {
  __typename?: 'RestaurantPaginatationResponse';
  page: Scalars['Float'];
  pageSize: Scalars['Float'];
  restaurants: Array<Restaurant>;
  totalCount: Scalars['Float'];
};

export type SearchRestaurantInput = {
  page: Scalars['Float'];
  pageSize: Scalars['Float'];
  searchTerm: Scalars['String'];
};

export type UpdateRestaurantInput = {
  address?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type GetRestaurantsQueryVariables = Exact<{
  pagination: PaginationInput;
}>;


export type GetRestaurantsQuery = { __typename?: 'Query', restaurants: { __typename?: 'RestaurantPaginatationResponse', totalCount: number, restaurants: Array<{ __typename?: 'Restaurant', name: string, address: string, id: string, email: string, phone: string }> } };

export type SearchRestaurantsQueryVariables = Exact<{
  searchInput: SearchRestaurantInput;
}>;


export type SearchRestaurantsQuery = { __typename?: 'Query', searchRestaurants: { __typename?: 'RestaurantPaginatationResponse', totalCount: number, restaurants: Array<{ __typename?: 'Restaurant', name: string, address: string, id: string, email: string, phone: string }> } };


export const GetRestaurantsDocument = `
    query GetRestaurants($pagination: PaginationInput!) {
  restaurants(pagination: $pagination) {
    restaurants {
      name
      address
      id
      email
      phone
    }
    totalCount
  }
}
    `;
export const useGetRestaurantsQuery = <
      TData = GetRestaurantsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetRestaurantsQueryVariables,
      options?: UseQueryOptions<GetRestaurantsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetRestaurantsQuery, TError, TData>(
      ['GetRestaurants', variables],
      fetcher<GetRestaurantsQuery, GetRestaurantsQueryVariables>(client, GetRestaurantsDocument, variables, headers),
      options
    );
export const SearchRestaurantsDocument = `
    query SearchRestaurants($searchInput: SearchRestaurantInput!) {
  searchRestaurants(searchInput: $searchInput) {
    restaurants {
      name
      address
      id
      email
      phone
    }
    totalCount
  }
}
    `;
export const useSearchRestaurantsQuery = <
      TData = SearchRestaurantsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: SearchRestaurantsQueryVariables,
      options?: UseQueryOptions<SearchRestaurantsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<SearchRestaurantsQuery, TError, TData>(
      ['SearchRestaurants', variables],
      fetcher<SearchRestaurantsQuery, SearchRestaurantsQueryVariables>(client, SearchRestaurantsDocument, variables, headers),
      options
    );