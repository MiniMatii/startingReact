import { useState } from "react";

import Tabs from "./Tabs.jsx";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import { EXAMPLES } from "../data";


export default function Examples () {
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
        


        <Section id="examples" tittle="Examples">
          <h2>Menu</h2>
          <Tabs 
          buttonsContainer="menu"
          buttons={
            <>
            <TabButton isSelected={selectedTopic === 'components'} label = 'Components' onClick= {() => handSelect('components')}></TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} label = 'JSX' onClick= {() => handSelect('jsx')}></TabButton>
            <TabButton isSelected={selectedTopic === 'props'} label = 'Props' onClick= {() => handSelect('props')}></TabButton>
            <TabButton isSelected={selectedTopic === 'state'} label = 'State' onClick= {() => handSelect('state')}></TabButton>
            </>
            }>{tabContent}</Tabs>
          <menu>
            
          </menu>
          
        </Section>
    );
};