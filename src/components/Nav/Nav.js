import "./nav.css";
import Link from "../Link/Link";

export default function Nav() {
  const links = [
    { title: "電影", url: "https://swapi.dev/api/films/" },
    { title: "人類", url: "https://swapi.dev/api/people/" },
    { title: "星球", url: "https://swapi.dev/api/planets/" },
  ];
  return (
    <nav>
      {links.map((link) => (
        <Link link={link} key={link.title} />
      ))}
    </nav>
  );
}
