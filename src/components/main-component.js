import {useContext} from "react";
import {LoginContext} from "../context/login-conextext";

const MainComponent = () => {
    const login  = useContext(LoginContext);
    console.log(login);
    return (
        <div>
            <h1>My App</h1>
            <p>My App is running!</p>
            <p>{login}</p>
        </div>
    );
}

export default MainComponent;