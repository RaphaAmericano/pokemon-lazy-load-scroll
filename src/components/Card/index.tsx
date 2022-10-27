import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  ListItem,
  SkeletonCircle,
  SkeletonText,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { pokemonQueries } from "../../hooks/queries";
import { useStores } from "../../stores";
import { stringUtils } from "../../utils";
import { PokemonModal } from "../PokemonModal";

interface IProps {
  name: string;
  url: string;
}
export function Card(props: IProps) {
  const { name, url } = props;
  const { data, isLoading, isError } = pokemonQueries.useGetPokemonByUrl({
    url,
  });

  const {
    modalStore: { setChildren, onOpen },
  } = useStores();
  if (!data) return null;

  function openModal() {
    if (data) {
      setChildren(<PokemonModal {...data} />);
      onOpen();
    }
  }
  const {
    sprites: { front_default },
  } = data;

  return (
    <ListItem>
      <Box padding="6" boxShadow="lg" bg="white">
        <Flex>
          <Box>
            {(isLoading || isError) ?
             (
              <SkeletonCircle />
            ) : (front_default !== null && front_default !== undefined) ? (
              <Image src={front_default} />
            ) : null }
          </Box>
          <Center>
            {isLoading || isError ? (
              <SkeletonText />
            ) : (
              stringUtils.capsizeFirst(name)
            )}
          </Center>
          <Spacer />
          <Center>
            <Button onClick={openModal}>Detalhes</Button>
          </Center>
        </Flex>
      </Box>
    </ListItem>
  );
}
