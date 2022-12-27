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
    }

    return (
        
        <div>
            <div id="mainContentPage" style= {{divStyle}} onClick = {makeBlurry}>
                <Link to='image1' activeStyle><Image add = {toad} text= 'This is image 1'/></Link>
                <Link to='image2' activeStyle><Image add = {zoro} text= 'This is image 2'/></Link>
                <Link to='image3' activeStyle><Image add = {toad} text= 'This is image 3'/></Link>
            </div>
            
            <Routes>
                <Route path='image1' element={<ImageTemplate add = {toad}/>} />
                <Route path='image2' element={<ImageTemplate add = {zoro}/>}/>
                <Route path='image3' element={<ImageTemplate />}/>
            </Routes>
           
        </div>
    );
};

export default Content;