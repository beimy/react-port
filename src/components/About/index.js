import React from 'react';

function About() {
    return(
        <section className='container flex justify-center pt-36 pb-72'>
            <div className='flex flex-wrap p-32 pr-0 columns-1 relative left-28 z-10 '>
                <h3 className='w-[60%] pl-2  text-xl'>Hi There,</h3>
                <p className='p-2 max-w-xl skewed-border-left h-auto bg-gray-900'>I'm Aaron Rones. A <a href=''>Full Stack Web Developer</a> I really enjoy crafting experiences for people with the help of technology. I graduated from UCF with a degree in Game Design in 2020. <br/>
                    <br />Now I'm taking what I learned about digital content creation there and applying it to Web Development
                </p>
            </div>
            <div className='relative'>
                <img className='max-h-[450px] p-2 skewed-border-right' src={require(`../../assets/hand-drawn-portait.png`)}/>
            </div>
        </section>
    )
}

export default About;
