import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { CORE_CONCEPTS } from './data'; 
import { EXAMPLES } from './data';




//First custom component in its own file + Randomized description moved to components/header.jsx

//Coreconcept moved to components/CoreConcept.jsx
// coreconcepts from static to dinamic rendering using props check imports and data.js
// optized by mapping over array but here is manual for clarity
function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = <p>Please select a topic.</p>;


  if (selectedTopic) {
    tabContent = (<div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code> {EXAMPLES[selectedTopic].code}</code>
    </pre>
    </div> 
          );
        }
  
  function handSelect(selectedButton){
    setSelectedTopic(selectedButton);
    //console.log(selectedButton);
  } 

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
        <section id= "examples">
          <h2>Menu</h2>
          <menu>
            <TabButton label = 'Components' onSelect= {() => handSelect('components')}></TabButton>
            <TabButton label = 'JSX' onSelect= {() => handSelect('jsx')}></TabButton>
            <TabButton label = 'Props' onSelect= {() => handSelect('props')}></TabButton>
            <TabButton label = 'State' onSelect= {() => handSelect('state')}></TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;