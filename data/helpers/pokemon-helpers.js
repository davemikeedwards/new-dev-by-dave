import { allPokemon } from "../pokemon-data";

export function getPokemon() {
  return allPokemon?.filter(
    (pokemon) => pokemon.hp !== "" && pokemon.hasOwnProperty("types")
  );
}

export function greatBallRandomizer() {
  const balls = [
    "/images/pokemon/poke-ball.png",
    "/images/pokemon/great-ball.png",
  ];

  return balls[Math.floor(Math.random() * balls.length)];
}

export function ultraBallRandomizer() {
  const balls = [
    "/images/pokemon/poke-ball.png",
    "/images/pokemon/ultra-ball.png",
  ];

  return balls[Math.floor(Math.random() * balls.length)];
}
