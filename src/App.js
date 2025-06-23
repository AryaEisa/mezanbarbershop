import React from 'react';
import Header from './components/js/Header';
import HomePage from './components/js/HomePage';
import Footer from './components/js/Footer';
import './App.css'; // Importera din CSS-fil för App-komponenten

function App() {
  return (
   <div className="app">
  <Header />
  <HomePage />
  <Footer />
</div>

  );
}

export default App;
