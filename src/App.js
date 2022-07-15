import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Nav>
      </Nav>
      <main className='flex flex-col min-h-screen'>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Footer></Footer>
      </main>

    </div>
  );
}

export default App;
