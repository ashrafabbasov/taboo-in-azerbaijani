import React, { useState } from "react";
import styled from "styled-components";
import Timer from "react-compound-timer";

import { ICONS } from "./styles";
import { GameCard, Button } from "./components";
import { DATA } from "./data/data";

const cards = shuffle(DATA);

function App() {
  const [gameState, setGameState] = useState("paused"); //paused, ongoing, ended
  const [point, setPoint] = useState(0);
  const [numOfWrong, setNumOfWrong] = useState(0);
  const [iterator, setIterator] = useState(0);
  const [numOfPasses, setNumOfPasses] = useState(3);

  const endGameCard = {
    word: "Oyun Bitdi",
    taboos: [
      `Doğru Cavab: ${point}`,
      `Səhv Cavab: ${numOfWrong}`,
      `Pas sayı: ${3 - numOfPasses}`,
    ],
  };
  // console.log(cards.length);

  const increasePoint = () => {
    setPoint(point + 1);
  };
  const increaseNumOfWrong = () => {
    setNumOfWrong(numOfWrong + 1);
  };
  const nextCard = () => {
    if (iterator === cards.length - 1) {
      setIterator(0);
    } else {
      setIterator(iterator + +1);
    }
  };

  return (
    <div className="App">
      <Title>
        Tabu
        <span style={{ color: "#ff2e62", fontWeight: 600, fontSize: 60 }}>
          AZ
        </span>
      </Title>
      <div className="header">
        <Timer
          initialTime={60500}
          direction="backward"
          startImmediately={false}
          checkpoints={[
            {
              time: 500,
              callback: () => setGameState("ended"),
            },
          ]}
        >
          {({ start, pause, stop, reset }) => (
            <>
              {gameState === "paused" ? (
                <button
                  onClick={() => {
                    setGameState("ongoing");
                    start();
                  }}
                  className="headerButtons"
                >
                  <img
                    className="headerIcon"
                    src={ICONS.playIcon}
                    alt="startIcon"
                  />
                </button>
              ) : (
                <button
                  onClick={() => {
                    if (gameState === "ended") {
                      setNumOfWrong(0);
                      setPoint(0);
                      setNumOfPasses(3);
                      reset();
                    }
                    setGameState("paused");
                    pause();
                  }}
                  className="headerButtons"
                >
                  <img
                    className="headerIcon"
                    src={ICONS.pauseIcon}
                    alt="startIcon"
                  />
                </button>
              )}
              <span className="gameInfoText">Xal: {point}  Vaxt: </span>
              <div className="timer">
                <Timer.Minutes
                  formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
                />
                :
                <Timer.Seconds
                  formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
                />
              </div>
              <button
                onClick={() => {
                  reset();
                  stop();
                  setGameState("paused");
                  setPoint(0);
                  setNumOfWrong(0);
                  setNumOfPasses(3);
                }}
                className="headerButtons"
              >
                <img
                  className="replayIcon"
                  src={ICONS.replayIcon}
                  alt="restartIcon"
                />
              </button>
            </>
          )}
        </Timer>
      </div>
      <GameCard card={gameState !== "ended" ? cards[iterator] : endGameCard} />

      <Bottom>
        <Checking>
          <Button
            onClick={() => {
              if (gameState !== "ended") {
                increaseNumOfWrong();
                nextCard();
              }
            }}
            icon={ICONS.wrongIcon}
            backgroundColor={"#C70039"}
          />
          <Button
            onClick={() => {
              if (gameState !== "ended") {
                increasePoint();
                nextCard();
              }
            }}
            icon={ICONS.correctIcon}
            backgroundColor={"#435E55FF"}
          />
        </Checking>
        <Skip>
          <Button
            text={`PAS (${numOfPasses})`}
            border={true}
            backgroundColor={"gray"}
            onClick={() => {
              if (numOfPasses !== 0 && gameState !== "ended") {
                nextCard();
                setNumOfPasses(numOfPasses - 1);
              }
            }}
          />
        </Skip>
      </Bottom>
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-weight: 600;
  color: white;
  margin: 0;
  font-size: 60px;
`;

const Bottom = styled.div`
  width: 250px;

  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Checking = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  min-width: 250px;
  margin-bottom: 10px;
`;
const Skip = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
`;

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
