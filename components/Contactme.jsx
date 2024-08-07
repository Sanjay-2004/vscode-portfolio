"use client";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contactme = () => {
    const [details, setDetails] = useState({
        name: '',
        email: '',
        message: ''
    });

    const templateParams = {
        from_name: details.name,
        from_email: details.email,
        to_name: "Sanjay Agamamidi",
        message: details.message
    }
    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_h1t2qve', 'template_3v3kwy2', templateParams, 'jpcyricZULMYFryZ6')
            .then((response) => {
                // console.log('Success:', response);
                setDetails({
                    name: '',
                    email: '',
                    message: ''
                });
            }, (error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className='my-2 flex flex-col justify-start w-[45%]'>
            <h3 className='font-jetbrains font-semibold text-xl mx-3 mb-5'>Or just fill this Form</h3>
            <form className="me-5 flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="name" className='font-jetbrains text-base mb-1'>Name</label>
                <input
                    type="text"
                    name="name"
                    value={details.name}
                    onChange={handleChange}
                    className='w-full p-2 my-2 bg-tabs-bg border-none focus:ring-0 font-jetbrains'
                    required
                />
                <label htmlFor="email" className='font-jetbrains text-base mb-1'>Email</label>
                <input
                    type="email"
                    name="email"
                    value={details.email}
                    onChange={handleChange}
                    className='w-full p-2 my-2 bg-tabs-bg border-none focus:ring-0 font-jetbrains'
                    required
                />
                <label htmlFor="message" className='font-jetbrains text-base mb-1'>Message</label>
                <textarea
                    name="message"
                    value={details.message}
                    onChange={handleChange}
                    rows="6"
                    className='w-full p-2 my-2 bg-tabs-bg border-none focus:ring-0 font-jetbrains'
                    required
                />
                <button
                    type="submit"
                    className='p-2 my-2 bg-button-bg text-button-text max-w-28 hover:bg-button-hover-bg'
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contactme;
