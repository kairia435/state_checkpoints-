import React from 'react';


function tick() {
    const element = (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    
  }
  
  setInterval(tick, 1000);
  export default tick ;