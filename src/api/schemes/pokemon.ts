import { Ability } from "./properties";

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: any[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_types: any[];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: string | null | undefined;
    back_shiny: string;
    back_shiny_female: string | null | undefined;
    front_default: string | null | undefined;
    front_female: string | null | undefined;
    front_shiny: string | null | undefined;
    front_shiny_female: string | null | undefined;
    other: {
      dream_world: {
        front_default: string | null | undefined;
        front_female: string | null | undefined;
      };
      home: {
        front_default: string | null | undefined;
        front_female: string | null | undefined;
        front_shiny: string | null | undefined;
        front_shiny_female: string | null | undefined;
      };
      "official-artwork": {
        front_default: string | null | undefined;
      };
    };
  };
  versions: {
    "generation-i": {
      "red-blue": {
        back_default: string | null | undefined;
        back_gray: string | null | undefined;
        back_transparent: string | null | undefined;
        front_default: string | null | undefined;
        front_gray: string | null | undefined;
        front_transparent: string | null | undefined;
      };
      yellow: {
        back_default: string | null | undefined;
        back_gray: string | null | undefined;
        back_transparent: string | null | undefined;
        front_default: string | null | undefined;
        front_gray: string | null | undefined;
        front_transparent: string | null | undefined;
      };
    };
    "generation-ii": {
      crystal: {
        back_default: string | null | undefined;
        back_shiny: string | null | undefined;
        back_shiny_transparent: string | null | undefined;
        back_transparent: string | null | undefined;
        front_default: string | null | undefined;
        front_shiny: string | null | undefined;
        front_shiny_transparent: string | null | undefined;
        front_transparent: string | null | undefined;
      };
      gold: {
        back_default: string | null | undefined;
        back_shiny: string | null | undefined;
        front_default: string | null | undefined;
        front_shiny: string | null | undefined;
        front_transparent: string | null | undefined;
      };
      silver: {
        back_default: string | null | undefined;
        back_shiny: string | null | undefined;
        front_default: string | null | undefined;
        front_shiny: string | null | undefined;
        front_transparent: string | null | undefined;
      };
    };
    "generation-iii": {
      emerald: {
        front_default: string | null | undefined;
        front_shiny: string | null | undefined;
      };
      "firered-leafgreen": {
        back_default: string | null | undefined;
        back_shiny: string | null | undefined;
        front_default: string | null | undefined;
        front_shiny: string | null | undefined;
      };
      "ruby-sapphire": {
        back_default: string | null | undefined;
        back_shiny: string | null | undefined;
        front_default: string | null | undefined;
        front_shiny: string | null | undefined;
      };
    };
    "generation-iv": {
      "diamond-pearl": {
        back_default: string | null | undefined;
        back_female: string | null | undefined;
        back_shiny: string | null | undefined;
        back_shiny_female: string | null | undefined;
        front_default: string | null | undefined;
        front_female: string | null | undefined;
        front_shiny: string | null | undefined;
        front_shiny_female: string | null | undefined;
      };
      "heartgold-soulsilver": {
        back_default: string | null | undefined;
        back_female: string | null | undefined;
        back_shiny: string | null | undefined;
        back_shiny_female: string | null | undefined;
        front_default: string | null | undefined;
        front_female: string | null | undefined;
        front_shiny: string | null | undefined;
        front_shiny_female: string | null | undefined;
      };
      platinum: {
        back_default: string | null | undefined;
        back_female: string | null | undefined;
        back_shiny: string | null | undefined;
        back_shiny_female: string | null | undefined;
        front_default: string | null | undefined;
        front_female: string | null | undefined;
        front_shiny: string | null | undefined;
        front_shiny_female: string | null | undefined;
      };
    };
    "generation-v": {
      "black-white": {
        animated: {
          back_default: string | null | undefined;
          back_female: string | null | undefined;
          back_shiny: string | null | undefined;
          back_shiny_female: string | null | undefined;
          front_default: string | null | undefined;
          front_female: string | null | undefined;
          front_shiny: string | null | undefined;
          front_shiny_female: string | null | undefined;
        };
        back_default: string | null | undefined;
        back_female: string | null | undefined;
        back_shiny: string | null | undefined;
        back_shiny_female: string | null | undefined;
        front_default: string | null | undefined;
        front_female: string | null | undefined;
        front_shiny: string | null | undefined;
        front_shiny_female: string | null | undefined;
      };
    };
    "generation-vi": {
      "omegaruby-alphasapphire": {
        front_default: string | null | undefined;
        front_female: string | null | undefined;
        front_shiny: string | null | undefined;
        front_shiny_female: string | null | undefined;
      };
      "x-y": {
        front_default: string | null | undefined;
        front_female: string | null | undefined;
        front_shiny: string | null | undefined;
        front_shiny_female: string | null | undefined;
      };
    };
    "generation-vii": {
      icons: {
        front_default: string | null | undefined;
        front_female: string | null | undefined;
      };
      "ultra-sun-ultra-moon": {
        front_default: string | null | undefined;
        front_female: string | null | undefined;
        front_shiny: string | null | undefined;
        front_shiny_female: string | null | undefined;
      };
    };
    "generation-viii": {
      icons: {
        front_default: string | null | undefined;
        front_female: string | null | undefined;
      };
    };
  };
  stats: any[];
  types: any[];
  weight: number;
}

export interface PokemonResume { 
  name: string; 
  url: string 
}

export interface GetPokemonsRequestParams {
  url: string;
}
export interface GetPokemonsResponse {
  count: number;
  next: string | null | undefined;
  previous: string | null | undefined;
  results: PokemonResume[];
}

export interface GetPokemonByUrlRequestParams {
  url: string;
}

export type GetPokemonByUrlsResponse = Pokemon;

