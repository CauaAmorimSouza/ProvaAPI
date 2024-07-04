import React from 'react';
import './App.css';
import Clubs from './components/Clubs.jsx';
import Header from './components/Header.jsx'

function App() {
  return (
    <div className="App">
      <Header />  
      <Clubs />
    </div>
  );
};

export default App;