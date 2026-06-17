import "../styles/index.css";

export default function Card({ item }) {
  console.log(item);
  return (
    <div className="card">
      <img src={`${item.sprite}`} alt={`${item.name}`} />
      <p>{item.name}</p>
    </div>
  );
}
