import React, { useState } from "react";
import styled from "styled-components";
import Timer from "react-compound-timer";

import { ICONS } from "./styles";
import { GameCard, Button } from "./components";

function App() {
  const [gameState, setGameState] = useState(false);
  console.log(gameState);
  const toggleGameState = (state) => {
    return state ? setGameState(false) : setGameState(true);
  };

  return (
    <div className="App">
      <div className="header">
        <Timer
          initialTime={60000}
          direction="backward"
          startImmediately={false}
          checkpoints={[
            {
              time: 0,
              callback: () => console.log("time's up"),
            },
          ]}
        >
          {({ start, pause, stop, reset }) => (
            <>
              {!gameState ? (
                <button
                  onClick={() => {
                    toggleGameState(gameState);
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
                    toggleGameState(gameState);
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
              <span className="gameInfoText">Xal: 0  Vaxt: </span>
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
                  setGameState(false);
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
      <GameCard />

      <Bottom>
        <Checking>
          <Button icon={ICONS.wrongIcon} backgroundColor={"#C70039"} />
          <Button icon={ICONS.correctIcon} backgroundColor={"#435E55FF"} />
        </Checking>
        <Skip>
          <Button text={"PAS"} border={true} backgroundColor={"gray"} />
        </Skip>
      </Bottom>
    </div>
  );
}

export default App;

const Bottom = styled.div`
  width: 250px;

  margin-top: 20px;
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
