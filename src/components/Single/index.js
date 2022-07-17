import React from "react";

function Single() {

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
    ]

    return(
        <div className="container columns-2 m-36 mt-20 min-h-fit">
            {projects.map(project => (
                <article className="mb-16" key={project.name}>
                    <div className="flex align-middle">
                        <a href={project.link} target={'_blank'}>
                            <img
                                src={require(`../../assets/${project.pic}`)}
                                alt={project.name}
                                className=' min-h-[250px] max-w-md p-2 border border-purple-800'
                                
                            />
                        </a>
                        <div className="ml-2">
                            <h4 className="border-b border-purple-800 text-lg font-bold">{project.name}</h4>
                            <p>{project.description}</p>

                        </div>
                    </div>
                    <div className="flex ml-1 mt-1">
                        <p>Technologies Used:</p>
                        <ul className="flex px-2">
                            {project.techs.map(tech => (
                                <li className="px-1 border-l border-1">{tech}</li>
                            ))}
                        </ul>
                    </div>
                </article>
            ))}

        </div>
    )
}

export default Single;