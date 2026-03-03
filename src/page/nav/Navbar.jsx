import React, { useState } from 'react';
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";

const Navbar = () => {
    const [activenav, setActivenav] = useState("#");
    return <>
        <nav>
            <a href="/" className={activenav === '#' ? 'active' : ''} onClick={() => setActivenav('#')}><AiOutlineHome /></a>
            <a href="#about" className={activenav === '#about' ? 'active' : ''} onClick={() => setActivenav('#about')}><FaRegUser /></a>
            <a href="#experience" className={activenav === '#experience' ? 'active' : ''} onClick={() => setActivenav('#experience')}><BiBook /></a>
            <a href="#services" className={activenav === '#services' ? 'active' : ''} onClick={() => setActivenav('#services')}><RiServiceLine /></a>
            <a href="#contacts" className={activenav === '#contacts' ? 'active' : ''} onClick={() => setActivenav('#contacts')}><BiMessageDetail /></a>
        </nav>
    </>
}

export default Navbar