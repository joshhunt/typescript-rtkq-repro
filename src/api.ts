import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GetPokemonByNameResponse {
  name: string;
  id: number;
  height: number;
  weight: number;
}

interface GetPokemonByNameApiArgs {
  name: string;
}

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<
      GetPokemonByNameResponse,
      GetPokemonByNameApiArgs
    >({
      query: (args) => `pokemon/${args.name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi;
