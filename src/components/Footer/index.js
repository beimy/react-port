import React from "react";

function Footer() {
    return (
        <footer className="flex bg-gray-800 mt-auto justify-center py-2">
            <ul className="flex m-4 mr-2 border-r-2 border-purple-800">
                <li className="text-lg px-2">
                    <a href=''>HOME</a></li>
                <li className="text-lg px-2">
                    <a href=''>ABOUT</a></li>
                <li className="text-lg px-2">
                    <a href=''>PORTFOLIO</a></li>
                <li className="text-lg px-2">
                    <a href=''>CONTACT</a></li>
                <li className="text-lg px-2">
                    <a href=''>RESUME</a></li>
            </ul>
            
            <span className="flex">
                <a className="flex mr-1 pt-[0.85rem]" href="https://github.com/beimy" target={'_blank'}>
                    <img src={require('../../assets/GitHub-Mark-64px.png')} alt='github link' className='max-h-8'/>
                    <p className=" max-h-7 ml-1 pt-1">GitHub</p>
                </a>
            </span>
            <span className="flex">
                <a className="flex mx-1 pl-1 pt-[0.85rem]" href="https://www.linkedin.com/in/aaron-rones-785071184/" target={'_blank'}>
                    <img src={require('../../assets/linkedin-logo.png')} alt='linked in link' className='max-h-8'/>
                    <p className=" max-h-7 pt-1">LinkedIn</p>
                </a>
            </span>
            <span className="flex">
                <a className="flex mx-1 pl-1 pt-[0.85rem]" href="https://stackoverflow.com/users/18122505/aaron-rones" target={'_blank'}>
                    <img src={require('../../assets/stackoverflow-icon.png')} alt='linked in link' className='max-h-8'/>
                    <p className=" max-h-7 pt-1">Stack Overflow</p>
                </a>
            </span>
            <span className="flex">
                <a className="flex mx-1 pl-1 pt-[0.85rem]" href="https://twitter.com/aaron_rones" target={'_blank'}>
                    <img src={require('../../assets/twitter-logo.png')} alt='linked in link' className='max-h-8'/>
                    <p className=" max-h-7 pt-1">Twitter</p>
                </a>
            </span>
        </footer>
    )
}

export default Footer;