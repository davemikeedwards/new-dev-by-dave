import { allPokemon } from "../pokemon-data";

export function getOppCard(pokemonCards) {
  let twoCards = [];

  let oppCardOne =
    pokemonCards[Math.floor(Math.random() * pokemonCards.length)];
  let oppCardTwo =
    pokemonCards[Math.floor(Math.random() * pokemonCards.length)];

  if (Number(oppCardOne?.hp) >= Number(oppCardTwo?.hp)) {
    twoCards.push(oppCardOne);
  } else {
    twoCards.push(oppCardTwo);
  }

  let oppCardChoices = [
    pokemonCards[Math.floor(Math.random() * pokemonCards.length)],
    pokemonCards[Math.floor(Math.random() * pokemonCards.length)],
  ];

  twoCards.push(
    oppCardChoices[Math.floor(Math.random() * oppCardChoices.length)]
  );

  return twoCards[Math.floor(Math.random() * twoCards.length)];
}

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

export function PokeBallSelectorMobile({
  drawCards,
  ballRef,
  ballRef2,
  ballRef3,
  throwPokeBall,
}) {
  return (
    <>
      <div className="flex justify-center">
        {drawCards && (
          <img
            alt="ball"
            className="w-20 h-20 focus:animate-spin-fast outline-none"
            onClick={() => throwPokeBall(drawCards[0].card)}
            ref={ballRef}
            tabIndex={0}
            src={
              Number(drawCards[0]?.card.hp) < 100
                ? "/images/pokemon/poke-ball.png"
                : Number(drawCards[0]?.card.hp) < 200
                ? greatBallRandomizer()
                : Number(drawCards[0]?.card.hp) < 300
                ? ultraBallRandomizer()
                : Number(drawCards[0]?.card.hp) < 500
                ? "/images/pokemon/premier-ball.png"
                : "/images/pokemon/poke-ball.png"
            }
          />
        )}
      </div>
      <div className="flex justify-center">
        {drawCards?.map((card, index) => {
          return (
            <>
              {index !== 0 && (
                <img
                  alt="ball"
                  className={`w-20 h-20 ${
                    index === 1 ? "mr-0.5" : "ml-0.5"
                  } focus:animate-spin-fast outline-none`}
                  onClick={() => throwPokeBall(card.card)}
                  ref={index === 1 ? ballRef2 : ballRef3}
                  tabIndex={0}
                  src={
                    Number(drawCards[index]?.card.hp) < 100
                      ? "/images/pokemon/poke-ball.png"
                      : Number(drawCards[index]?.card.hp) < 200
                      ? greatBallRandomizer()
                      : Number(drawCards[index]?.card.hp) < 300
                      ? ultraBallRandomizer()
                      : Number(drawCards[index]?.card.hp) < 500
                      ? "/images/pokemon/premier-ball.png"
                      : "/images/pokemon/poke-ball.png"
                  }
                />
              )}
            </>
          );
        })}
      </div>
    </>
  );
}

export function PokeBallSelector({
  drawCards,
  ballRef,
  ballRef2,
  ballRef3,
  throwPokeBall,
}) {
  return (
    <>
      {drawCards?.map((card, index) => {
        return (
          <img
            alt="ball"
            className="w-40 focus:animate-spin-fast outline-none"
            onClick={() => throwPokeBall(card.card)}
            ref={index === 0 ? ballRef : index === 1 ? ballRef2 : ballRef3}
            tabIndex={0}
            src={
              Number(drawCards[index]?.card.hp) < 100
                ? "/images/pokemon/poke-ball.png"
                : Number(drawCards[index]?.card.hp) < 200
                ? greatBallRandomizer()
                : Number(drawCards[index]?.card.hp) < 300
                ? ultraBallRandomizer()
                : Number(drawCards[index]?.card.hp) < 500
                ? "/images/pokemon/premier-ball.png"
                : "/images/pokemon/poke-ball.png"
            }
          />
        );
      })}
    </>
  );
}

export function HowToPlay({
  howToPlayStep,
  setHowToPlayStep,
  setShowTutorial,
}) {
  function reset() {
    setHowToPlayStep(1);
    setShowTutorial(false);
  }

  return (
    <>
      <img
        alt="help"
        className="border border-gray-200 drop-shadow-lg rounded-2xl"
        onClick={() => {
          howToPlayStep !== 11 ? setHowToPlayStep(howToPlayStep + 1) : reset();
        }}
        src={`/images/pokemon/Oak${howToPlayStep}.gif`}
      />
    </>
  );
}
