import React from 'react';
import "./portfolio.css";

const Portfolio = () => {
    return (
        <>
            <section id='portfolio'>
                <h5>My Recent Work</h5>
                <h2>Portfolio</h2>
                <div className="container portfolio__container">
                    <article className='portfolio__item'>
                        <div className="portfilio__item-image">
                            <img src="/website1.jpg" alt="" />
                        </div>
                        <h3>This is a portfolio item title</h3>
                        <div className="portfoli__item-cta">
                            <a href="https://github.com" className='btn'>Github</a>
                            <a href="https://gihub.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                    <article className='portfolio__item'>
                        <div className="portfilio__item-image">
                            <img src="/website2.jpg" alt="" />
                        </div>
                        <h3>This is a portfolio item title</h3>
                        <div className="portfoli__item-cta">
                            <a href="https://github.com" className='btn'>Github</a>
                            <a href="https://gihub.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                    <article className='portfolio__item'>
                        <div className="portfilio__item-image">
                            <img src="/website3.jpg" alt="" />
                        </div>
                        <h3>This is a portfolio item title</h3>
                        <div className="portfoli__item-cta">
                            <a href="https://github.com" className='btn'>Github</a>
                            <a href="https://gihub.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                    <article className='portfolio__item'>
                        <div className="portfilio__item-image">
                            <img src="/website4.jpg" alt="" />
                        </div>
                        <h3>This is a portfolio item title</h3>
                        <div className="portfoli__item-cta">
                            <a href="https://github.com" className='btn'>Github</a>
                            <a href="https://gihub.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                    <article className='portfolio__item'>
                        <div className="portfilio__item-image">
                            <img src="/website5.jpg" alt="" />
                        </div>
                        <h3>This is a portfolio item title</h3>
                        <div className="portfoli__item-cta">
                            <a href="https://github.com" className='btn'>Github</a>
                            <a href="https://gihub.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                    <article className='portfolio__item'>
                        <div className="portfilio__item-image">
                            <img src="/website6.jpg" alt="" />
                        </div>
                        <h3>This is a portfolio item title</h3>
                        <div className="portfoli__item-cta">
                            <a href="https://github.com" className='btn'>Github</a>
                            <a href="https://gihub.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Portfolio