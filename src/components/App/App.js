import "./App.css";
import React from "react";
import Header from "../Header/Header";

export default function App() {
  const name = "公司名稱";
  const navLink = "連結區";
  return (
    <div className="App">
      <Header name={name} navLink={navLink} />
    </div>
  );
}

//export default App;
