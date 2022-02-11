import { NavLink } from "react-router-dom";
import Planet from "../Planet/Planet";
import "./people.css";

export default function People({ list }) {
  return (
    <>
      <div className="results">
        <h2>人類清單</h2>
        {list.length === 0 && <p>載入中...</p>}
        {list.map((item, index) => (
          <p key={item.name}>
            <NavLink
              className={(activeLink) =>
                activeLink.isActive ? "activeLink" : ""
              }
              to={`/people/${index + 1}`}
            >
              {item.name}
            </NavLink>
          </p>
        ))}
      </div>
    </>
  );
}
