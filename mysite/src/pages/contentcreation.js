import React from 'react';
import ImageTemplate from './img1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {NavLink as Link} from 'react-router-dom'
import Image from '../components/image'
import toad from '../components/Images/toadhat.jpg'
import { FaBorderNone } from 'react-icons/fa';

const Content = () => {

    var [toggle, settoggle] = React.useState(0.5)

    const divStyle = {
        textAlign: 'center', 
        width: '100%'
    };

    function makeBlurry() {
        if(toggle == 0.5){
            settoggle(1);
            document.getElementById("nav").style.filter = "blur(4px)";
            document.getElementById("mainContentPage").style.filter = "blur(4px)";
        }else{
            settoggle(0.5)
            document.getElementById("nav").style.filter = "none";
            document.getElementById("mainContentPage").style.filter = "none";
        }
    }

    return (
        
        <div>
            <div id="mainContentPage" style= {{divStyle}} onClick = {makeBlurry}>
                <Link to='image1' activeStyle><Image add = {toad} text= 'This is image 1'/></Link>
                <Link to='image2' activeStyle><Image add = {toad} text= 'This is image 2'/></Link>
                <Link to='image3' activeStyle><Image add = {toad} text= 'This is image 3'/></Link>
            </div>
            
            <Routes>
                <Route path='image1' element={<ImageTemplate add = {toad}/>} />
                <Route path='image2' element={<ImageTemplate />}/>
                <Route path='image3' element={<ImageTemplate />}/>
            </Routes>
           
        </div>
    );
};

export default Content;