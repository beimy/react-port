import React from 'react';

const Menu = (props) => {

    const {
        currentSection,
        setCurrentSection,
        menuOpen
    } = props;

    return (
        <nav className={`${menuOpen ? 'translate-x-[0]' : 'hidden translate-x-[200%]'} 
                         max-w-full
                        transition-transform
                        flex flex-col justify-center h-screen 
                        text-right p-2 absolute top-0 right-0 z-20 bg-more-grey`}
                        >
            <button className='mobile-nav-btn'>About Me</button>
            <button className='mobile-nav-btn'>Portfolio</button>
            <button className='mobile-nav-btn'>Contact</button>
            <button className='mobile-nav-btn'>Resume</button>
        </nav>
    )
}

export default Menu;