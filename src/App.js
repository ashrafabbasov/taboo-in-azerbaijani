import React from "react";
import { ICONS } from "./assets";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="headerIcon" src={ICONS.playIcon} alt="startIcon" />
        <span className="gameInfoText">Xal: 0    Vaxt: 01:00</span>
        <img className="replayIcon" src={ICONS.replayIcon} alt="restartIcon" />
      </div>
    </div>
  );
}

export default App;
