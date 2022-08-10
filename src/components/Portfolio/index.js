import React, {useRef} from "react";
import Single from '../Single'

function Portfolio(props) {
    const titleRef = useRef();

    return (
        <section className="relative border-t-4 border-white mt-20 max-w-[full] p-2">
            <h2 ref={titleRef} className="bg-gray-900 ml-10 text-2xl md:text-7xl md:-top-12 -top-5 md:relative absolute inline-block">Portfolio</h2>

            <div className="flex p-2 pt-8 flex-row-reverse">
                <a href="https://github.com/beimy/photo-port" target={'_blank'} className='flex self-center justify-center p-2 flex-[3]'>
                    <img className="md:max-w-2xl md:skewed-border-right border border-purple-800 max-w-[99%]" 
                        src={require(`../../assets/ohsnap_screenshot.PNG`)}></img>
                </a>
                <div className=" max-w-[99%] flex-[2]">
                    <h3 className="md:text-4xl text-2xl font-bold border-b-purple-800 border-b md:border-0">Oh Snap!</h3>
                    <p className="block md:skewed-border-left">This was my first project working with the react framework.<br/> 
                    It taught me about components, state, and using hooks to pass data around the component hierarchy.</p>
                </div>
              
            </div>

            <div className="flex p-2 pt-8 flex-row-reverse">
                <div className="max-w-[99%] flex-[2]">
                    <h3 className="md:text-4xl text-2xl font-bold border-b-purple-800 border-b md:border-0">The Rabbit Hole</h3>
                    <p className="block md:skewed-border-right">This project is a command line application that creates an express.js server<br/>
                    that connects to a MongoDB database via mongoose.js. The server contains an api that simulates a basic social media application. Features <br/>
                    include creating new users, creating links between users (friends), making posts (thoughts), commenting on posts(reactions).</p>
                </div>
                <a href="https://github.com/beimy/tech-blog" target={'_blank'} className='flex self-center justify-center p-2 flex-[3]'>
                    <img className="md:max-w-2xl md:skewed-border-left border border-purple-800 max-w-[99%]" 
                        src={require(`../../assets/rabbithole_screenshot.PNG`)}></img>
                </a>
            </div>

            

        </section>
    )
}

export default Portfolio;