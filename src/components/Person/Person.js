import { useParams } from "react-router-dom";

export default function Person({ list }) {
  const { id } = useParams();
  let person = list.find((item, index) => parseInt(id) === index + 1);
  return (
    <div className="details">
      <h2>詳細資訊 {id}</h2>
      {person && <p>{person.name}</p>}
      {person && <p>{person.birth_year}</p>}
    </div>
  );
}
