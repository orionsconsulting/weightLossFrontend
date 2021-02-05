import React,{useState,useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import Card  from "./containers/Card";

function App() {
  
  return (
    <div className="App">
       <Header />
       <Card />
    </div>
  );
}

export default App;