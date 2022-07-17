import React from "react";

function Nav(props) {
    const {
        sections = [],
        setCurrentSection,
        currentSection,
        contactSelected,
        setContactSelected
    } = props;


    return(
        <header className="flex flex-wrap justify-between px-1 pb-1 border-b-4 border-purple-800">
            <a className="pl-8 py-3" data-testid='link' href="/react-port/">
                <span className="text-purple-800 text-5xl" data-testid='home' onClick={() => setContactSelected(false)}>Aaron Rones</span>
            </a>
            <nav className="flex align-middle float-right">
                <ul className="mr-3 mt-3 flex flex-wrap justify-end align-middle">
                    <li className={`mx-2 pt-2 ${currentSection === 'About' && 'navActive'}`}>
                        <a className=" text-3xl" data-testid="about" onClick={() => {setCurrentSection('About'); setContactSelected(false)}}>
                            About Me
                        </a>
                    </li>
                    <li className={`mx-2 pt-2 ${currentSection === 'Portfolio' && 'navActive'}`}>
                        <a className=" text-3xl" data-testid="about" onClick={() => {setCurrentSection('Portfolio'); setContactSelected(false);}}>
                            Portfolio
                        </a>
                    </li>
                    <li className={`mx-2 pt-2 ${contactSelected && 'navActive'}`}>
                        <a className=" text-3xl" data-testid="about" href="#contact" onClick={() => {setContactSelected(true); setCurrentSection('Contact');}}>
                            Contact
                        </a>
                    </li>
                    <li className={`mx-2 pt-2 ${currentSection === 'Resume' && 'navActive'}`}>
                        <a className=" text-3xl" data-testid="about" onClick={() => {setCurrentSection('Resume'); setContactSelected(false);}}>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;