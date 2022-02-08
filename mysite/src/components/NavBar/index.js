import React from 'react';
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
                <NavBtn>
                    <NavBtnLink to= '/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;