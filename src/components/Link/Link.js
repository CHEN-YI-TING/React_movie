import "./link.css";
export default function Link(props) {
  //由於link是一個array
  // const url = props.link.url;
  // const title = props.link.title;

  const { title, url } = { ...props.link };
  return (
    <a className="navLink" href={url}>
      {title}
    </a>
  );
}
