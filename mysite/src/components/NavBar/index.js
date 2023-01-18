import React from 'react';
import { motion } from "framer-motion";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav id= "nav">
                <NavMenu>
                    <NavLink to= '/home' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to= '/contentcreation' activeStyle>
                        Content Creation
                    </NavLink>
                    <NavLink to= '/programming' activeStyle>
                        Programming
                    </NavLink>
                    <NavLink to= '/music' activeStyle>
                        Music
                    </NavLink>
                    <NavLink to= '/blogs' activeStyle>
                        Blogs
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;