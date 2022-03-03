import React from 'react';
import ImageTemplate from './img'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {NavLink as Link} from 'react-router-dom'
import Image from '../components/image'
import toad from '../components/Images/toadhat.jpg'
import zoro from '../components/Images/zoro.png'
import flute from '../components/Images/flute.jpg'
import sus from '../components/Images/sus.jpg'
import link from '../components/Images/link.jpg'
import joaquin from '../components/Images/joaquin.jpg'
import cut from '../components/Images/cut.jpg'
import { FaBorderNone } from 'react-icons/fa';

const Content = () => {

    var [toggle, settoggle] = React.useState(0.5)
    var imageDesc = ["This is description 1", "This is description 2", "This is description 3", "This is description 4", "This is description 5", "This is description 6", "This is description 7"]

    const divStyle = {
        textAlign: 'center', 
        width: '100%'
    };

    function makeBlurry() {
        if(toggle == 0.5 || document.getElementById("nav").style.filter == "none"){
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
                <Link to='image2' activeStyle><Image add = {zoro} text= 'This is image 2'/></Link>
                <Link to='image3' activeStyle><Image add = {flute} text= 'This is image 3'/></Link>
                <Link to='image4' activeStyle><Image add = {sus} text= 'This is image 4'/></Link>
                <Link to='image5' activeStyle><Image add = {link} text= 'This is image 5'/></Link>
                <Link to='image6' activeStyle><Image add = {joaquin} text= 'This is image 6'/></Link>
                <Link to='image7' activeStyle><Image add = {cut} text= 'This is image 7'/></Link>
            </div>
            
            <Routes>
                <Route path='image1' element={<ImageTemplate add = {toad} desc = {imageDesc[0]}/>} />
                <Route path='image2' element={<ImageTemplate add = {zoro} desc = {imageDesc[1]}/>}/>
                <Route path='image3' element={<ImageTemplate add = {flute} desc = {imageDesc[2]}/>}/>
                <Route path='image4' element={<ImageTemplate add = {sus} desc = {imageDesc[3]}/>}/>
                <Route path='image5' element={<ImageTemplate add = {link} desc = {imageDesc[4]}/>}/>
                <Route path='image6' element={<ImageTemplate add = {joaquin} desc = {imageDesc[5]}/>}/>
                <Route path='image7' element={<ImageTemplate add = {cut} desc = {imageDesc[6]}/>}/>
            </Routes>
           
        </div>
    );
};

export default Content;