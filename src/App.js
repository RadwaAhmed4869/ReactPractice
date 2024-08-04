import Header from "./Components/Header";
import CoreConcept from "./Components/CoreConcept";
import TabButton from "./Components/TabButton";
import Card from "./Components/Card";

import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept
              image={CORE_CONCEPTS[3].image}
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
      <div id="app" class="card">
        <h1>Available Experts</h1>
        <Card name="Anthony Blake">
          <p>
            Blake is a professor of Computer Science at the University of
            Illinois.
          </p>
          <p>
            <a href="mailto:blake@example.com">Email Anthony</a>
          </p>
        </Card>

        <Card name="Maria Miles">
          <p>
            Maria is a professor of Computer Science at the University of
            Illinois.
          </p>
          <p>
            <a href="mailto:blake@example.com">Email Maria</a>
          </p>
        </Card>
      </div>
    </div>
  );
}

export default App;
