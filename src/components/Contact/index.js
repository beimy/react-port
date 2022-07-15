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
        <div className="flex flex-grow relative border-t-4 border-white mt-20 justify-center">
            <h2 className="bg-gray-900 text-7xl absolute top-[-2.75rem] right-52 z-10 flex">Let's Work Together</h2>
            <section className="container flex justify-between my-20 px-20 ">
                <form id='contact-form' className="min-w-[50%] max-w-[600px] " onSubmit={handleSubmit}>
                    <ul className="min-w-[50%] max-w-[600px]">
                        <li className="contact-li-half">    
                            <input type="text" className="contact-input" defaultValue={name} placeholder='Name' onBlur={handleChange} name="name" />
                        </li>
                        <li className="contact-li-half">
                            <input type="email" className="contact-input" defaultValue={email} placeholder='Email' onBlur={handleChange} name="email" />
                        </li>
                        <li className="mr-4">
                            <input name="subject" className='contact-input w-full' defaultValue={subject} placeholder='Subject' onBlur={handleChange} rows="1"  />
                        </li>
                        <li className="mr-4">
                            <textarea name="message" className="contact-input w-full h-auto" defaultValue={message} placeholder='Message' onBlur={handleChange} rows='5'  />
                        </li>
                        <li>
                            {errorMessage && (
                            <div>
                                <p className='error-text'>{errorMessage}</p>
                            </div>
                            )}
                        </li>
                        <li>    
                            <button type='submit' className="float-right bg-purple-800 w-36 h-12 border-2 border-slate-600 mr-3">Submit</button>
                        </li>
                    </ul>
                </form>
                <p>Feel free to reach out for anything from buisness inquiries to general questions.<br/> I'm always looking for new connections.</p>
            </section>

        </div>
    )
}

export default Contact;