import './App.css';
import React, {useReducer} from "react";

const initialState = {count: 0};
function reducer(state, action) {
    switch (action.type) {
        case 'increase':
            return {count: state.count + 1};
        case 'decrease':
            return {count: state.count - 1};
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const increment = () => {dispatch({type : 'increase'})};
    const decrement = () => {dispatch({type : "decrease"})};


    return (
        <div className="App">
            <p>count : {state.count} </p>
            <div className="">
                <button onClick={increment}>increase</button>
                <button onClick={decrement}>decrease</button>
            </div>
        </div>
    );
}

export default App;
