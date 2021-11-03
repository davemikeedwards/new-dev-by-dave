import { useEffect, useRef, useState } from "react";
import { InnerMargins, OuterShellPadding } from "../components/layout";
import {
  getOppCard,
  getPokemon,
  HowToPlay,
  PokeBallSelector,
  PokeBallSelectorMobile,
} from "../data/helpers/pokemon-helpers";

export default function Pokemon() {
  const [drawCards, setDrawCards] = useState([]);
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
    setDrawCards([
      {
        card: pokemonCards[Math.floor(Math.random() * pokemonCards.length)],
      },
      {
        card: pokemonCards[Math.floor(Math.random() * pokemonCards.length)],
      },
      {
        card: pokemonCards[Math.floor(Math.random() * pokemonCards.length)],
      },
    ]);

    setTimeout(() => {
      setShowBalls(true);
      setImageOneLoaded(false);
      setImageTwoLoaded(false);
      setYourPokemon(undefined);
      setOppPokemon(undefined);
    }, 200);
  }

  function throwPokeBall(card) {
    setTimeout(() => {
      setShowBalls(false);
      setYourPokemon(card);
      setOppPokemon(getOppCard(pokemonCards));
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
      setDrawCards([
        {
          card: pokemonCards[Math.floor(Math.random() * pokemonCards.length)],
        },
        {
          card: pokemonCards[Math.floor(Math.random() * pokemonCards.length)],
        },
        {
          card: pokemonCards[Math.floor(Math.random() * pokemonCards.length)],
        },
      ]);
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
                      <HowToPlay
                        setShowTutorial={setShowTutorial}
                        howToPlayStep={howToPlayStep}
                        setHowToPlayStep={setHowToPlayStep}
                      />
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
                              <PokeBallSelector
                                drawCards={drawCards}
                                ballRef={ballRef}
                                ballRef2={ballRef2}
                                ballRef3={ballRef3}
                                throwPokeBall={throwPokeBall}
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
                    <HowToPlay
                      setShowTutorial={setShowTutorial}
                      howToPlayStep={howToPlayStep}
                      setHowToPlayStep={setHowToPlayStep}
                    />
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
                            <PokeBallSelectorMobile
                              drawCards={drawCards}
                              ballRef={ballRef}
                              ballRef2={ballRef2}
                              ballRef3={ballRef3}
                              throwPokeBall={throwPokeBall}
                            />
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
// WAS 680 LINES OF CODE
