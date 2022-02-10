import "./searchresult.css";
import List from "../List/List";

export default function SearchResult(props) {
  let { results, type } = { ...props };
  let formattedData = results.map((item, index) => {
    let obj = {
      original: item,
    };

    switch (type) {
      case "films":
        obj.ref = item.episode_id;
        obj.title = item.title;
        obj.text = item.release_date;
        break;
      case "people":
        break;
      case "planets":
        break;
    }
    return obj;
  });
  return (
    <div className="results">
      <List data={formattedData} />
    </div>
  );
}

{
  /* <ul className="results">
{props.results.map((item) => (
  <li key={item.episode_id}>{item.title}</li>
))}
</ul> */
}
