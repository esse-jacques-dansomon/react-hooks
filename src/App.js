import './App.css';
import {useMemo} from "react";
//useMemo is a hook that will return a memoized value.
//Pass a “create” function and an array of dependencies.
//useMemo will only recompute the memoized value when one of the dependencies has changed.
//This optimization helps to avoid expensive calculations on every render.

function App() {
  const  memoizedValue = useMemo(() => computeExpensiveValue(2, 29));

  return (
    <div className="App">
      {memoizedValue}<br/>
      <button onClick={() => memoizedValue}>Click me</button>
    </div>
  );

  function computeExpensiveValue(a, b) {
    // ... do something expensive ...
    const p =  a + b *a*b*a*b**a*b*a*a*a*b*a*b*a*a*a**a;
    console.log(p);
    return p;
  }

}


export default App;
