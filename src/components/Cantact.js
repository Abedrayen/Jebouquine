import React, { useState } from 'react';
import './ContactForm.css'; // Import the CSS file

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const { name, email, message } = formState;

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic goes here
    };

    return (<
        form onSubmit={handleSubmit}
        className="form"
        id="wa" >
        <
        label htmlFor="name"
            className="form-label" >
            Name:
            <
        /label> <
                input type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                className="form-input" /
            >

            <
        label htmlFor="email"
                className="form-label" >
                Email:
                <
        /label> <
                    input type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="form-input" /
                >

                <
        label htmlFor="message"
                    className="form-label" >
                    Message:
                    <
        /label> <
                        textarea id="message"
                        name="message"
                        value={message}
                        onChange={handleChange}
                        className="form-input" /
                    >

                    <
        button type="submit"
                        className="form-button" >
                        Send Message <
        /button> <
        /form>
                        );
};

                        export default Contact;