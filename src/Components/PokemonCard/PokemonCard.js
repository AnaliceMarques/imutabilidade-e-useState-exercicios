import React from "react";
import {
  Card,
  PokemonName,
  PokemonType,
  EvolveButton,
  ImagemPokemon,
} from "./styles";

const PokemonCard = ({
  color,
  image,
  name,
  type,
  weight,
  id,
  evolved,
  setPokemon,
  evolve,
}) => {
  const evoluirPokemon = () => {
    evolved ? alert("Pokemon já está evoluído") : setPokemon(evolve);

    // console.log("Cliquei no botão de evoluir");
  };

  return (
    <Card color={color}>
      <ImagemPokemon src={image} alt={`Pokemon`} />
      <PokemonName>{name}</PokemonName>
      <PokemonType>{type}</PokemonType>
      <p>{weight}kg</p>

      <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  );
};

export default PokemonCard;

//Poderia tirar o arrow functino do onClick
