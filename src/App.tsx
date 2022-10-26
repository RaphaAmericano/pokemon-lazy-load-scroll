import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { pokemonQueries } from "./hooks/queries";

function App() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [offset, setOffset] = useState<number>(0);

  const { data, isLoading, isRefetching } = pokemonQueries.useGetPokemons({
    url: `${import.meta.env.VITE_API_URL}pokemon?offset=${offset}&limit=20`,
  });

  useEffect(() => {
      console.log(data);
      if( data ){
        const { results } = data;
        // setPokemons((prevPokemons) =>    [...prevPokemons, ...results].filter((value, index, self) => self.indexOf(value) === index) )
      }
    
  }, [offset, data]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setOffset((prev) => prev + 20);
      }
    });

    intersectionObserver.observe(document.querySelector("#sentinel"));
    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <main>
      <h1>Pokemons</h1>
      <h2>Pagina atual: {offset}</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.url} {...pokemon} />
        ))}
        <li id="sentinel" style={{ height: "20px", background: "green" }} />
      </ul>
    </main>
  );
}

export default App;
