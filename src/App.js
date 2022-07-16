import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <div>
      <Nav>
      </Nav>
      <main className='flex flex-col align-middle min-h-screen'>
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
        <Contact></Contact>
        <Footer></Footer>
      </main>

    </div>
  );
}

export default App;
