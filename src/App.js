import './App.css';
import React from "react";
import MainComponent from "./components/main-component";
import LoginContextProvider from "./context/login-conextext";

const App =()  =>{
  return (
      <LoginContextProvider value={false}>
          <MainComponent />
      </LoginContextProvider>
  );
}

export default App;
