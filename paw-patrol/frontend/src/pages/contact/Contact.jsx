import React from 'react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    return (
        <div className="contact-container">
            <form onSubmit={handleSubmit}>
                <h2>Contact Us</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
