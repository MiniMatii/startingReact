import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';

import { CORE_CONCEPTS } from './data'; 





//First custom component in its own file + Randomized description moved to components/header.jsx

//Coreconcept moved to components/CoreConcept.jsx
// coreconcepts from static to dinamic rendering using props check imports and data.js
// optized by mapping over array but here is manual for clarity
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts"> 
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <h2>Time to get started!</h2>

      </main>
    </div>
  );
}

export default App;