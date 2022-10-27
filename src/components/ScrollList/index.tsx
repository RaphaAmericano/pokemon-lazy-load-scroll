import { Box, List, Spinner } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { pokemonSchemas } from "../../api/schemes";
import { pokemonQueries } from "../../hooks/queries";
import { Card } from "../Card";

export function ScrollList() {
  const sentinelRef = useRef(null);
  const [pokemons, setPokemons] = useState<pokemonSchemas.PokemonResume[]>([]);
  const [offset, setOffset] = useState<number>(0);

  const { data, isLoading, isSuccess, isError } = pokemonQueries.useGetPokemons(
    {
      url: `${import.meta.env.VITE_API_URL}pokemon?offset=${offset}&limit=20`,
    }
  );

  useEffect(() => {
    if (data !== undefined) {
      const { results } = data;
      setPokemons((prevPokemons) =>
        [...prevPokemons, ...results].filter(
          (pokemon, index, self) =>
            index === self.findIndex((item) => item.name === pokemon.name)
        )
      );
    }
  }, [offset, data]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setOffset((prev) => prev + 20);
      }
    });
    if (sentinelRef.current !== null && (isSuccess || isError)) {
      intersectionObserver.observe(sentinelRef.current);
    }
    return () => intersectionObserver.disconnect();
  }, [sentinelRef.current]);
  return (
    <>
      <Box>
        <List spacing={3}>
          {pokemons.map((pokemon) => (
            <Card key={pokemon.url} {...pokemon} />
          ))}
          <li
            ref={sentinelRef}
            style={{ height: "20px", background: "transparent" }}
          />
        </List>
      </Box>

      {isLoading && (
        <Box display={"flex"} justifyContent="center">
          <Spinner size="xl" />
        </Box>
      )}
    </>
  );
}
