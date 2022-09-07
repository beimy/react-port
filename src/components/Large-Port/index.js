import React from "react";

function LargePort(props) {
    return (
    <>
        <h3 className="md:text-4xl text-2xl font-bold border-b-purple-800 border-b md:border-0 w-fit pt-8 px-1 mx-3">Foraging Friend</h3>
            <div className="flex p-2 pt-6 md:pr-10 max-w-full">
                <div className="p-1 md:px-5 md:pr-10  max-w-[99%] flex-[2] self-center">
                    <a href="https://beimy.github.io/foraging-site/" target={'_blank'} className='flex flex-[3] float-right w-2/3 m-1'>
                        <img className="p-2 md:skewed-border-right border border-purple-800 max-w-[99%]" 
                            src={require(`../../assets/foraging-still_01.PNG`)}></img>
                    </a>
                    <p className=" block md:skewed-border-left">Foraging Friend is a MERN stack application that helps users find local foragable ingredients, and shows them how to use them in craft cocktails. It uses the google maps api to generate a map of found ingredients populated with user driven data stored in a MongoDB database. Users can also browse curated user submitted cocktails that use foraged ingredients.</p>
                    <ul className="flex flex-wrap overflow-visible my-2">
                        <li className="p-1 pr-1 border-r border-white">React</li>
                        <li className="p-1 pr-1 border-r border-white">TypeScript</li>
                        <li className="p-1 border-r border-white">Tailwind</li>
                        <li className="p-1 border-r border-white">Express.js</li>
                        <li className="p-1 border-r border-white">MongoDB</li>
                        <li className="p-1 pr-1 border-r border-white">Node.js</li>
                        <li className="p-1 border-r border-white">Google Maps API</li>
                    </ul>
                    <span className="mt-4 p-1">Github Repo:<a href="https://github.com/beimy/foraging-site" target={'_blank'} className='text-purple-800'> Link</a></span>
                </div>
            </div>

            <h3 className="text-2xl font-bold border-b-purple-800 border-b w-fit pt-4 px-1 mx-6 float-right md:border-0 md:text-4xl ">Fridge Friend</h3>
            <div className="flex p-2 pt-6 md:pr-10 max-w-full clear-both">
                <div className="p-1 md:px-5 md:pr-10  max-w-[99%] flex-[2] self-center">
                    <a href="https://fridge-friends.herokuapp.com/" target={'_blank'} className='flex flex-[3] float-left w-2/3 m-1'>
                        <img className="p-2 md:skewed-border-right border border-purple-800 max-w-[99%]" 
                            src={require(`../../assets/fridge-friend_snap.PNG`)}></img>
                    </a>
                    <p className=" block md:skewed-border-left">Fridge Friend is a MERN stack application that helps users find recipes based on ingredients they already have. Users can sign-up for an account to save favorited recipes. This application makes use of 3rd party API's for recipe searches, and our own Express.js server/API for storing and fetching user data.</p>
                    <ul className="flex flex-wrap overflow-visible my-2">
                        <li className="p-1 pr-1 border-r border-white">React</li>
                        <li className="p-1 border-r border-white">GraphQL</li>
                        <li className="p-1 border-r border-white">Express.js</li>
                        <li className="p-1 border-r border-white">MongoDB</li>
                        <li className="p-1 pr-1 border-r border-white">Node.js</li>
                    </ul>
                    <span className="mt-4 p-1">Github Repo:<a href="https://github.com/beimy/fridge-friend" target={'_blank'} className='text-purple-800'> Link</a></span>
                </div>
            </div>

            {/* <div className="flex p-2 pt-8 max-w-full md:pl-10">
                <div className="md:px-5 md:pl-10  max-w-[99%] flex-[2] self-center">
                <h3 className="md:text-4xl text-2xl font-bold border-b-purple-800 border-b md:border-0 pl-4">Fridge Friend</h3>
                <p className="p-1 block md:skewed-border-right">Fridge Friend is a MERN stack application that helps users find recipes based on ingredients they already have. Users can sign-up for an account to save favorited recipes. This application makes use of 3rd party API's for recipe searches, and our own Express.js server/API for storing and fetching user data.</p>
                </div>
                <a href="https://fridge-friends.herokuapp.com/" target={'_blank'} className='flex self-center justify-center p-2 flex-[3]'>
                <img className="p-2 md:skewed-border-left border border-purple-800 max-w-[99%]" 
                src={require(`../../assets/fridge-friend_snap.PNG`)}></img>
                </a>
            </div> */}
    </>
    )
};

export default LargePort;