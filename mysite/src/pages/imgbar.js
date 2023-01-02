import React from 'react'
import { NavLink as Link, Routes, Route } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars'
import './allCss/imgbar.css'

const ImageNavBar = () => {
    return (
        <div id="wrapDiv">
            <Scrollbars id="scrollable">
                <div id="images">   
                    <Link to='../image1' activeStyle><img class="barImg" src={imgAdds[0]} alt="img1"/></Link>
                    <Link to='../image2' activeStyle><img class="barImg" src={imgAdds[1]} alt="img2"/></Link>
                    <Link to='../image3' activeStyle><img class="barImg" src={imgAdds[2]} alt="img3"/></Link>
                    <Link to='../image4' activeStyle><img class="barImg" src={imgAdds[3]} alt="img4"/></Link>
                    <Link to='../image5' activeStyle><img class="barImg" src={imgAdds[4]} alt="img5"/></Link>
                    <Link to='../image6' activeStyle><img class="barImg" src={imgAdds[5]} alt="img6"/></Link>
                </div>
            </Scrollbars>
            <Routes>
                <Route path='../image1' />
                <Route path='../image2' />
                <Route path='../image3' />
            </Routes>
        </div>
    );
};

const imgAdds = [require('../components/Images/cc1.png'), require('../components/Images/cc2.png'), require('../components/Images/cc3.png'), 
    require('../components/Images/cc4.png'), require('../components/Images/cc5.png'), require('../components/Images/cc6.png')]
export default ImageNavBar;