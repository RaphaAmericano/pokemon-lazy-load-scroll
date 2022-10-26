import { pokemonQueries } from "../../hooks/queries";

interface IProps {
    name: string;
    url: string;
}
export function Card(props: IProps ){
    const { name, url } = props;
    // const { data } = pokemonQueries.useGetPokemonByUrl({ url });

    return <li>
        {name}
        {/* {data ?? <img src={data.sprites.front_default}/>} */}
        </li>
}