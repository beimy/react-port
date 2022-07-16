import React from "react";

function Resume() {
    return (
        <div className="flex relative justify-evenly border-t-4 border-white pt-20">
            <h2 className="bg-gray-900 text-7xl absolute top-[-2.75rem] left-52 z-10 flex">Resume</h2>
            <div className="flex w-[35%] justify-between">
                <ul className="p-2 pr-6">
                    <li className="text-3xl border-b border-purple-800">Front-End Skills</li>
                    <li className="mt-2 ml-1">React</li>
                    <li className="ml-1">Javascript</li>
                    <li className="ml-1">jQuery</li>
                    <li className="ml-1">DOM Manipulation</li>
                    <li className="ml-1">Handlebars.js</li>
                    <li className="ml-1">Tailwind</li>
                    <li className="ml-1">Bootstrap</li>
                </ul>
                <ul className="p-2 pr-6">
                    <li className="text-3xl border-b border-purple-800">Back-End Skills</li>
                    <li className="mt-2 ml-1">MySQL</li>
                    <li className="ml-1">MongoDB</li>
                    <li className="ml-1">Git</li>
                    <li className="ml-1">Express.js</li>
                    <li className="ml-1">Node.js</li>
                    <li className="ml-1">GraphQL</li>
                    <li className="ml-1">RESTful API's</li>
                </ul>
            </div>
            <div className=" relative right-20">
                <span>Download my full resume 
                    <a download={require('../../assets/Resume_AaronRones-WebDev.pdf')}> here</a>
                </span>
            </div>
        </div>
    )
}

export default Resume;