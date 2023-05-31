import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const LinkStyle = {
        style : "text-[110%] text-[#496e46] align-middle rounded-full bg-[#f7f5f0] font-['Josefin_Sans']" + 
        " px-[1.5rem] py-[1rem] h-[100%] hover:text-[#499443] transition-colors duration-500 ease-in-out"
    };

    const activeStyle = {
        color: "#fff",
        backgroundColor: "#496e46",
        borderRadius: "40px",
    };

    return (
        <div className=" bg-white fixed">
            <nav className="h-[9vh] flex justify-between m-0 py-[1rem] px-[31vw]">
                <div className="flex align-middle mr-[-24px] w-[100vw] space-x-2">
                    <NavLink className={LinkStyle.style} to= '/' style={({ isActive }) => isActive ? activeStyle : undefined }>
                        HOME
                    </NavLink>
                    <NavLink className={LinkStyle.style} to= '/photography' style={({ isActive }) => isActive ? activeStyle : undefined }>
                        PHOTOGRAPHY
                    </NavLink>
                    <NavLink className={LinkStyle.style} to= '/programming' style={({ isActive }) => isActive ? activeStyle : undefined }>
                        PROGRAMMING
                    </NavLink>
                    <NavLink className={LinkStyle.style} to= '/music' style={({ isActive }) => isActive ? activeStyle : undefined }>
                        MUSIC
                    </NavLink>
                    <NavLink className={LinkStyle.style} to= '/blogs' style={({ isActive }) => isActive ? activeStyle : undefined }>
                        BLOGS
                    </NavLink>
                </div>
            </nav>
            <hr className="bg-gray-200 w-[90%] mx-[5%]"></hr>
        </div>
    );
};

export default Navbar;