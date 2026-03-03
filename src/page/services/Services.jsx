import React from 'react';
import "./serices.css";
import { BsCheck } from "react-icons/bs";


const Services = () => {
    return <>
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container service__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UX/UI</h3>
                    </div>
                    <ul className="service__list">
                        <li><BsCheck className='service__list-icon' />Lorem ipsum dolor sit amet consectetur.</li>
                        <li><BsCheck className='service__list-icon' />Lorem ipsum dolor sit amet consectetur.</li>
                        <li><BsCheck className='service__list-icon' />Lorem ipsum dolor sit amet consectetur.</li>
                        <li><BsCheck className='service__list-icon' />Lorem ipsum dolor sit amet consectetur.</li>
                        <li><BsCheck className='service__list-icon' />Lorem ipsum dolor sit amet consectetur.</li>
                        <li><BsCheck className='service__list-icon' />Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li><BsCheck className='service__list-icon' />Lorem ipsum dolor sit amet consectetur.</li>
                        <li><BsCheck className='service__list-icon' />Lorem ipsum dolor sit amet consectetur.</li>
                        <li><BsCheck className='service__list-icon' />Lorem ipsum dolor sit amet consectetur.</li>
                        <li><BsCheck className='service__list-icon' />Lorem ipsum dolor sit amet consectetur.</li>
                        <li><BsCheck className='service__list-icon' />Lorem ipsum dolor sit amet consectetur.</li>
                        <li><BsCheck className='service__list-icon' />Lorem ipsum dolor sit amet consectetur.</li>
                        <li><BsCheck className='service__list-icon' />Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Content create</h3>
                    </div>
                    <ul className="service__list">
                        <li><BsCheck className='service__list-icon' />Lorem ipsum dolor sit amet consectetur.</li>
                        <li><BsCheck className='service__list-icon' />Lorem ipsum dolor sit amet consectetur.</li>
                        <li><BsCheck className='service__list-icon' />Lorem ipsum dolor sit amet consectetur.</li>
                        <li><BsCheck className='service__list-icon' />Lorem ipsum dolor sit amet consectetur.</li>
                        <li><BsCheck className='service__list-icon' />Lorem ipsum dolor sit amet consectetur.</li>
                        <li><BsCheck className='service__list-icon' />Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                </article>
            </div>
        </section>
    </>
}

export default Services