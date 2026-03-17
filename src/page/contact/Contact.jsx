import React from 'react';
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
    const from = useRef();

    const sendemail = (e) => {
        e.preventDefault();
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', from.current, 'YOUR_USER_ID').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text)
        });
    }
    return <>
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>rashedalidesigner@gmail.com</h5>
                        <a href="mailto:rashedalidesigner@gmail.com">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerFill className='contact__option-icon' />
                        <h4>Messanger</h4>
                        <h5>Rashed Ali</h5>
                        <a href="https://m.me/Rasedali7565">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+8801914291809</h5>
                        <a href="https://api.whatsapp.com/send?phone+8801914291809">Send a message</a>
                    </article>
                </div>
                <form ref={from} onSubmit={sendemail}>
                    <input type="text" placeholder='Your Full Name' name="name" required />
                    <input type="email" placeholder='Your Email' name="name" required />
                    <textarea name="message" rows={10} placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    </>
}

export default Contact;