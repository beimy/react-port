import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {

    const [formState, setFormState] = useState({ Name: '', Email: '', Message: '', Subject: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [canSend, setCanSend] = useState(false);
    
    const {name, email, message, subject} = formState;

    function handleChange(e) {
        if(e.target.name === 'Email') {
            const isValid = validateEmail(e.target.value);
            // console.log(isValid);

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
            setFormState({...formState, [e.target.name]: e.target.value });
        }
        if(formState.Name && formState.Email && formState.Message && formState.Subject){
            setCanSend(true);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(canSend) window.open(`mailto:aaronronesdev@gmail.com?subject=${formState.Subject}&body=${formState.Message}`);
        else{
            setErrorMessage('Please fill out all the forms above.')
        }
        // console.log(formState);
    }

    return (
        <div className="flex scroll-m-16 relative border-t-4 border-white mt-20 justify-center" id="contact-section">
            <h2 className="bg-gray-900 text-2xl absolute -top-5 right-5 md:top-[-2.75rem] md:right-52 md:text-7xl z-10 whitespace-nowrap">Let's Work Together</h2>
            <section className="flex flex-col-reverse md:justify-between justify-center my-20 px-[5%]">
                <form id='contact-form' className="" onSubmit={handleSubmit}>
                    <input type="text" className="contact-input md:contact-li-half" placeholder='Name' onChange={handleChange} name="Name" />
                    <input type="email" className="contact-input md:contact-li-half md:float-right md:mx-auto" placeholder='Email' onChange={handleChange} name="Email" />
                    <input name="Subject" className='contact-input' placeholder='Subject' onChange={handleChange} rows="1"  />
                    <textarea name="Message" className="contact-input h-auto pt-2" placeholder='Message' onChange={handleChange} rows='5'  />
                    <div className="px-2">
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                    <button type='submit' className={`float-right w-36 h-12 border-2 border-slate-600 ${canSend ? 'bg-purple-600' : 'bg-slate-800'}`}>Submit</button>
                </form>
                <p className="px-1 pb-2">Feel free to reach out for anything from buisness inquiries to general questions. I'm always looking for new connections.</p>
                <span className="px-1 pb-2">Download my full resume 
                    <a className=" font-bold" href={require('../../assets/Resume_AaronRones-WebDev.pdf')} download='AaronRones_Resume_WebDev.pdf'> here</a>
                </span>
            </section>

        </div>
    )
}

export default Contact;