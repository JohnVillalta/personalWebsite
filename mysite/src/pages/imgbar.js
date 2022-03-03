import React from 'react'
import './imgbar.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {NavLink as Link} from 'react-router-dom'
import toad from '../components/Images/toadhat.jpg'
import zoro from '../components/Images/zoro.png'
import flute from '../components/Images/flute.jpg'
import sus from '../components/Images/sus.jpg'
import link from '../components/Images/link.jpg'
import joaquin from '../components/Images/joaquin.jpg'
import cut from '../components/Images/cut.jpg'

const ImageNavBar = (props) => {
    var imageDesc = ["This is description 1", "This is description 2", "This is description 3"]
    
    return (
        <div id="wrapDiv">
            <Link to = "../image1" activestyle><img class = "navImg" src = {toad}/></Link>
            <Link to = "../image2" activestyle><img class = "navImg" src = {zoro}/></Link>
            <Link to = "../image3" activestyle><img class = "navImg" src = {flute}/></Link>
            <Link to = "../image4" activestyle><img class = "navImg" src = {sus}/></Link>
            <Link to = "../image5" activestyle><img class = "navImg" src = {link}/></Link>
            <Link to = "../image6" activestyle><img class = "navImg" src = {joaquin}/></Link>
            <Link to = "../image7" activestyle><img class = "navImg" src = {cut}/></Link>


            <Routes>
                <Route path='../image1'/>
                <Route path='../image2'/>
                <Route path='../image3'/>
                <Route path='../image4'/>
                <Route path='../image5'/>
                <Route path='../image6'/>
                <Route path='../image7'/>
            </Routes>
        </div>

        
    );
};

export default ImageNavBar;