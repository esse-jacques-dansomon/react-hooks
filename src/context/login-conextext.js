import {createContext, useState} from "react";

 export const  LoginContext = createContext();

const LoginContextProvider = (props) => {
    const [login, setLogin] = useState(false);
    return (
        <LoginContext.Provider value={login}>
            {props.children}
        </LoginContext.Provider>
    );
}

export default LoginContextProvider