import React from "react";
import Single from '../Single'

function Portfolio() {
    return (
        <section className=" static border-t-4 border-white">
            <h2 className="bg-gray-900 ml-10 text-7xl -top-10 relative inline-block">Web Dev</h2>

            <div className="flex px-3 py-3">
                <a href="https://github.com/beimy/photo-port">
                    <img className="max-w-2xl p-2 ml-36 skewed-border-right" 
                        src={require(`../../assets/ohsnap_screenshot.PNG`)}></img>
                </a>
                <div className="flex flex-wrap flex-col px-5 mb-10 self-center">
                    <h3 className="text-4xl font-bold">Oh Snap!</h3>
                    <p className=" block skewed-border-left mt-2 p-2">This was my first project working with the react framework.<br/> 
                    It taught me about components, state, and using hooks to pass data around the component hierarchy.</p>
                </div>
              
            </div>

            <div className="flex px-3 py-3">
                <div className="flex flex-wrap flex-col px-5 mb-10 ml-20 self-center">
                    <h3 className="text-4xl font-bold">The Rabbit Hole</h3>
                    <p className=" block skewed-border-right mt-2 p-2">This project is a command line application that creates an express.js server<br/>
                    that connects to a MongoDB database via mongoose.js. The server contains an api that simulates a basic social media application. Features <br/>
                    include creating new users, creating links between users (friends), making posts (thoughts), commenting on posts(reactions).</p>
                </div>
                <a href="https://github.com/beimy/tech-blog">
                    <img className="max-w-2xl p-2 ml-2 skewed-border-left" 
                        src={require(`../../assets/rabbithole_screenshot.PNG`)}></img>
                </a>
            </div>

            <Single></Single>

        </section>
    )
}

export default Portfolio;