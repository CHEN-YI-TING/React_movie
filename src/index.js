import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.css";
//browserRouter use context api
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
