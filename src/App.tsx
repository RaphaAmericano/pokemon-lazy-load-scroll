import { Container, Heading } from "@chakra-ui/react";
import { ModalContainer } from "./components/ModalContainer";
import { ScrollList } from "./components/ScrollList";


function App() {

  return (
    <Container as="main">
      <Heading as="h1" >Pokemons</Heading>
      <ScrollList />
      <ModalContainer />
    </Container>
  );
}

export default App;
