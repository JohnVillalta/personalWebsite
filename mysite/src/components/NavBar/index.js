import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const LinkStyle = {
        style : "text-[110%] text-[#496e46] align-middle rounded-full bg-[#fff]" + 
        " px-[1.5rem] py-[0.8rem] h-[100%] hover:text-[#499443] transition-colors duration-500 ease-in-out"
    };

    const activeStyle = {
        color: "#fff",
        backgroundColor: "#496e46",
        borderRadius: "40px",
    };

    return (
        <nav className="h-[85px] flex justify-between m-0 py-[1rem] px-[31vw]">
            <div className="flex align-middle mr-[-24px] w-[100vw] space-x-2">
                <NavLink className={LinkStyle.style} to= '/home' style={({ isActive }) => isActive ? activeStyle : undefined }>
                    Home
                </NavLink>
                <NavLink className={LinkStyle.style} to= '/contentcreation' style={({ isActive }) => isActive ? activeStyle : undefined }>
                    Content Creation
                </NavLink>
                <NavLink className={LinkStyle.style} to= '/programming' style={({ isActive }) => isActive ? activeStyle : undefined }>
                    Programming
                </NavLink>
                <NavLink className={LinkStyle.style} to= '/music' style={({ isActive }) => isActive ? activeStyle : undefined }>
                    Music
                </NavLink>
                <NavLink className={LinkStyle.style} to= '/blogs' style={({ isActive }) => isActive ? activeStyle : undefined }>
                    Blogs
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;