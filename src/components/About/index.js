import React from 'react';

function About(props) {
    const {
        setCurrentSection,
        setContactSelected
    } = props;
    
    return(
        <section className='flex-col-reverse md:flex-row flex justify-center pt-1/12 pb-80 md:mx-1/12 max-h-min'>
            <div className='flex flex-col max-w-full md:max-h-min md:max-w-lg columns-1 justify-center z-10 align-middle pt-8 md:pt-0'>
                <h3 className='hidden md:inline-block max-h-1/12 mb-2'>Hi There,</h3>
                <p className='md:skewed-border-left bg-gray-900 p-2 self-center max-w-[50%] md:min-h-min md:max-w-none'>I'm Aaron Rones. A <a 
                    onClick={() => {setCurrentSection('Portfolio'); setContactSelected(false);}}
                    className='border-b border-purple-800'>Full Stack Web Developer</a> I really enjoy crafting experiences for people with the help of technology. I graduated from UCF with a degree in Game Design in 2020. <br/>
                    <br />Now I'm taking what I learned about digital content creation there and applying it to Web Development.
                </p>
            </div>
            <div className=' max-w-max self-center'>
                <h3 className='inline-block md:hidden max-h-1/12 mb-2'>Hi There,</h3>
                <img className='max-h-[200px] md:max-h-[500px] p-8 md:skewed-border-right border-purple-800 border-2' src={require(`../../assets/favicon.png`)}/>
            </div>
        </section>
    )
}

export default About;
