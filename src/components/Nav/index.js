import React from "react";

function Nav() {
    return(
        <header className="flex flex-wrap justify-between px-1 pb-1 border-b-4 border-purple-800">
            <a className="pl-8 py-3" data-testid='link' href="/">
                <span className="text-purple-800 text-5xl">Aaron Rones</span>
            </a>
            <nav className="flex align-middle float-right">
                <ul className="mr-3 mt-3 flex flex-wrap justify-end align-middle">
                    <li className="mx-2 pt-2 ">
                        <a className=" text-3xl" data-testid="about" href="#about">
                            About Me
                        </a>
                    </li>
                    <li className="mx-2 pt-2 ">
                        <a className=" text-3xl" data-testid="about" href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2 pt-2 ">
                        <a className=" text-3xl" data-testid="about" href="#contact">
                            Contact
                        </a>
                    </li>
                    <li className="mx-2 pt-2 ">
                        <a className=" text-3xl" data-testid="about" href="#resume">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;