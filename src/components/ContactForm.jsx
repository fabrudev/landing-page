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
            <h1>Envianos un mensaje!</h1>
            <form>

                <input
                    placeholder='Nombre'
                    onChange={e => setName(e.target.value)}
                    value={name}
                />

                <input 
                    placeholder='Apellido'
                    onChange={e => setSubject(e.target.value)}
                    value={subject}
                />

                <input 
                    placeholder='Email'
                    type='email'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />


                <textarea 
                    placeholder='Mensaje'
                    rows="4"
                    onChange={e => setMsg(e.target.value)}
                    value={msg}
                />

                <button onClick={send}>
                    Enviar Mensaje
                </button>

            </form>

            <p className={ isSent ? "show-msg" : "hide-msg"}>Mensaje enviado con éxito!</p>

        </div>
    );
};

export default ContactForm;