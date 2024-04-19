import React, { useState } from 'react';

function Contact() {
    // Define state variables for the form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Form submission handler
    const handleSubmit = (event) => {
        event.preventDefault();

        // Here you can handle form submission, e.g., sending data to a server
        // For now, let's just log the form data to the console
        console.log('Form submitted:', {
            name,
            email,
            message
        });

        // Clear the form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ marginLeft: '10px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ marginLeft: '10px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows="4"
                        cols="50"
                        style={{ marginLeft: '10px' }}
                    ></textarea>
                </div>

                <button type="submit">Submit</button>
            </form>

            
        </div>
    );
}

export default Contact;