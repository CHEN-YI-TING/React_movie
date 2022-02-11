import "./nav.css";
// import Link from "../Link/Link";
import { NavLink } from "react-router-dom";

export default function Nav() {
  /* const links = [
    { title: "電影", url: "https://swapi.dev/api/films/" },
    { title: "人類", url: "https://swapi.dev/api/people/" },
    { title: "星球", url: "https://swapi.dev/api/planets/" },
  ]; */
  return (
    <>
      <nav className="mainnav">
        <NavLink
          className={(activeLink) => (activeLink.isActive ? "activeLink" : "")}
          to="/films"
        >
          電影
        </NavLink>
        <NavLink
          className={(activeLink) => (activeLink.isActive ? "activeLink" : "")}
          to="/people"
        >
          人類
        </NavLink>
        <NavLink
          className={(activeLink) => (activeLink.isActive ? "activeLink" : "")}
          to="/planets"
        >
          星球
        </NavLink>
      </nav>
    </>
  );
}

/* {links.map((link) => (
  <Link link={link} key={link.title} />
))} */
