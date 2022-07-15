import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  return (
    <div>
      <Nav>
      </Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>

    </div>
  );
}

export default App;
