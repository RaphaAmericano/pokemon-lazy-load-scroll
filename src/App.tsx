import { Container, Heading, List, Spinner } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { pokemonSchemas } from "./api/schemes";
import { Card } from "./components/Card";
import { pokemonQueries } from "./hooks/queries";

function App() {
  const sentinelRef = useRef(null);
  const [pokemons, setPokemons] = useState<pokemonSchemas.PokemonResume[]>([]);
  const [offset, setOffset] = useState<number>(0);

  const { data, isLoading, isSuccess, isError } = pokemonQueries.useGetPokemons({
    url: `${
      import.meta.env.VITE_API_URL
    }pokemon?offset=${offset}&limit=20`,
  });

  useEffect(() => {
    if (data !== undefined) {
      console.log(data);
      console.log(offset);
      const { results } = data;
      setPokemons(
        (prevPokemons) =>
          [...prevPokemons, ...results]
          .filter(
            (pokemon, index, self) => index === self.findIndex((item) => item.name === pokemon.name)
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
    if(sentinelRef.current !== null && (isSuccess || isError)){
      intersectionObserver.observe(sentinelRef.current)
    }
    return () => intersectionObserver.disconnect();
  }, [sentinelRef.current]);

  return (
    <Container as="main">
      <Heading as="h1" >Pokemons</Heading>
      <Heading as="h2">Pagina atual: {offset} </Heading>
      <Heading as="h3">Pokemons count {pokemons.length}</Heading>
      <List spacing={3}>
        {pokemons
        .map((pokemon) => (
          <Card key={pokemon.url} {...pokemon} />
        ))}
        <li ref={sentinelRef} style={{ height: "20px", background: "green" }} />
      </List>
      {isLoading && <Spinner size="xl" />}
    </Container>
  );
}

export default App;
