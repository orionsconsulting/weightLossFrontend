import React from 'react';
import './App.css';
import Header from "./components/header";
import Card  from "./containers/Card";
import Goal from "./containers/Goal";

function App() {
  
  return (
    <div className="App">
       <Header />
       <Card />
       <Goal />
    </div>
  );
}

export default App;