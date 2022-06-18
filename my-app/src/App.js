import "./App.css";
import "./App.css";

import Navbar from "./components/Navbar";
import HeaderContent from "./components/HeaderContent";
import Feature from "./components/Feature";
import iconDeclarative from "./images/icon1.png";
import iconComponents from "./images/icon2.png";
import iconSingleWay from "./images/icon3.png";
import iconJSX from "./images/icon4.png";

let header = [
  {
    headline: "Say hello to ReactJS",
    intro:
      "You will learn how to use the most popular frontend library, and become a super Ninja developer",
    button: "Awesome",
  },
];

let features = [
  {
    icon: iconDeclarative,
    headline: "Declarative",
    info: "React makes it painless to create interactive UIs.",
  },
  {
    icon: iconComponents,
    headline: "Components",
    info: "Build encapsulated components that manage their state.",
  },
  {
    icon: iconSingleWay,
    headline: "Single-Way",
    info: "A set of immutable values are passed to the components.",
  },
  {
    icon: iconJSX,
    headline: "JSX",
    info: "Statically-typed, designed to run on modern browsers.",
  },
];

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Navbar />
        <HeaderContent header={header[0]} />
      </div>
      <div className="Features">
        <Feature feature={features[0]} />
        <Feature feature={features[1]} />
        <Feature feature={features[2]} />
        <Feature feature={features[3]} />
      </div>
    </div>
  );
}

export default App;
