import React, {useRef} from "react";
import Single from '../Single';
import LargePort from "../Large-Port";
import LargePortWide from "../Large-Port-Wide";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Portfolio(props) {
    const titleRef = useRef();

    const projects = [
        {
            name: 'The Rabbit Hole',
            description: 'This is a blog style website designed to help users trace their steps when "Going down a rabbit hole" with a new technology, script, tool, etc. It uses a MySQL database to store user data, and Handlebars.js to dynamically render content.',
            pic: 'rabbithole_screenshot.PNG',
            techs: ['Javascript', 'Node.js', 'Express.js', 'MySQL', 'Handlebars.js'],
            liveLink: 'https://therabbithole-blog.herokuapp.com/',
            gitLink: 'https://github.com/beimy/tech-blog'
        }, 
        {
            name: 'NoSQL Social Media Backend',
            description: 'This project is a command line application that creates an express.js server that connects to a MongoDB database via mongoose.js. The server contains an api that simulates a basic social media application. Features include creating new users, creating links between users (friends), making posts (thoughts), commenting on posts(reactions).',
            pic: 'nosqlbackend_screenshot.PNG',
            techs: ['Javascript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose.js'],
            liveLink: 'https://github.com/beimy/social-network-nosql',
            gitLink: ''
        },
        {
            name: 'Just Tech News',
            description: 'This is a simple blog style website that uses an express.js server to connect to a SQL database. Users can create posts, make friends, and edit posts. This was my first use of the MVC paradigm, using handlebars to cut down on repetitive code.',
            pic: 'mvc-lesson-snapshot.PNG',
            techs: ['Javascript', 'SQL', 'Sequelize', 'Handlbars.js'],
            liveLink: 'https://github.com/beimy/just-tech-news',
            gitLink: ''
        },
        {
            name: 'SQL Store Backend',
            description: 'This application sets up a backend meant for an online storefront. Users can use the api endpoints to read, write, update, and delete data from a MySQL database, via an express server making use of the sequelize package.',
            pic: 'store-backend_screenshot.PNG',
            techs: ['Javascript', 'SQL', 'Node.js'],
            liveLink: 'https://github.com/beimy/store-backend',
            gitLink: ''
        }
    ];

    const {height, width} = useWindowDimensions();

    return (
        <section className="relative scroll-m-24 border-t-4 mt-10 border-white max-w-full p-2 md:scroll-m-32 md:px-10" id="porfolio-section">
            <h2 ref={titleRef} className="bg-gray-900 ml-10 text-2xl md:text-7xl md:-top-12 -top-5 md:relative absolute inline-block">Portfolio</h2>

            {width <= 767 ?
                <LargePort></LargePort>
                :
                <LargePortWide></LargePortWide>
            }

            <div className=" pt-1/12 px-[4%]">
                {projects.map(project => (
                    <Single
                        name={project.name}
                        description={project.description}
                        pic={project.pic}
                        techs={project.techs}
                        liveLink={project.liveLink}
                        gitLink={project.gitLink}
                    />
                ))}
            </div>
            

        </section>
    )
}

export default Portfolio;