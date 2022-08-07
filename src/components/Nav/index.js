import React, { useState } from "react";
import Menu from '../Menu';

function Nav(props) {

    const [menuOpen, setMenuOpen] = useState(false);

    const {
        sections = [],
        setCurrentSection,
        currentSection,
        contactSelected,
        setContactSelected
    } = props;


    return(
        <header className="flex border-b-4 p-4 border-purple-800 max-w-full overflow-hidden">
            <nav className="flex-wrap max-w-full w-full">
                <a className="space-y-2" data-testid='link' href="/react-port/">
                    <span className="text-purple-800 text-3xl" data-testid='home' onClick={() => setCurrentSection('About')}>Aaron Rones</span>
                </a>
                {/* Web Navbar */}
                <div className="hidden md:flex align-middle float-right pr-">
                    <ul className="flex flex-wrap justify-end align-middle align">
                        <li className={`mx-2 ${currentSection === 'About' && 'navActive'}`}>
                            <a className=" text-3xl" data-testid="about" onClick={() => {setCurrentSection('About');}}>
                                About Me
                            </a>
                        </li>
                        <li className={`mx-2 ${currentSection === 'Portfolio' && 'navActive'}`}>
                            <a className=" text-3xl" data-testid="about" onClick={() => {setCurrentSection('Portfolio');}}>
                                Portfolio
                            </a>
                        </li>
                        <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                            <a className=" text-3xl" data-testid="about" href="#contact" onClick={() => {setCurrentSection('Contact');}}>
                                Contact
                            </a>
                        </li>
                        <li className={`ml-2 ${currentSection === 'Resume' && 'navActive'}`}>
                            <a className=" text-3xl" data-testid="about" onClick={() => {setCurrentSection('Resume');}}>
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Mobile Navbar */}
                <div className="md:hidden float-right pt-2">
                    {<Menu
                        setCurrentSection={setCurrentSection}
                        currentSection={currentSection}
                        menuOpen={menuOpen}
                    />}
                    <button className="space-y-2 z-50 relative" onClick={() => {menuOpen ? setMenuOpen(false) : setMenuOpen(true)}}>
                        <span className="block w-8 h-0.5 bg-gray-400"></span>
                        <span className="block w-8 h-0.5 bg-gray-400"></span>
                        <span className="block w-8 h-0.5 bg-gray-400"></span>
                    </button> 
                </div>
                
            </nav>
        </header>
    )
}

export default Nav;