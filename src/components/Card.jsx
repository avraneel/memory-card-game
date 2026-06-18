import "../styles/card.css";

export default function Card({ item }) {
  return (
    <div className="card">
      <img src={`${item.sprite}`} alt={`${item.name}`} className="sprite" />
      <p className="pokemon-name">{item.name}</p>
    </div>
  );
}
