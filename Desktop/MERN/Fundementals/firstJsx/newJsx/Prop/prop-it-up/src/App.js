import React from 'react';
import './App.css';

import PersonCard from "./components/PersonCard"

function App() {
  return (
    <div className="App">
      <PersonCard firstName='Jane' lastName='Smith' age="25" hairColor="yellow" />
      <PersonCard firstName='John' lastName='Doe' age="25" hairColor="yellow" />
      <PersonCard firstName='Michael' lastName='Shin' age="25" hairColor="yellow" />
      <PersonCard firstName='Sujung' lastName='Choi' age="25" hairColor="yellow" />
    </div>
  );
}

export default App;
