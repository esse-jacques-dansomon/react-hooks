
//useLayoutEffect is a hook that runs after every render.
// is used to read the DOM layout and synchronously re-render.
// It is a close cousin of useEffect.  The difference is that effects
// scheduled with useLayoutEffect will be flushed synchronously,
// before the browser has a chance to paint.
import './App.css';
import {useEffect, useLayoutEffect} from "react";

function App() {
  useEffect(() => {
    console.log("useEffect");
  });

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  });
  return (
    <div className="App">

    </div>
  );
}

export default App;
