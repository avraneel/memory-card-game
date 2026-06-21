import "../styles/scoreboard.css";

export default function Scoreboard({ score, bestScore }) {
  return (
    <section className="scoreboard">
      <h2>Scoreboard</h2>
      <p>Score: {score} </p>
      <p>Best Score: {bestScore} </p>
    </section>
  );
}
