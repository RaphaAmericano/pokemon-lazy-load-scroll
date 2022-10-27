import { PokemonType } from "../api/schemes/properties";

export function pokemonTypeColor(type: PokemonType ){
    switch(type){
        case "bug":
            return "green.100"
        default:
            return "gray.100"
    }
}