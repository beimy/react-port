import React from 'react';

function About() {
    return(
        <section className='container flex'>
            <div >
                <h3>Hi There,</h3>
                <div>
                    <p className='border-purple-600 border p-2'>I'm Aaron Rones. A <a href=''>Full Stack Web Developer</a> I really enjoy crafting experiences for people with the help of technology. I graduated from UCF with a degree in Game Design in 2020. <br/>
                        Now I'm taking what I learned about digital content creation there and applying it to Web Development
                    </p>
                </div>
                
            </div>
            <img className='w-48 border-purple-600 border p-2' src={require(`../../assets/hand-drawn-portait.png`)}/>
        </section>
    )
}

export default About;
