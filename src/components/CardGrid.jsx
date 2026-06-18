import Card from "./Card";

import "../styles/cardGrid.css";

export default function CardGrid() {
  const pokemonNames = [
    "bulbasaur",
    "charmander",
    "ariados",
    "magmortar",
    "hitmonchan",
  ];

  const pokemonItems = pokemonNames.map((pokemon) => {
    return {
      id: crypto.randomUUID(),
      name: `${pokemon[0].toUpperCase() + pokemon.substring(1)}`,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    };
  });

  function handleClick() {}

  const pokemonCards = pokemonItems.map((pokemon) => <Card item={pokemon} />);

  return <div className="cardGrid">{pokemonCards}</div>;
}
