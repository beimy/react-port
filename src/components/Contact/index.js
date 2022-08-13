import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '', subject: '' });
    const {name, email, message, subject} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }

    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div className="flex scroll-m-16 relative border-t-4 border-white mt-20 justify-center" id="contact-section">
            <h2 className="bg-gray-900 text-2xl absolute -top-5 right-5 md:top-[-2.75rem] md:right-52 md:text-7xl z-10 whitespace-nowrap">Let's Work Together</h2>
            <section className="flex flex-col-reverse md:justify-between justify-center my-20 px-[5%]">
                <form id='contact-form' className="" onSubmit={handleSubmit}>
                    <ul className="">
                        <li className="md:contact-li-half">    
                            <input type="text" className="contact-input" defaultValue={'Your Name'} placeholder='Name' onBlur={handleChange} name="name" />
                        </li>
                        <li className="md:contact-li-half">
                            <input type="email" className="contact-input" defaultValue={'Your Email'} placeholder='Email' onBlur={handleChange} name="email" />
                        </li>
                        <li className="md:mr-4">
                            <input name="subject" className='contact-input w-full' defaultValue={'Subject'} placeholder='Subject' onBlur={handleChange} rows="1"  />
                        </li>
                        <li className="md:mr-4">
                            <textarea name="message" className="contact-input w-full h-auto" defaultValue={'Message'} placeholder='Message' onBlur={handleChange} rows='5'  />
                        </li>
                        <li>
                            {errorMessage && (
                            <div>
                                <p className='error-text'>{errorMessage}</p>
                            </div>
                            )}
                        </li>
                        <li>    
                            <button type='submit' className="float-right bg-purple-800 w-36 h-12 border-2 border-slate-600">Submit</button>
                        </li>
                    </ul>
                </form>
                <span className="px-1 pb-2">Download my full resume 
                    <a className=" font-bold" href={require('../../assets/Resume_AaronRones-WebDev.pdf')} download='AaronRones_Resume_WebDev.pdf'> here</a>
                </span>
                <p className="px-1 pb-2">Feel free to reach out for anything from buisness inquiries to general questions. I'm always looking for new connections.</p>
            </section>

        </div>
    )
}

export default Contact;