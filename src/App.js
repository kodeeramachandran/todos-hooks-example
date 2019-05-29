import React from "react";
import Todos from './todos';
import "./App.css";

function App() {
  return (
    <div className="app"> 
          <div className="todos">
            <h2 className="todos-heading"> Todos With Hooks Example</h2>         
            <Todos />  
          </div>
    </div>
  );
}

export default App;
