function Feature(props) {
  return (
    <div className="single-feature">
      <img className="icon" src={props.feature.icon} alt="icon" />
      <h3>{props.feature.headline}</h3>
      <p>{props.feature.info}</p>
    </div>
  );
}

export default Feature;
