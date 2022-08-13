import React from 'react';

const Menu = (props) => {

    const {
        currentSection,
        setCurrentSection,
        menuOpen,
        setMenuOpen
    } = props;

    function setSection(section) {
        setCurrentSection(section);
    }

    function scrollToSection(section) {
        setMenuOpen(false);
        const target = document.getElementById(section);
        target.scrollIntoView({ behavior: 'smooth' });
        setSection(section);
    }

    return (
        <nav className={`${menuOpen ? 'translate-x-[0]' : 'hidden translate-x-[200%]'} 
                         max-w-full
                        transition-transform
                        flex flex-col justify-center h-screen 
                        text-right p-2 absolute top-0 right-0 z-20 bg-more-grey`}
                        >
            <button className='mobile-nav-btn' onClick={() => {scrollToSection('about-section')}}>About Me</button>
            <button className='mobile-nav-btn' onClick={() => {scrollToSection('porfolio-section')}}>Portfolio</button>
            <button className='mobile-nav-btn' onClick={() => {scrollToSection('contact-section')}}>Contact</button>
        </nav>
    )
}

export default Menu;