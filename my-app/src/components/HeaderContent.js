import Button from "./Button";
function HeaderContent(props) {
  return (
    <div className="header-content">
      <h1>{props.header.headline}</h1>
      <p>{props.header.intro}</p>
      <Button button={props.header.button} />
    </div>
  );
}

export default HeaderContent;
