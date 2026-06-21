import { useState } from "react";

import Heading from "./Heading";
import Scoreboard from "./Scoreboard";
import CardGrid from "./CardGrid";

import "../styles/app.css";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="app">
      <Heading />
      <Scoreboard score={score} bestScore={bestScore} />
      <CardGrid setScore={setScore} setBestScore={setBestScore} />
    </div>
  );
}
