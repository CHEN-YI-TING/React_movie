import "./App.css";
import React, { useState } from "react";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import SearchHistory from "../SearchHistory/SearchHistory";

export default function App() {
  const name = "公司名稱";
  const [historyText, setHistoryText] = useState([]);

  function addText(newText) {
    setHistoryText([newText, ...historyText]);
  }

  return (
    <div className="App">
      <Header name={name} />
      <SearchBar text={historyText[0]} addText={addText} />
      <SearchHistory historyText={historyText} />
    </div>
  );
}

//export default App;
