import React, {Fragment, useEffect, useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';

function App() {
  const [sections] = useState([
    {
      name: 'About'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact'
    },
    {
      name: 'Resume'
    }
  ]);

  function renderSwitch(currentSection) { 
    switch(currentSection) {
      case 'About':
        return <About></About>;
      case 'Portfolio':
        return <Portfolio></Portfolio>;
      case 'Resume':
        return <Resume></Resume>;
      case 'Contact':
        return <Contact></Contact>;
      default:
        break;
    }
  }

  const [contactSelected, setContactSelected] = useState(false);

  const [currentSection, setCurrentSection] = useState('About');

  return (
    <Fragment>
      <Nav
        section={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}  
      ></Nav>
      <main className='flex flex-col align-middle min-h-screen'>
        {!contactSelected ? (
          <>
          
          {renderSwitch(currentSection)}
          </>
        ): (
          <Contact></Contact>
        )}
        <Footer
        section={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        ></Footer>
      </main>
    </Fragment>
  );
}

export default App;
