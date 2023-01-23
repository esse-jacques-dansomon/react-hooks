import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
   const  [val, setVal] = useState(0);
    function incremente() {
        setVal(val + 1);
    }

    function decremente() {
        setVal(val - 1);
    }

    return (
    <div className="App">
     <div className="div">
       <br/>
         {val}
       <br/>
       <button onClick={incremente}>Incrementer</button>
       <button onClick={decremente}>décrementer</button>
     </div>
    </div>
  );
}

export default App;
