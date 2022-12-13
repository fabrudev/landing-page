import React, { useState } from 'react';
import './ContactFormStyles.css'

const ContactForm = () => {

    const [ isSent, setIsSent ] = useState(false);
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ subject, setSubject ] = useState("");
    const [ msg, setMsg ] = useState("");

    const send = () => {
        setName("");
        setEmail("");
        setSubject("");
        setMsg("");

        setIsSent(!isSent)
    }

    return (
        <div className='form-container'>
            <h1>Send a message to us!</h1>
            <form>

                <input
                    placeholder='Name'
                    onChange={e => setName(e.target.value)}
                    value={name}
                />

                <input 
                    placeholder='Email'
                    type='email'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />

                <input 
                    placeholder='Subject'
                    onChange={e => setSubject(e.target.value)}
                    value={subject}
                />

                <textarea 
                    placeholder='Message'
                    rows="4"
                    onChange={e => setMsg(e.target.value)}
                    value={msg}
                />

                <button onClick={send}>
                    Send Message
                </button>

            </form>

            <p className={ isSent ? "show-msg" : "hide-msg"}>Message sent succesfully.</p>

        </div>
    );
};

export default ContactForm;