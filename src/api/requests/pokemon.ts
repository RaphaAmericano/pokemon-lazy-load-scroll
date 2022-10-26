import service from "../service";
import { pokemonSchemas } from "../schemes"; 
export async function getPokemons(params: pokemonSchemas.GetPokemonsRequestParams ){
    const { url } = params;
    return service.get<never, pokemonSchemas.GetPokemonsResponse>(url);
}
export async function getPokemonByUrl(params: pokemonSchemas.GetPokemonByUrlRequestParams){
    const { url } = params;
    return service.get<never, pokemonSchemas.GetPokemonByUrlsResponse>(url);
}