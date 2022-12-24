import { useState } from "react";
import "./App.css";

const App = () => {
const[userName, setUserName]= useState("Emmanuel")

const changeDataState=()=>{
     setUserName((prevUserName)=>(
      prevUserName === "Emmanuel" ? "Donkor" : "Adom"
     ))
}
  return (
    <div className="App">
      <h4 className="bg-primary text-white text-center p-2">
       {userName}'s Todo List
      </h4>
      <button className="btn btn-primary m-2"
      onClick={changeDataState}>Change</button>
    </div>
  );
};

export default App;
