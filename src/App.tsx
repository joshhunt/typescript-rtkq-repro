import { useEffect } from "react";
import { pokemonApi } from "./api";
import { useMultipleQueries } from "./useMultiple";

interface AppProps {}

function App(props: AppProps) {
  const [pokemons, makeRequest] = useMultipleQueries(
    pokemonApi.endpoints.getPokemonByName
  );

  for (const pokemonQuery of pokemons) {
    console.log(pokemonQuery.data);
    //                       ^?
  }

  console.log(makeRequest);
  //          ^?

  const {} = props;

  return <div>App component</div>;
}
