import React from "react";

function Single({name, description, pic, techs, link}) {


    return(
        <article className="mb-16" key={name}>
            <div className="flex align-middle">
                <a className="max-w-[50%]" href={link} target={'_blank'}>
                    <img
                        src={require(`../../assets/${pic}`)}
                        alt={name}
                        className='p-2 border border-purple-800'
                    />
                </a>
                <div className="ml-2 max-w-[50%]">
                    <h4 className="border-b border-purple-800 text-lg font-bold">{name}</h4>
                    <p>{description}</p>

                </div>
            </div>
            <div className="flex ml-1 mt-1">
                <p>Technologies Used:</p>
                <ul className="flex px-2">
                    {techs.map(tech => (
                        <li className="px-1 border-l border-1">{tech}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default Single;