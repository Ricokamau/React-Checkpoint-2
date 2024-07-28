// src/App.js
import React from 'react';
import PlayersList from './PlayersList';
import './App.css'; // Import CSS file

function App() {
  return (
    <div className="App">
      <h1 className="title">FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;