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

    function scrollToSection(section) {
        const target = document.getElementById(section);
        target.scrollIntoView({ behavior: 'smooth' });
    }


    return(
        <header className="flex border-b-4 p-4 pr-6 border-purple-800 max-w-[full] overflow-hidden sticky top-0 z-50">
            <nav className="flex-wrap max-w-full w-full">
                <a className="space-y-2" data-testid='link' href="/react-port/">
                    <span className="text-purple-800 text-3xl" data-testid='home' onClick={() => setCurrentSection('About')}>Aaron Rones</span>
                </a>
                {/* Web Navbar */}
                <div className="hidden md:flex align-middle float-right pr-">
                    <ul className="flex flex-wrap justify-end align-middle align">
                        <li className={`mx-2 ${currentSection === 'About' && 'navActive'}`}>
                            <a className=" text-3xl" data-testid="about" onClick={() => {setCurrentSection('About'); scrollToSection('about-section')}}>
                                About Me
                            </a>
                        </li>
                        <li className={`mx-2 ${currentSection === 'Portfolio' && 'navActive'}`}>
                            <a className=" text-3xl" data-testid="about" onClick={() => {setCurrentSection('Portfolio'); scrollToSection('porfolio-section')}}>
                                Portfolio
                            </a>
                        </li>
                        <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                            <a className=" text-3xl" data-testid="about" href="#contact" onClick={() => {setCurrentSection('Contact'); scrollToSection('contact-section')}}>
                                Contact
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
                        setMenuOpen={setMenuOpen}
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