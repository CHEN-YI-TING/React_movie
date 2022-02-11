import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
//import SearchHistory from "../SearchHistory/SearchHistory";
import "./layout.css";

function Layout({ name, historyText, addText }) {
  return (
    <div className="App">
      <Header name={name} />
      <SearchBar text={historyText[0]} addText={addText} />
      <main className="mainContent">
        {/*   <SearchHistory historyText={historyText} /> */}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
