import reactImg from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.imgSrc} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              imgSrc={componentImg}
              title="Components"
              description="The core UI building block."
            />
            <CoreConcept
              imgSrc={componentImg}
              title="JSX"
              description="Stands for JavaScript Extention."
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
