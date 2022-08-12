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

  const [contactSelected, setContactSelected] = useState(false);

  const [currentSection, setCurrentSection] = useState('About');

  useEffect(() => {
    document.title = 'Aaron Rones'
  })

  function renderSwitch(currentSection) { 
    switch(currentSection) {
      case 'About':
        return <About
        setCurrentSection={setCurrentSection}
        ></About>;
      case 'Portfolio':
        return <Portfolio
        setCurrentSection={setCurrentSection}></Portfolio>;
      case 'Resume':
        return <Resume
        setCurrentSection={setCurrentSection}></Resume>;
      case 'Contact':
        return <Contact
        setCurrentSection={setCurrentSection}></Contact>;
      default:
        break;
    }
  }

  return (
    <Fragment>
      <main className=' max-w-full overflow-x-hidden'>
        <Nav
          section={sections}
          setCurrentSection={setCurrentSection}
          currentSection={currentSection}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}  
        ></Nav>
        
        <About
          setCurrentSection={setCurrentSection}>
        </About>
        <Portfolio
          setCurrentSection={setCurrentSection}>
        </Portfolio>
        {/* <Resume
          setCurrentSection={setCurrentSection}>
        </Resume>
        <Contact
          setCurrentSection={setCurrentSection}>
        </Contact> */}


        {/* <Footer
        section={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        ></Footer> */}
      </main>
    </Fragment>
  );
}

export default App;
