import "./header.css";
import Nav from "../Nav/Nav";
export default function Header(props) {
  const navLink = props.navLink;
  return (
    <header className="mainhead">
      <h1>{props.name}</h1>
      <Nav navLink={navLink} />
    </header>
  );
}
