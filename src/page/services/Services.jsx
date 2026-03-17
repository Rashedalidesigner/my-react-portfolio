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

                        <li><BsCheck className='service__list-icon' />Understanding users through surveys, interviews, and analysis to know their needs and behavior.</li>
                        <li><BsCheck className='service__list-icon' />Creating simple layout structures of pages or screens before visual design begins.</li>
                        <li><BsCheck className='service__list-icon' />Designing the visual look of the product—colors, typography, buttons, icons, and layouts.</li>
                        <li><BsCheck className='service__list-icon' /> Improving how users interact with a product to make it easy, efficient, and enjoyable.</li>
                        <li><BsCheck className='service__list-icon' />Building interactive mockups so clients and users can test how the product will work.
                        </li>
                        <li><BsCheck className='service__list-icon' />Testing the design with real users to find problems and improve the experience.</li>
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