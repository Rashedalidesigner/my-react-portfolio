import React from 'react';
import "./exprience.css";
import { BsPatchCheckFill } from "react-icons/bs";


const Exprience = () => {
    return (
        <section className='' id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Exprience</h2>
            <div className="container exeprience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__detile">
                            <BsPatchCheckFill className='experience__detile-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Exprerienced</small>
                            </div>
                        </article>
                        <article className="experience__detile">
                            <BsPatchCheckFill className='experience__detile-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediated</small>
                            </div>
                        </article>
                        <article className="experience__detile">
                            <BsPatchCheckFill className='experience__detile-icon' />
                            <div>
                                <h4>Tailwind Css</h4>
                                <small className='text-light'>Exprerienced</small>
                            </div>
                        </article>
                        <article className="experience__detile">
                            <BsPatchCheckFill className='experience__detile-icon' />
                            <div>
                                <h4>javaScript</h4>
                                <small className='text-light'>Exprerienced</small>
                            </div>
                        </article>
                        <article className="experience__detile">
                            <BsPatchCheckFill className='experience__detile-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Exprerienced</small>
                            </div>
                        </article>
                        <article className="experience__detile">
                            <BsPatchCheckFill className='experience__detile-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Exprerienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__detile">
                            <BsPatchCheckFill className='experience__detile-icon' />
                            <div>
                                <h4>Node js</h4>
                                <small className='text-light'>Exprerienced</small>
                            </div>
                        </article>
                        <article className="experience__detile">
                            <BsPatchCheckFill className='experience__detile-icon' />
                            <div>
                                <h4>MongoDb</h4>
                                <small className='text-light'>Intermediated</small>
                            </div>
                        </article>
                        <article className="experience__detile">
                            <BsPatchCheckFill className='experience__detile-icon' />
                            <div>
                                <h4>MySql</h4>
                                <small className='text-light'>Exprerienced</small>
                            </div>
                        </article>
                        <article className="experience__detile">
                            <BsPatchCheckFill className='experience__detile-icon' />
                            <div>
                                <h4>Express</h4>
                                <small className='text-light'>Exprerienced</small>
                            </div>
                        </article>
                        <article className="experience__detile">
                            <BsPatchCheckFill className='experience__detile-icon' />
                            <div>
                                <h4>Postgres</h4>
                                <small className='text-light'>Exprerienced</small>
                            </div>
                        </article>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Exprience


