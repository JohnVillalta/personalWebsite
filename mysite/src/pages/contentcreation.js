import React from 'react';
import ImageTemplate from './img1'
import { Routes, Route } from 'react-router-dom'
import {NavLink as Link} from 'react-router-dom'
import Image from '../components/image'
import toad from '../components/Images/toadhat.jpg'
import zoro from '../components/Images/zoro.png'
import { FaBorderNone } from 'react-icons/fa';

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
        
        <div>
            <div id="mainContentPage" style= {{divStyle}} onClick = {makeBlurry}>
                <Link to='image1' activeStyle><Image add = {toad} text= 'This is image 1'/></Link>
                <Link to='image2' activeStyle><Image add = {zoro} text= 'This is image 2'/></Link>
                <Link to='image3' activeStyle><Image add = {toad} text= 'This is image 3'/></Link>
            </div>
            
            <Routes>
                <Route path='image1' element={<ImageTemplate add = {toad} imgtext={img1text}/>} />
                <Route path='image2' element={<ImageTemplate add = {zoro} imgtext={img2text}/>}/>
                <Route path='image3' element={<ImageTemplate add = {toad} imgtext={img3text}/>}/>
            </Routes>
        </div>
    );
};

const img1text = "This describes image 1"
const img2text = "Wow image 2 is Zoro-dono"
const img3text = "Much wow from image 3"
export default Content;