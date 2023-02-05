import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  useEffect(() => {
    return () => {
      document.title = `${otherCount} times`;
    };
  }, [otherCount]);

  const increment =() => {
    setCount(count + 1);
  }

  return (
      <div className="App">
        button clicked {count} times<br/>
        button clicked {otherCount} times<br/>
        <br/><button onClick={increment}>Click me</button>
        <br/><button onClick={()=> setOtherCount(otherCount + 1 )}>Click other</button>
      </div>
  );
}

export default App;
