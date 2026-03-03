import React from 'react';
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";


const Contact = () => {
    return <>
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5>rashedalidesigner@gmail.com</h5>
                        <a href="mailto:rashedalidesigner@gmail.com">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerFill />
                        <h4>Messanger</h4>
                        <h5>Rashed Ali</h5>
                        <a href="https://www.facebook.com/Rasedali7565">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp />
                        <h4>WhatsApp</h4>
                        <h5>+8801914291809</h5>
                        <a href="https://api.whatsapp.com/send?phone+8801914291809">Send a message</a>
                    </article>
                </div>
                <form action=""></form>
            </div>
        </section>
    </>
}

export default Contact