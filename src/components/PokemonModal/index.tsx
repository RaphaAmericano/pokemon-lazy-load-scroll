import {
  Badge,
  Box,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
} from "@chakra-ui/react";
import { pokemonSchemas } from "../../api/schemes";
import { capsizeFirst } from "../../utils/strings";

type IProps = pokemonSchemas.Pokemon;

export function PokemonModal(props: IProps) {
  const { abilities, name, sprites, types, height, weight } = props;
  const { other } = sprites;
  const {
    dream_world: { front_default },
  } = other;
  return (
    <>
      <ModalHeader>{capsizeFirst(name)}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Box>
          {front_default !== null && <Image src={front_default} />}
          <Box p={6}>
            <Box display="flex" alignItems={"baseline"}>
              {types.map(({ name }) => (
                <Badge
                  key={name}
                  borderRadius={"full"}
                  px="2"
                  colorScheme={"teal"}
                >
                  {name}
                </Badge>
              ))}
            </Box>
            <Box>
              {height}
              <Box as="span" color="gray.600" fontSize="sm">
                / inches
              </Box>
            </Box>
            <Box>
              {weight}
              <Box as="span" color="gray.600" fontSize="sm">
                / pounds
              </Box>
            </Box>
            <Box display="flex" mt="2" alignItems="center">
              Abilities:{" "}
              {abilities.map((ability) => ability.ability.name).join(" ")}
            </Box>
          </Box>
        </Box>
      </ModalBody>
    </>
  );
}
