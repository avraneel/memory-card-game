import Card from "./Card";

import "../styles/cardGrid.css";

export default function CardGrid({ setScore, setBestScore }) {
  const pokemonNames = [
    "bayleaf",
    "charmander",
    "ariados",
    "magmortar",
    "hitmonchan",
    "snorlax",
    "darkrai",
    "empoleon",
    "hypno",
    "wabuffet",
  ];

  // When we click on card, App get rendered > CardGrid gets rendered > so shuffle() is executed again
  shuffle(pokemonNames);

  const pokemonItems = pokemonNames.map((pokemon) => {
    return {
      id: crypto.randomUUID(),
      name: pokemon,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    };
  });

  const pokemonCards = pokemonItems.map((pokemon) => (
    <Card
      item={pokemon}
      key={pokemon.name}
      setScore={setScore}
      setBestScore={setBestScore}
    />
  ));

  return <div className="cardGrid">{pokemonCards}</div>;
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);

    // exchange
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
}
