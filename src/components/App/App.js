import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Films from "../Films/Films";
import Person from "../Person/Person";
import People from "../People/People";
import Planets from "../Planets/Planets";

export default function App() {
  const name = "公司名稱";
  const [historyText, setHistoryText] = useState([]);

  function addText(newText) {
    let newTerms = new Set([newText, ...historyText]);
    setHistoryText(Array.from(newTerms));
  }
  const [people, setPeople] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    (async function () {
      if (pathname.indexOf("people") > -1) {
        let res = await fetch("https://swapi.dev/api/people");
        let data = await res.json();
        console.log("Fetched the people. Updating people state");
        setPeople(data.results);
      }
    })();
  }, [pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout addText={addText} historyText={historyText} name={name} />
        }
      >
        <Route index element={<Home />} />
        <Route path="films/*" element={<Films />} />
        <Route path="people">
          <Route index element={<People list={people} />} />
          <Route path=":id" element={<Person list={people} />} />
        </Route>

        <Route path="planets/*" element={<Planets />} />
      </Route>
    </Routes>
  );
}
