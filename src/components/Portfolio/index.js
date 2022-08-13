import React, {useRef} from "react";
import Single from '../Single'

function Portfolio(props) {
    const titleRef = useRef();

    const projects = [
        {
            name: 'NoSQL Social Media Backend',
            description: 'This project is a command line application that creates an express.js server that connects to a MongoDB database via mongoose.js. The server contains an api that simulates a basic social media application. Features include creating new users, creating links between users (friends), making posts (thoughts), commenting on posts(reactions).',
            pic: 'nosqlbackend_screenshot.PNG',
            techs: ['Javascript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose.js'],
            link: 'https://github.com/beimy/social-network-nosql'
        }, 
        {
            name: 'Just Tech News',
            description: 'This is a simple blog style website that uses an express.js server to connect to a SQL database. Users can create posts, make friends, and edit posts. This was my first use of the MVC paradigm, using handlebars to cut down on repetitive code.',
            pic: 'mvc-lesson-snapshot.PNG',
            techs: ['Javascript', 'SQL', 'Sequelize',],
            link: 'https://github.com/beimy/just-tech-news'
        },
        {
            name: 'SQL Store Backend',
            description: 'This application sets up a backend meant for an online storefront. Users can use the api endpoints to read, write, update, and delete data from a MySQL database, via an express server making use of the sequelize package.',
            pic: 'store-backend_screenshot.PNG',
            techs: ['Javascript', 'SQL', 'Node.js'],
            link: 'https://github.com/beimy/store-backend'
        },
        {
            name: 'Note Taker',
            description: 'This simple website allows users to take notes. Users can save notes to a database, and also delete unneeded notes.',
            pic: 'noteTaker_still.png',
            techs: ['Javascript', 'SQL', 'Node.js'],
            link: 'https://github.com/beimy/note-taker'
        }
    ];

    return (
        <section className="relative scroll-m-16 border-t-4 border-white mt-20 max-w-full p-2 md:px-10" id="porfolio-section">
            <h2 ref={titleRef} className="bg-gray-900 ml-10 text-2xl md:text-7xl md:-top-12 -top-5 md:relative absolute inline-block">Portfolio</h2>

            <div className="flex p-2 pt-8 md:pr-10 flex-row-reverse max-w-full">
                <a href="https://github.com/beimy/photo-port" target={'_blank'} className='flex self-center justify-center p-2 flex-[3]'>
                    <img className="p-2 md:skewed-border-right border border-purple-800 max-w-[99%]" 
                        src={require(`../../assets/fridge-friend_snap.PNG`)}></img>
                </a>
                <div className="md:px-5 md:pr-10  max-w-[99%] flex-[2] self-center">
                    <h3 className="md:text-4xl text-2xl font-bold border-b-purple-800 border-b md:border-0">Fridge Friend</h3>
                    <p className="p-1 block md:skewed-border-left">This was my first project working with the react framework.<br/> 
                    It taught me about components, state, and using hooks to pass data around the component hierarchy.</p>
                </div>
            </div>

            <div className="flex p-2 pt-8 flex-row-reverse max-w-full md:pl-10">
                <div className="md:px-5 md:pl-10  max-w-[99%] flex-[2] self-center">
                    <h3 className="md:text-4xl text-2xl font-bold border-b-purple-800 border-b md:border-0 pl-4">The Rabbit Hole</h3>
                    <p className="p-1 block md:skewed-border-right">This project is a command line application that creates an express.js server<br/>
                    that connects to a MongoDB database via mongoose.js. The server contains an api that simulates a basic social media application. Features <br/>
                    include creating new users, creating links between users (friends), making posts (thoughts), commenting on posts(reactions).</p>
                </div>
                <a href="https://github.com/beimy/tech-blog" target={'_blank'} className='flex self-center justify-center p-2 flex-[3]'>
                    <img className="p-2 md:skewed-border-left border border-purple-800 max-w-[99%]" 
                        src={require(`../../assets/rabbithole_screenshot.PNG`)}></img>
                </a>
            </div>

            <div className=" pt-1/12 px-[4%]">
                {projects.map(project => (
                    <Single
                        name={project.name}
                        description={project.description}
                        pic={project.pic}
                        techs={project.techs}
                        link={project.link}
                    />
                ))}
            </div>
            

        </section>
    )
}

export default Portfolio;