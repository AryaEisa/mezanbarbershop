import React from 'react';
import Header from './components/js/Header';
import HomePage from './components/js/HomePage';
import './App.css'; // Importera din CSS-fil för App-komponenten

function App() {
  return (
    <div className="app">
      <header>
         <Header />
      </header>
     <HomePage />
    </div>
  );
}

export default App;
