import React from 'react'
import { NavLink as Link, Routes, Route } from 'react-router-dom'
import toad from '../components/Images/toadhat.jpg'
import './allCss/imgbar.css'

const ImageNavBar = (props) => {
    return (
        <div id="wrapDiv">
            <div>
                <h1>{props.text}</h1>
            </div>
            <div id="images">
                <Link to='../image1' activeStyle><img src={imgAdds[0]}/></Link>
                <Link to='../image2' activeStyle><img src={imgAdds[1]}/></Link>
                <Link to='../image3' activeStyle><img src={imgAdds[2]}/></Link>
            </div>
            <Routes>
                <Route path='../image1' />
                <Route path='../image2' />
                <Route path='../image3' />
            </Routes>
        </div>
    );
};

const imgAdds = [require('../components/Images/toadhat.jpg'), require('../components/Images/zoro.png')]
export default ImageNavBar;