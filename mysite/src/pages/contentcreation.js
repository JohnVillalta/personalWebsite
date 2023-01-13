import React from 'react';
import { Routes, Route } from 'react-router-dom'
import {NavLink as Link} from 'react-router-dom'
import ImageModal from './imgModal'
import Image from '../components/image'

const Content = () => {
    const divStyle = {
        textAlign: 'center', 
        width: '100%'
    };

    function makeBlurry() {
            document.getElementById("nav").style.filter = "blur(4px)";
            document.getElementById("mainContentPage").style.filter = "blur(4px)";
    };

    return (
        <div style={{display: 'block', height: '1150px', overflow: 'auto'}}>
            <div id="mainContentPage" style= {{divStyle}} onClick = {makeBlurry}>
                <Link to='image1' activeStyle><Image add = {imgAdds[0]} text= {imgDates[0]}/></Link>
                <Link to='image2' activeStyle><Image add = {imgAdds[1]} text= {imgDates[1]}/></Link>
                <Link to='image3' activeStyle><Image add = {imgAdds[2]} text= {imgDates[2]}/></Link>
                <Link to='image4' activeStyle><Image add = {imgAdds[3]} text= {imgDates[3]}/></Link>
                <Link to='image5' activeStyle><Image add = {imgAdds[4]} text= {imgDates[4]}/></Link>
                <Link to='image6' activeStyle><Image add = {imgAdds[5]} text= {imgDates[5]}/></Link>
            </div>
            
            <Routes>
                <Route path='image1' element={<ImageModal add = {imgAdds[0]} text={img1text}/>}/>
                <Route path='image2' element={<ImageModal add = {imgAdds[1]} text={img2text}/>}/>
                <Route path='image3' element={<ImageModal add = {imgAdds[2]} text={img3text}/>}/>
                <Route path='image4' element={<ImageModal add = {imgAdds[3]} text={img3text}/>}/>
                <Route path='image5' element={<ImageModal add = {imgAdds[4]} text={img3text}/>}/>
                <Route path='image6' element={<ImageModal add = {imgAdds[5]} text={img3text}/>}/>
            </Routes>
        </div>
    );
};

const imgAdds = [require('../components/Images/cc1.png'), require('../components/Images/cc2.png'), require('../components/Images/cc3.png'), 
    require('../components/Images/cc4.png'), require('../components/Images/cc5.png'), require('../components/Images/cc6.png')]
const imgDates = ['December 6th, 2021', 'January 9th, 2022', 'January 25th, 2022', 'February 3rd, 2022', 'February 23rd, 2022', 'Oct 6th, 2022']
const img1text = "This describes image 1"
const img2text = "Wow image 2 is Zoro-dono"
const img3text = "Much wow from image 3"
export default Content;