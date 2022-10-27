export interface Ability {
    ability: {
        name: string;
        url: string;
    };
    isHidden: boolean;
    slot: number;
}

export type PokemonType = "normal" | "fighting" | "flying" 
    | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" 
    | "fire" | "water" | "grass" | "electric" | "psychic"  
    | "ice" | "dragon" | "dark" | "fairy" | "unknown" | "shadow"