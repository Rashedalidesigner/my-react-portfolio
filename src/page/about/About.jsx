import React from 'react'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css"


const About = () => {
    return <>
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src="myphotos.png" alt="About image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ years working</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className='about__icon' />
                            <h5>Project</h5>
                            <small>20+ Completed</small>
                        </article>
                    </div>
                    <p>I am Rashed Ali, a passionate Full Stack Web Developer with strong skills in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I specialize in building responsive, scalable, and user-friendly web applications using the MERN stack. I enjoy turning ideas into real-world applications, writing clean and efficient code, and continuously learning new technologies to improve my development skills.</p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    </>
}

export default About