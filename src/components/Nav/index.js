import React from "react";

function Nav() {
    return(
        <header className="flex flex-wrap justify-between px-1 pb-1 border-b-4 border-purple-600">
            <h2>
                <a data-testid='link' href="/">
                    <span className="text-purple-600 text-5xl">Aaron Rones</span>
                </a>
            </h2>
            <nav className="flex align-middle float-right">
                <ul className=" mt-3 flex flex-wrap justify-end align-middle">
                    <li className="align-middle mx-2 text-purple-400">
                        <a data-testid="about" href="#about">
                            About Me
                        </a>
                    </li>
                    <li className="mx-2 text-purple-400">
                        <a data-testid="about" href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2 text-purple-400">
                        <a data-testid="about" href="#contact">
                            Contact
                        </a>
                    </li>
                    <li className="mx-2 text-purple-400">
                        <a data-testid="about" href="#resume">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;