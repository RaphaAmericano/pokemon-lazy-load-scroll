import { useEffect, useRef, useState } from "react";
import { pokemonSchemas } from "./api/schemes";
import { Card } from "./components/Card";
import { pokemonQueries } from "./hooks/queries";

function App() {
  const sentinelRef = useRef(null);
  const [pokemons, setPokemons] = useState<pokemonSchemas.PokemonResume[]>([]);
  const [offset, setOffset] = useState<number>(0);

  const { data, isLoading, isRefetching } = pokemonQueries.useGetPokemons({
    url: `${import.meta.env.VITE_API_URL}pokemon?offset=${offset}&limit=20`,
  });

  useEffect(() => {
    console.log(data);
    if (data?.results) {
      const { results } = data;
      setPokemons((prevPokemons) => [...prevPokemons, ...results])
    }
  }, [offset, data]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setOffset((prev) => prev + 20);
      }
    });
    console.log(sentinelRef.current);
    if(sentinelRef.current !== null ){
      intersectionObserver.observe(sentinelRef.current);
    }
    
    return () => intersectionObserver.disconnect();
  }, [sentinelRef.current]);

  return (
    <main>
      <h1>Pokemons</h1>
      <h2>Pagina atual: {offset}</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.url} {...pokemon} />
        ))}
        <li ref={sentinelRef} style={{ height: "20px", background: "green" }} />
      </ul>
    </main>
  );
}

export default App;
