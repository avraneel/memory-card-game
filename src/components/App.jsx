import { useState } from "react";

import Heading from "./Heading";
import Scoreboard from "./Scoreboard";
import CardGrid from "./CardGrid";

export default function App() {
  const [stack, setStack] = useState([]);

  return (
    <>
      <Heading />
      <Scoreboard />
      <CardGrid />
    </>
  );
}
