import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PokemonCard from "./Components/PokemonCard/PokemonCard";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: "yellow",
    image:
      "https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png",
    id: 0,
  });

  const pokemonEvolved1 = {
    ...pokemon,
    name: "Pikachu",
    evolved: true,
    weight: 6,
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/240px-0025Pikachu.png",
  };

  const [pokemon2, setPokemon2] = useState({
    name: "Bulbasaur",
    type: "Grass/Poison",
    evolved: false,
    weight: 6.9,
    color: "green",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/240px-0001Bulbasaur.png",
    id: 1,
  });

  const pokemonEvolved2 = {
    ...pokemon2,
    name: "Ivysaur",
    evolved: true,
    weight: 13,
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/8/81/0002Ivysaur.png/240px-0002Ivysaur.png",
  };

  const [pokemon3, setPokemon3] = useState({
    name: "Cleffa",
    type: "Fairy",
    evolved: false,
    weight: 3,
    color: "pink",
    image:
      "https://archives.bulbagarden.net/media/upload/archive/7/73/20150110171433%210173Cleffa.png",
    id: 2,
  });

  const pokemonEvolved3 = {
    ...pokemon3,
    name: "Clefairy",
    evolved: true,
    weight: 7.5,
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/b/b7/0035Clefairy.png/240px-0035Clefairy.png",
  };

  // Para fazer seus próximos pokemons, crie novos estados!

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
        <PokemonCard
          name={pokemon.name}
          type={pokemon.type}
          evolved={pokemon.evolved}
          weight={pokemon.weight}
          color={pokemon.color}
          image={pokemon.image}
          id={pokemon.id}
          setPokemon={setPokemon}
          evolve={pokemonEvolved1}
        />
        <PokemonCard
          name={pokemon2.name}
          type={pokemon2.type}
          evolved={pokemon2.evolved}
          weight={pokemon2.weight}
          color={pokemon2.color}
          image={pokemon2.image}
          id={pokemon2.id}
          setPokemon={setPokemon2}
          evolve={pokemonEvolved2}
        />
        <PokemonCard
          name={pokemon3.name}
          type={pokemon3.type}
          evolved={pokemon3.evolved}
          weight={pokemon3.weight}
          color={pokemon3.color}
          image={pokemon3.image}
          id={pokemon3.id}
          setPokemon={setPokemon3}
          evolve={pokemonEvolved3}
        />
        {/* Crie aqui seus próximos pokemons! */}
      </FlexContainer>
    </>
  );
}

export default App;
