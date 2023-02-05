import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {
    const [count, setCount] = useState(0);
    const refCount = useRef(0);
    useEffect(() => {
        return () => {
            console.log('refCount.current', refCount.current);
            console.log('count', count);
        };
    });
    const inputEle = useRef(null);
    const increment = () => setCount(prev => prev + 1);

    function handleClick() {
        increment();
        refCount.current++;
        inputEle.current.focus();
    }

    return (
        <div className="App">
            <p>{count} times</p>
            <p>{refCount.current} times</p>
            <button onClick={handleClick}>Click me</button>
            <input ref={inputEle}/>
        </div>
    );
}

export default App;
