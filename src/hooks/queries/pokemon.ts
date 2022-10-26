import { useQuery } from "react-query";
import { pokemonRequests } from "../../api/requests";
import { pokemonSchemas } from "../../api/schemes";

export function useGetPokemons( params: pokemonSchemas.GetPokemonsRequestParams ) {
  async function requestFn() {
    return pokemonRequests.getPokemons(params!);
  }

  const query = useQuery<pokemonSchemas.GetPokemonsResponse, unknown>(
    ["get-pokemons", params],
    requestFn,
    {
      enabled: Boolean(params),
      staleTime: 2000,
    }
  );

  return query;
};

export function useGetPokemonByUrl(params: pokemonSchemas.GetPokemonByUrlRequestParams){
    async function requestFn(){
        return pokemonRequests.getPokemonByUrl(params!);
    }

    const query = useQuery<pokemonSchemas.GetPokemonByUrlsResponse, unknown>(["get-pokemon", params], requestFn, {
        enabled: Boolean(params),
        staleTime: 2000
    });
    return query;
}
