import Card from "./Card";
import getData from "../game/getData";

export default function CardGrid() {
  const pokemonList = [];

  for (let i = 1; i < 12; i++) {
    const item = {
      id: crypto.randomUUID(),
      name: "bulbasaur",
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.pow(i + 13, 2)}.png`,
    };

    pokemonList.push(item);
  }

  function handleClick() {}

  const pokemonCards = pokemonList.map((pokemon) => (
    <li key={pokemon.id} value={pokemon.name} onClick={handleClick}>
      <Card item={pokemon} />
    </li>
  ));

  return (
    <div className="cardGrid">
      <ul>{pokemonCards}</ul>
    </div>
  );
}

async function createList(pokemonNames) {
  const pokemonList = [];

  for (const pokemon of pokemonNames) {
    const item = await getData(pokemon);
    item.id = crypto.randomUUID();
    pokemonList.push(item);
  }

  console.log(pokemonList);
}

createList(["bulbasaur", "charizard"]);
