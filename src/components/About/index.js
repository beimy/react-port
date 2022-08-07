import React from 'react';

function About(props) {
    const {
        setCurrentSection,
        setContactSelected
    } = props;
    
    return(
        <section className='flex justify-center pt-1/12 pb-80 mx-1/12 max-h-min'>
            <div className='flex flex-col max-h-min max-w-lg columns-1 justify-center z-10'>
                <h3 className='inline-block max-h-1/12 mb-2'>Hi There,</h3>
                <p className='p-2 skewed-border-left bg-gray-900 min-h-min'>I'm Aaron Rones. A <a 
                    onClick={() => {setCurrentSection('Portfolio'); setContactSelected(false);}}
                    className='border-b border-purple-800'>Full Stack Web Developer</a> I really enjoy crafting experiences for people with the help of technology. I graduated from UCF with a degree in Game Design in 2020. <br/>
                    <br />Now I'm taking what I learned about digital content creation there and applying it to Web Development.
                </p>
            </div>
            <div className='relative'>
                <img className='max-h-[500px] p-8 skewed-border-right' src={require(`../../assets/favicon.png`)}/>
            </div>
        </section>
    )
}

export default About;
