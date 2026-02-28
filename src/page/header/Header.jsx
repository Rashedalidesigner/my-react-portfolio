import React from 'react'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import "./header.css";


const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Rashed Ali</h1>
                <h5 className="text-light">FullStack Developer</h5>
                <CTA />
                <HeaderSocial />
                <div className="me">
                    <img src="myphoto.png" alt="" />
                </div>
                <a href="" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header