import { useEffect, useRef, useState } from "react";
import { InnerMargins, OuterShellPadding } from "../components/layout";
import {
  getPokemon,
  greatBallRandomizer,
  ultraBallRandomizer,
} from "../data/helpers/pokemon-helpers";

export default function Pokemon() {
  const [drawCards, setDrawCards] = useState(undefined);
  const [pokemonCards, setPokemonCards] = useState([]);
  const [showBalls, setShowBalls] = useState(true);
  const [yourPokemon, setYourPokemon] = useState(undefined);
  const [oppPokemon, setOppPokemon] = useState(undefined);
  const [howToPlayStep, setHowToPlayStep] = useState(1);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [showWarning, setShowWarning] = useState(true);
  const [yourScore, setYourScore] = useState(0);
  const [oppScore, setOppScore] = useState(0);
  const [winner, setWinner] = useState(undefined);
  const [imageOneLoaded, setImageOneLoaded] = useState(false);
  const [imageTwoLoaded, setImageTwoLoaded] = useState(false);

  const ballRef = useRef();
  const ballRef2 = useRef();
  const ballRef3 = useRef();

  useEffect(() => {
    setPokemonCards(getPokemon());
  }, []);

  function resetPokemon() {
    setDrawCards({
      cardOne: pokemonCards[Math.floor(Math.random() * pokemonCards.length)],
      cardTwo: pokemonCards[Math.floor(Math.random() * pokemonCards.length)],
      cardThree: pokemonCards[Math.floor(Math.random() * pokemonCards.length)],
    });

    setTimeout(() => {
      setShowBalls(true);
      setImageOneLoaded(false);
      setImageTwoLoaded(false);
      setYourPokemon(undefined);
      setOppPokemon(undefined);
    }, 200);
  }

  function getOppCard() {
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

  function throwPokeBall(card) {
    setTimeout(() => {
      setShowBalls(false);
      setYourPokemon(card);
      setOppPokemon(getOppCard());
    }, 550);
  }

  function checkScore() {
    if (Number(yourPokemon?.hp) > Number(oppPokemon?.hp)) {
      setYourScore(yourScore + 1);
    }
    if (Number(yourPokemon?.hp) < Number(oppPokemon?.hp)) {
      setOppScore(oppScore + 1);
    }
  }

  useEffect(() => {
    if (yourScore === 20) {
      setWinner("You");
    } else if (oppScore === 20) {
      setWinner("Opponent");
    }
  }, [yourScore, oppScore]);

  useEffect(() => {
    if (imageOneLoaded && imageTwoLoaded && oppPokemon) {
      checkScore();
    }
  }, [imageOneLoaded, imageTwoLoaded, oppPokemon]);

  useEffect(() => {
    pokemonCards &&
      setDrawCards({
        cardOne: pokemonCards[Math.floor(Math.random() * pokemonCards.length)],
        cardTwo: pokemonCards[Math.floor(Math.random() * pokemonCards.length)],
        cardThree:
          pokemonCards[Math.floor(Math.random() * pokemonCards.length)],
      });
  }, [pokemonCards]);

  return (
    <>
      {/* DESKTOP SITE */}
      <div className="hidden lg:block">
        <OuterShellPadding>
          <InnerMargins>
            <div className="flex w-full justify-center mt-8">
              <div className="flex flex-col gap-y-4 items-center">
                {showWarning && (
                  <div className="w-full shadow-md items-center gap-3 flex px-6 py-3 text-sm font-light font-nunito bg-yellow-200 rounded-xl -mt-8 bg-opacity-40 text-yellow-600">
                    <div
                      onClick={() => setShowWarning(false)}
                      className="bg-yellow-600 cursor-pointer hover:bg-yellow-700 w-6 flex items-center justify-center text-yellow-100 h-6 text-sm rounded-full"
                    >
                      <div className="-mt-1">x</div>
                    </div>
                    For optimum experience, this game is best played on a mobile
                    device.
                  </div>
                )}
                <img
                  alt="logo"
                  className="w-1/3"
                  src="/images/pokemon/pokemon-logo.png"
                />
                {!showGame && !showTutorial && (
                  <div className="flex flex-col gap-6 mt-12">
                    <div
                      className="px-12 py-6 cursor-pointer rounded-xl shadow-md bg-red-600 text-white font-nunito text-xl"
                      onClick={() => setShowTutorial(true)}
                    >
                      HOW TO PLAY
                    </div>
                    <div
                      className="px-12 py-6 cursor-pointer rounded-xl shadow-md bg-blue-600 text-white font-nunito text-xl"
                      onClick={() => setShowGame(true)}
                    >
                      START GAME
                    </div>
                  </div>
                )}
                {showTutorial && (
                  <div>
                    <div className="my-12">
                      {howToPlayStep === 1 ? (
                        <img
                          alt="help"
                          className="border border-gray-200 drop-shadow-lg rounded-2xl"
                          onClick={() => setHowToPlayStep(2)}
                          src="/images/pokemon/Oak1.gif"
                        />
                      ) : howToPlayStep === 2 ? (
                        <img
                          alt="help"
                          className="border border-gray-200 drop-shadow-lg rounded-2xl"
                          onClick={() => setHowToPlayStep(3)}
                          src="/images/pokemon/Oak2.gif"
                        />
                      ) : howToPlayStep === 3 ? (
                        <img
                          alt="help"
                          className="border border-gray-200 drop-shadow-lg rounded-2xl"
                          onClick={() => setHowToPlayStep(4)}
                          src="/images/pokemon/Oak3.gif"
                        />
                      ) : howToPlayStep === 4 ? (
                        <img
                          alt="help"
                          className="border border-gray-200 drop-shadow-lg rounded-2xl"
                          onClick={() => setHowToPlayStep(5)}
                          src="/images/pokemon/Oak4.gif"
                        />
                      ) : howToPlayStep === 5 ? (
                        <img
                          alt="help"
                          className="border border-gray-200 drop-shadow-lg rounded-2xl"
                          onClick={() => setHowToPlayStep(6)}
                          src="/images/pokemon/Oak5.gif"
                        />
                      ) : howToPlayStep === 6 ? (
                        <img
                          alt="help"
                          className="border border-gray-200 drop-shadow-lg rounded-2xl"
                          onClick={() => setHowToPlayStep(7)}
                          src="/images/pokemon/Oak6.gif"
                        />
                      ) : howToPlayStep === 7 ? (
                        <img
                          alt="help"
                          className="border border-gray-200 drop-shadow-lg rounded-2xl"
                          onClick={() => setHowToPlayStep(8)}
                          src="/images/pokemon/Oak7.gif"
                        />
                      ) : howToPlayStep === 8 ? (
                        <img
                          alt="help"
                          className="border border-gray-200 drop-shadow-lg rounded-2xl"
                          onClick={() => setHowToPlayStep(9)}
                          src="/images/pokemon/Oak8.gif"
                        />
                      ) : howToPlayStep === 9 ? (
                        <img
                          alt="help"
                          className="border border-gray-200 drop-shadow-lg rounded-2xl"
                          onClick={() => setHowToPlayStep(10)}
                          src="/images/pokemon/Oak9.gif"
                        />
                      ) : howToPlayStep === 10 ? (
                        <img
                          alt="help"
                          className="border border-gray-200 drop-shadow-lg rounded-2xl"
                          onClick={() => setHowToPlayStep(11)}
                          src="/images/pokemon/Oak10.gif"
                        />
                      ) : howToPlayStep === 11 ? (
                        <img
                          alt="help"
                          className="border border-gray-200 drop-shadow-lg rounded-2xl"
                          onClick={() => {
                            setHowToPlayStep(1);
                            setShowTutorial(false);
                          }}
                          src="/images/pokemon/Oak11.gif"
                        />
                      ) : null}
                    </div>
                  </div>
                )}
                {showGame && (
                  <div>
                    <div className="grid grid-cols-2 gap-3 w-full">
                      <div className="text-center">
                        YOU
                        {showBalls ? (
                          <img
                            alt="card"
                            className="w-60"
                            src="/images/pokemon/pokemon-card.png"
                          />
                        ) : (
                          <img
                            alt="card"
                            className="w-60"
                            src={yourPokemon?.image}
                            onLoad={() => setImageOneLoaded(true)}
                          />
                        )}
                      </div>
                      <div className="text-center">
                        OPPONENT
                        {showBalls ? (
                          <img
                            alt="card"
                            className="w-60"
                            src="/images/pokemon/pokemon-card.png"
                          />
                        ) : (
                          <img
                            alt="card"
                            className="w-60"
                            src={oppPokemon?.image}
                            onLoad={() => setImageTwoLoaded(true)}
                          />
                        )}
                      </div>
                    </div>
                    {!winner ? (
                      <>
                        {!showBalls && imageOneLoaded && imageTwoLoaded ? (
                          <div className="w-full flex justify-center">
                            <div
                              className="mt-8 py-6 px-12 font-nunito text-xl bg-red-600 text-center w-max cursor-pointer rounded-xl shadow-md text-white"
                              onClick={() => resetPokemon()}
                            >
                              AGAIN
                            </div>
                          </div>
                        ) : showBalls ? (
                          <>
                            <div className="flex relative gap-3 justify-center w-full">
                              <img
                                alt="ball"
                                className="w-40 focus:animate-spin-fast outline-none"
                                onClick={() =>
                                  throwPokeBall(drawCards?.cardOne)
                                }
                                ref={ballRef}
                                tabIndex={0}
                                src={
                                  Number(drawCards?.cardOne?.hp) < 100
                                    ? "/images/pokemon/poke-ball.png"
                                    : Number(drawCards?.cardOne?.hp) < 200
                                    ? greatBallRandomizer()
                                    : Number(drawCards?.cardOne?.hp) < 300
                                    ? ultraBallRandomizer()
                                    : Number(drawCards?.cardOne?.hp) < 500
                                    ? "/images/pokemon/premier-ball.png"
                                    : "/images/pokemon/poke-ball.png"
                                }
                              />
                              <img
                                alt="ball"
                                className="w-40 focus:animate-spin-fast outline-none"
                                onClick={() =>
                                  throwPokeBall(drawCards?.cardTwo)
                                }
                                ref={ballRef2}
                                tabIndex={0}
                                src={
                                  Number(drawCards?.cardTwo?.hp) < 100
                                    ? "/images/pokemon/poke-ball.png"
                                    : Number(drawCards?.cardTwo?.hp) < 200
                                    ? greatBallRandomizer()
                                    : Number(drawCards?.cardTwo?.hp) < 300
                                    ? ultraBallRandomizer()
                                    : Number(drawCards?.cardTwo?.hp) < 500
                                    ? "/images/pokemon/premier-ball.png"
                                    : "/images/pokemon/poke-ball.png"
                                }
                              />
                              <img
                                alt="ball"
                                className="w-40 focus:animate-spin-fast outline-none"
                                onClick={() =>
                                  throwPokeBall(drawCards?.cardThree)
                                }
                                ref={ballRef3}
                                tabIndex={0}
                                src={
                                  Number(drawCards?.cardThree?.hp) < 100
                                    ? "/images/pokemon/poke-ball.png"
                                    : Number(drawCards?.cardThree?.hp) < 200
                                    ? greatBallRandomizer()
                                    : Number(drawCards?.cardThree?.hp) < 300
                                    ? ultraBallRandomizer()
                                    : Number(drawCards?.cardThree?.hp) < 500
                                    ? "/images/pokemon/premier-ball.png"
                                    : "/images/pokemon/poke-ball.png"
                                }
                              />
                            </div>
                          </>
                        ) : (
                          <>LOADING</>
                        )}{" "}
                      </>
                    ) : (
                      <div>The winner is {winner}!</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </InnerMargins>
        </OuterShellPadding>
      </div>
      {/* MOBILE SITE */}
      <div className="block lg:hidden">
        <OuterShellPadding>
          <div className="flex w-full justify-center">
            <div className="flex flex-col gap-y-4 items-center">
              <img
                alt="logo"
                className="w-1/2"
                src="/images/pokemon/pokemon-logo.png"
              />
              {!showGame && !showTutorial && (
                <div className="flex flex-col mt-6">
                  <div
                    className="px-12 py-6 cursor-pointer mb-6 rounded-xl shadow-md bg-red-600 text-white font-nunito text-xl"
                    onClick={() => setShowTutorial(true)}
                  >
                    HOW TO PLAY
                  </div>
                  <div
                    className="px-12 py-6 cursor-pointer rounded-xl shadow-md bg-blue-600 text-white font-nunito text-xl"
                    onClick={() => setShowGame(true)}
                  >
                    START GAME
                  </div>
                </div>
              )}
              {showTutorial && (
                <div>
                  <div className="mt-6 mb-12">
                    {howToPlayStep === 1 ? (
                      <img
                        alt="help"
                        className="border border-gray-200 drop-shadow-lg rounded-2xl"
                        onClick={() => setHowToPlayStep(2)}
                        src="/images/pokemon/Oak1.gif"
                      />
                    ) : howToPlayStep === 2 ? (
                      <img
                        alt="help"
                        className="border border-gray-200 drop-shadow-lg rounded-2xl"
                        onClick={() => setHowToPlayStep(3)}
                        src="/images/pokemon/Oak2.gif"
                      />
                    ) : howToPlayStep === 3 ? (
                      <img
                        alt="help"
                        className="border border-gray-200 drop-shadow-lg rounded-2xl"
                        onClick={() => setHowToPlayStep(4)}
                        src="/images/pokemon/Oak3.gif"
                      />
                    ) : howToPlayStep === 4 ? (
                      <img
                        alt="help"
                        className="border border-gray-200 drop-shadow-lg rounded-2xl"
                        onClick={() => setHowToPlayStep(5)}
                        src="/images/pokemon/Oak4.gif"
                      />
                    ) : howToPlayStep === 5 ? (
                      <img
                        alt="help"
                        className="border border-gray-200 drop-shadow-lg rounded-2xl"
                        onClick={() => setHowToPlayStep(6)}
                        src="/images/pokemon/Oak5.gif"
                      />
                    ) : howToPlayStep === 6 ? (
                      <img
                        alt="help"
                        className="border border-gray-200 drop-shadow-lg rounded-2xl"
                        onClick={() => setHowToPlayStep(7)}
                        src="/images/pokemon/Oak6.gif"
                      />
                    ) : howToPlayStep === 7 ? (
                      <img
                        alt="help"
                        className="border border-gray-200 drop-shadow-lg rounded-2xl"
                        onClick={() => setHowToPlayStep(8)}
                        src="/images/pokemon/Oak7.gif"
                      />
                    ) : howToPlayStep === 8 ? (
                      <img
                        alt="help"
                        className="border border-gray-200 drop-shadow-lg rounded-2xl"
                        onClick={() => setHowToPlayStep(9)}
                        src="/images/pokemon/Oak8.gif"
                      />
                    ) : howToPlayStep === 9 ? (
                      <img
                        alt="help"
                        className="border border-gray-200 drop-shadow-lg rounded-2xl"
                        onClick={() => setHowToPlayStep(10)}
                        src="/images/pokemon/Oak9.gif"
                      />
                    ) : howToPlayStep === 10 ? (
                      <img
                        alt="help"
                        className="border border-gray-200 drop-shadow-lg rounded-2xl"
                        onClick={() => setHowToPlayStep(11)}
                        src="/images/pokemon/Oak10.gif"
                      />
                    ) : howToPlayStep === 11 ? (
                      <img
                        alt="help"
                        className="border border-gray-200 drop-shadow-lg rounded-2xl"
                        onClick={() => {
                          setHowToPlayStep(1);
                          setShowTutorial(false);
                        }}
                        src="/images/pokemon/Oak11.gif"
                      />
                    ) : null}
                  </div>
                </div>
              )}
              {showGame && (
                <div>
                  <div className="grid grid-cols-2 gap-3 mt-3 w-full">
                    <div className="text-center">
                      <div className="pb-12 mt-12 flex flex-col">
                        <div className="text-2xl font-nunito">SCORE</div>
                        <div className="text-3xl text-red-600 font-semibold font-nunito">{`${yourScore} - ${oppScore}`}</div>
                      </div>
                      {showBalls ? (
                        <img
                          alt="card"
                          className="w-48"
                          src="/images/pokemon/pokemon-card.png"
                        />
                      ) : (
                        <img
                          alt="card"
                          className="w-48"
                          src={yourPokemon?.image}
                          onLoad={() => setImageOneLoaded(true)}
                        />
                      )}
                      YOU
                    </div>
                    <div className="text-center">
                      OPPONENT
                      {showBalls ? (
                        <img
                          alt="card"
                          className="w-48"
                          src="/images/pokemon/pokemon-card.png"
                        />
                      ) : (
                        <img
                          alt="card"
                          className="w-48"
                          src={oppPokemon?.image}
                          onLoad={() => setImageTwoLoaded(true)}
                        />
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div />
                    {!winner ? (
                      <>
                        {!showBalls && imageOneLoaded && imageTwoLoaded ? (
                          <div className="w-full flex justify-center">
                            <div
                              className="-mt-32 h-16 flex items-center px-12 font-nunito text-xl bg-red-600 text-center cursor-pointer w-max rounded-xl shadow-md text-white"
                              onClick={() => resetPokemon()}
                            >
                              AGAIN
                            </div>
                          </div>
                        ) : showBalls ? (
                          <div className="flex flex-col -mt-36 justify-center w-full">
                            <div className="flex justify-center">
                              <img
                                alt="ball"
                                className="w-20 h-20 focus:animate-spin-fast outline-none"
                                onClick={() =>
                                  throwPokeBall(drawCards?.cardOne)
                                }
                                ref={ballRef}
                                tabIndex={0}
                                src={
                                  Number(drawCards?.cardOne?.hp) < 100
                                    ? "/images/pokemon/poke-ball.png"
                                    : Number(drawCards?.cardOne?.hp) < 200
                                    ? greatBallRandomizer()
                                    : Number(drawCards?.cardOne?.hp) < 300
                                    ? ultraBallRandomizer()
                                    : Number(drawCards?.cardOne?.hp) < 500
                                    ? "/images/pokemon/premier-ball.png"
                                    : "/images/pokemon/poke-ball.png"
                                }
                              />
                            </div>
                            <div className="flex justify-center">
                              <img
                                alt="ball"
                                className="w-20 h-20 mr-0.5 focus:animate-spin-fast outline-none"
                                onClick={() =>
                                  throwPokeBall(drawCards?.cardTwo)
                                }
                                ref={ballRef2}
                                tabIndex={0}
                                src={
                                  Number(drawCards?.cardTwo?.hp) < 100
                                    ? "/images/pokemon/poke-ball.png"
                                    : Number(drawCards?.cardTwo?.hp) < 200
                                    ? greatBallRandomizer()
                                    : Number(drawCards?.cardTwo?.hp) < 300
                                    ? ultraBallRandomizer()
                                    : Number(drawCards?.cardTwo?.hp) < 500
                                    ? "/images/pokemon/premier-ball.png"
                                    : "/images/pokemon/poke-ball.png"
                                }
                              />
                              <img
                                alt="ball"
                                className="w-20 h-20 ml-0.5 focus:animate-spin-fast outline-none"
                                onClick={() =>
                                  throwPokeBall(drawCards?.cardThree)
                                }
                                ref={ballRef3}
                                tabIndex={0}
                                src={
                                  Number(drawCards?.cardThree?.hp) < 100
                                    ? "/images/pokemon/poke-ball.png"
                                    : Number(drawCards?.cardThree?.hp) < 200
                                    ? greatBallRandomizer()
                                    : Number(drawCards?.cardThree?.hp) < 300
                                    ? ultraBallRandomizer()
                                    : Number(drawCards?.cardThree?.hp) < 500
                                    ? "/images/pokemon/premier-ball.png"
                                    : "/images/pokemon/poke-ball.png"
                                }
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="w-full flex justify-center">
                            <img
                              alt="spinner"
                              className="w-12 animate-spin"
                              src="/images/loading.png"
                            />
                          </div>
                        )}
                      </>
                    ) : (
                      <div>The winner is {winner}!</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </OuterShellPadding>
      </div>
    </>
  );
}
