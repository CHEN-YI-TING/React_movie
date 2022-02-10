import "./searchbar.css";
// import { useState } from "react";
export default function SearchBar(props) {
  //   const [text, setText] = useState("");

  function submitted(ev) {
    ev.preventDefault();
    console.log("submitted");
    // setText(ev.target["keyword"].value);
    props.addText(ev.target["keyword"].value);
  }

  function clicked(e) {
    console.log("clicked");
  }

  /* function focused() {
    console.log("on focus");
  }

  function changed(ev) {
    console.log("onInput", ev.target.value);
  } */

  return (
    <section className="searchBar">
      <form onSubmit={submitted}>
        <input
          type="text"
          name="keyword"
          className="searchText"
          placeholder="keyword"
          /*  onFocus={focused}
          onInput={(ev) => changed(ev)} */
        ></input>
        <button
          type="submit"
          className="searchBtn"
          name="searchBtn"
          onClick={clicked}
        >
          搜尋
        </button>
      </form>
      <p>{props.text ? <p>你正在搜尋{props.text}</p> : ""}</p>
    </section>
  );
}
