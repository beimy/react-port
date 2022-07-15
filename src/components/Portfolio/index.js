import React from "react";

function Portfolio() {
    return (
        <section className=" static border-t-4 border-white">
            <h2 className="bg-gray-900 ml-10 text-7xl -top-10 relative inline-block">Web Dev</h2>

            <div className="flex px-3 py-3">
                <a href="https://github.com/beimy/photo-port">
                    <img className="max-w-2xl p-2 ml-24 border-purple-800 border" 
                        src={require(`../../assets/ohsnap_screenshot.PNG`)}></img>
                </a>
                <div className="flex flex-wrap flex-col px-5 mb-10 self-center">
                    <h3 className="text-4xl font-bold">Oh Snap!</h3>
                    <p className=" block border border-purple-800 mt-2 p-2">This was my first project working with the react framework.<br/> 
                    It taught me about components, state, and using hooks to pass data around the component hierarchy.</p>
                </div>
              
            </div>

            <div className="flex px-3 py-3">
                <div className="flex flex-wrap flex-col px-5 mb-10 ml-20 self-center">
                    <h3 className="text-4xl font-bold">NoSQL Social Media Backend</h3>
                    <p className=" block border border-purple-800 mt-2 p-2">This project is a command line application that creates an express.js server<br/>
                    that connects to a MongoDB database via mongoose.js. The server contains an api that simulates a basic social media application. Features <br/>
                    include creating new users, creating links between users (friends), making posts (thoughts), commenting on posts(reactions).</p>
                </div>
                <a href="https://github.com/beimy/social-network-nosql">
                    <img className="max-w-2xl p-2 ml-2 border-purple-800 border" 
                        src={require(`../../assets/nosqlbackend_screenshot.PNG`)}></img>
                </a>
            </div>

        </section>
    )
}

export default Portfolio;