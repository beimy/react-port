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
        <header className="flex-wrap p-5 border-b-4 border-purple-800 w-screen">
            <nav className="">
                <a className="space-y-2" data-testid='link' href="/react-port/">
                    <span className="text-purple-800 text-3xl" data-testid='home' onClick={() => setContactSelected(false)}>Aaron Rones</span>
                </a>
                {/* Web Navbar */}
                <div className="hidden md:flex align-middle float-right pr-4">
                    <ul className="flex flex-wrap justify-end align-middle align">
                        <li className={`mx-2 ${currentSection === 'About' && 'navActive'}`}>
                            <a className=" text-3xl" data-testid="about" onClick={() => {setCurrentSection('About'); setContactSelected(false)}}>
                                About Me
                            </a>
                        </li>
                        <li className={`mx-2 ${currentSection === 'Portfolio' && 'navActive'}`}>
                            <a className=" text-3xl" data-testid="about" onClick={() => {setCurrentSection('Portfolio'); setContactSelected(false);}}>
                                Portfolio
                            </a>
                        </li>
                        <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                            <a className=" text-3xl" data-testid="about" href="#contact" onClick={() => {setContactSelected(true); setCurrentSection('Contact');}}>
                                Contact
                            </a>
                        </li>
                        <li className={`ml-2 ${currentSection === 'Resume' && 'navActive'}`}>
                            <a className=" text-3xl" data-testid="about" onClick={() => {setCurrentSection('Resume'); setContactSelected(false);}}>
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Mobile Navbar */}
                <div className="md:hidden float-right pr-4 pt-2">
                    <button className="space-y-2">
                        <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                        <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                        <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                    </button>
                    
                </div>
                <div className="hidden mobile-menu">
                    
			    </div>
            </nav>
        </header>
    )
}

export default Nav;