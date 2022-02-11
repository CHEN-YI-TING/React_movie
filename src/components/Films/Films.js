import { Route, NavLink, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Film from "../Film/Film";
import "./films.css";

export default function Films() {
  const [list, setList] = useState([]);

  useEffect(() => {
    (function getFilms() {
      let url = "https://swapi.dev/api/films/";
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error(res.statusText);
          return res.json();
        })
        .then((data) => {
          setList(data.results);
        })
        .catch(console.warn);
    })();
  }, []);

  function findFilm(id) {
    return list.find((item, index) => parseInt(id) === index + 1);
  }

  return (
    <>
      <div className="results">
        <h2>電影 清單</h2>

        {list.length === 0 && <p>沒有電影</p>}
        {list.map((film, index) => (
          <p key={film.title}>
            <NavLink
              className={(activeLink) =>
                activeLink.isActive ? "activeLink" : ""
              }
              to={`/films/${index + 1}`}
            >
              {film.title}
            </NavLink>
          </p>
        ))}
      </div>
      <div className="details">
        <Routes>
          <Route path=":id" element={<Film findFilm={findFilm} />} />
        </Routes>
      </div>
    </>
  );
}
