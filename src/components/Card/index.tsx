import { Box, ListItem, SkeletonCircle } from "@chakra-ui/react";
import { pokemonQueries } from "../../hooks/queries";
import { stringUtils } from "../../utils";

interface IProps {
    name: string;
    url: string;
}
export function Card(props: IProps ){
    const { name, url } = props;
    const { data } = pokemonQueries.useGetPokemonByUrl({ url });
    if(!data) return null;
    const { sprites: { front_default }  } = data;

    return  <ListItem>
                <Box padding="6" boxShadow="lg" bg="white">
                    {stringUtils.capsizeFirst(name)}
                    {front_default !== null ? <img src={front_default} /> : <SkeletonCircle /> }
                </Box>
            </ListItem>
}