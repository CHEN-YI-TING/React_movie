import "./searchhistory.css";
export default function SearchHistory(props) {
  return (
    <ul>
      {props.historyText.map((text) => (
        <li key={text}>{text}</li>
      ))}
    </ul>
  );
}
