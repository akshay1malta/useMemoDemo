import React, { useState, useMemo } from "react";
import "./App.css";

const App = () => {
  const [increment, setIncrement] = useState(0);

  const maxComputation = () => {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum = sum+i;
    }
    console.log('sum', sum );
    return sum;
  };

  const beforeMaxComputation=useMemo(()=>maxComputation(),[increment])

  return (
    <div className="App">
      <div>
        <button onClick={() => setIncrement(increment + 1)}>Increment</button>
        <span>{increment}</span>
      </div>
      <div>{beforeMaxComputation}</div>
    </div>
  );
};

export default App;
