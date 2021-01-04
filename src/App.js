
import './App.css';
import photo from "./photo.jpg";
import React from 'react';
import Results from "./prof.js" 
import tick from "./tick.js"

const App = () =>  {
  //class App extends React.Component {
   

  const [showResults, setShowResults] = React.useState(false)
  const appearProfile = () => setShowResults(true)
 // function myFunction() {
 // const   myVar = setInterval(appearProfile, 3000);
  
  //}
  
  

  
  
  return (
    <div>  
      <button
              type="button"
              onClick={appearProfile}
            >appear profile</button>
      { showResults ? <Results /> : null }

   
    </div>
  )
}



export default App;
