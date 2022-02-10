import "./searchbar.css";

export default function SearchBar(props) {
  function submitted(ev) {
    ev.preventDefault();
    console.log("submitted");
    props.addText(ev.target["keyword"].value);
  }

  return (
    <section className="searchBar">
      <form onSubmit={submitted}>
        <input
          type="text"
          name="keyword"
          className="searchText"
          placeholder="keyword"
        ></input>
        <button type="submit" className="searchBtn" name="searchBtn">
          搜尋
        </button>
      </form>
      <p>{props.text && <p>你正在搜尋{props.text}</p>}</p>
    </section>
  );
}

//{props.text ? <p>你正在搜尋{props.text}</p> : ""}
