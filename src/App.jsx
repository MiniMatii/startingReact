
import ReactDOM from 'react-dom/client';

import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';


import Examples from './components/Examples.jsx';


const entryPoint = document.getElementById('root');
/*The line 13 and 14 makes the same thing*/ 
ReactDOM.createRoot(entryPoint).render(<App/>);
//ReactRDOM.createRoot(entryPoint).render(React.createElement(App));


//First custom component in its own file + Randomized description moved to components/header.jsx

//Coreconcept moved to components/CoreConcept.jsx
// coreconcepts from static to dinamic rendering using props check imports and data.js
// optized by mapping over array but here is manual for clarity
function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;