import "./searchhistory.css";
import List from "../List/List";

export default function SearchHistory(props) {
  const { historyText } = { ...props };
  let formattedData = historyText.map((item, index) => {
    return {
      ref: index,
      title: item,
      text: null,
    };
  });

  return (
    <div className="history">
      <List data={formattedData} />
    </div>
  );
}

{
  /* <ul>
      {props.historyText.map((text) => (
        <li key={text}>{text}</li>
      ))}
    </ul> */
}
