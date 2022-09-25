import React from "react";

function Single({name, description, pic, techs, liveLink, gitLink}) {


    return(
        <article className="mb-16 md:px-10 max-w-[1360px] mx-auto" key={name}>
            <div className="flex align-middle">
                <div className="md:max-w-[50%] max-w-[80%]">
                    <h4 className="text-lg font-bold md:hidden">{name}</h4>
                    <a className="" href={liveLink} target={'_blank'}>
                        <img
                            src={require(`../../assets/${pic}`)}
                            alt={name}
                            className='p-2 border border-purple-800'
                        />
                    </a>
                    {gitLink && 
                        <span className="text-sm">Link to github repo 
                            <a className="text-purple-800 text-sm" href={gitLink} target='_blank'> here...</a>
                        </span>
                    }
                </div>
                <div className="hidden md:block ml-2 max-w-[50%]">
                    <h4 className="border-b border-purple-800 text-lg font-bold">{name}</h4>
                    <p>{description}</p>
                </div>
            </div>
            <div className="flex mt-2 max-w-full">
                <p className="hidden md:block">Technologies Used:</p>
                <ul className="flex flex-wrap overflow-visible">
                    {techs.map((tech, index, array) => (
                        <li key={`${name}`+`${index}`} className={`px-1 ${index == array.length -1 ? '' : 'border-r'}`}>
                            <p className={``}>{tech}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default Single;