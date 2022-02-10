import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import SearchHistory from "../SearchHistory/SearchHistory";
import SearchResult from "../SearchResult/SearchResult";

export default function App() {
  const name = "公司名稱";
  const [historyText, setHistoryText] = useState([]);
  const [results, setResults] = useState([]);
  const [dataType, setDataType] = useState("films");

  function addText(newText) {
    let newTerms = new Set([newText, ...historyText]);
    setHistoryText(Array.from(newTerms));
    // fetchData(newText);
  }

  useEffect(() => {
    fetchData(historyText[0]);
    return () => {
      //clean up function
    };
  }, [historyText]);

  useEffect(() => {
    console.log("第一次渲染");
    fetchData();
  }, []);

  async function fetchData(keyword) {
    let url = `https://swapi.dev/api/${dataType}`;
    if (keyword) {
      url += `/?search=${keyword}`;
    }
    let response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    let data = await response.json();
    setResults(data.results);
  }
  return (
    <div className="App">
      <Header name={name} />
      <SearchBar text={historyText[0]} addText={addText} />
      <main className="content">
        <SearchHistory historyText={historyText} />
        <SearchResult results={results} type={dataType} />
      </main>
    </div>
  );
}

//export default App;
