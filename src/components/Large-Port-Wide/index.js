import React from "react";

function LargePortWide(props) {
    return (
    <div className="max-w-[1360px] mx-auto">
        <div className="flex p-2 pt-8 pr-1 flex-row-reverse max-w-full">
            <div className="flex flex-col self-center jus mt-2 p-2 flex-[3]">
                <a href="https://beimy.github.io/foraging-site/" target={'_blank'} className='flex flex-col self-center justify-center p-2 flex-[3]'>
                    <img className="p-2 md:skewed-border-right border border-purple-800 max-w-[99%]" 
                        src={require(`../../assets/foraging-still_01.PNG`)}></img>
                </a>
                    <ul className="flex flex-wrap overflow-visible my-2 relative right-5">
                        <li className="p-1 pr-1 border-r border-white">React</li>
                        <li className="p-1 pr-1 border-r border-white">TypeScript</li>
                        <li className="p-1 border-r border-white">Tailwind</li>
                        <li className="p-1 border-r border-white">Express.js</li>
                        <li className="p-1 border-r border-white">MongoDB</li>
                        <li className="p-1 pr-1 border-r border-white">Node.js</li>
                        <li className="p-1 border-r border-white">Google Maps API</li>
                    </ul>
                    <span className="relative right-4 self-end lg:hidden">Github Repo: <a href="https://github.com/beimy/foraging-site" target={'_blank'} className='text-purple-800'>Link</a></span>
            </div>
            <div className="px-5 pr-10 max-w-[99%] flex-[2] ">
                <h3 className="relative left-9 mb-1 text-3xl font-bold">Foraging Friend</h3>
                <p className="p-1 block skewed-border-right">Foraging Friend is a MERN stack application that helps users find local foragable ingredients, and shows them how to use them in craft cocktails. It uses the google maps api to generate a map of found ingredients populated with user driven data stored in a MongoDB database. Users can also browse curated user submitted cocktails that use foraged ingredients.</p>
                <span className="hidden relative right-5 mt-2 lg:block">Github Repo: <a href="https://github.com/beimy/foraging-site" target={'_blank'} className='text-purple-800'>Link</a></span>
           </div>
        </div>

        <div className="flex p-2 pt-10 pl-1 flex-row-reverse max-w-full">
            <div className="md:px-5 md:pl-10  max-w-[99%] flex-[2]">
                <h3 className="relative right-9 mb-1 text-3xl font-bold">Fridge Friend</h3>
                <p className="p-1 block md:skewed-border-left">Fridge Friend is a MERN stack application that helps users find recipes based on ingredients they already have. Users can sign-up for an account to save favorited recipes. This application makes use of 3rd party API's for recipe searches, and our own Express.js server/API for storing and fetching user data.</p>
                <span className="hidden relative left-6 mt-2 lg:block">Github Repo: <a href="https://github.com/beimy/fridge-friend" target={'_blank'} className='text-purple-800'>Link</a></span>
            </div>
            <div className="flex flex-col self-center jus mt-2 p-2 flex-[3]">
                <a href="https://fridge-friends.herokuapp.com/" target={'_blank'} className='flex flex-col self-center justify-center p-2 flex-[3]'>
                    <img className="p-2 md:skewed-border-left border border-purple-800 max-w-[99%]" 
                        src={require(`../../assets/fridge-friend_snap.PNG`)}></img>
                </a>
                    <ul className="flex flex-wrap overflow-visible my-2 relative left-7 xl:left-10">
                        <li className="p-1 pr-1 border-r border-white">React</li>
                        <li className="p-1 border-r border-white">GraphQL</li>
                        <li className="p-1 border-r border-white">Express.js</li>
                        <li className="p-1 border-r border-white">MongoDB</li>
                        <li className="p-1 pr-1 border-r border-white">Node.js</li>
                    </ul>
                    <span className="relative left-6 lg:hidden">Github Repo: <a href="https://github.com/beimy/fridge-friend" target={'_blank'} className='text-purple-800'>Link</a></span>
            </div>
        </div>
    </div>
    )
};

export default LargePortWide;