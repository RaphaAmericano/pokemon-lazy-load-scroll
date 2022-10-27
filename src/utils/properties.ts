import { PokemonType } from "../api/schemes/properties";

export function pokemonTypeColor(type: PokemonType ){
    switch(type){
        case "bug":
            return "green"
        default:
            return "gray"

            // apenas essas cores para o colorScheme do Badge
            // "whiteAlpha" | "blackAlpha" | "gray" | "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "purple" | "pink" | "linkedin" | "facebook" | "messenger" | "whatsapp" | "twitter" | "telegram"
    }
}