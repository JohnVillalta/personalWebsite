import React from 'react'
<<<<<<< HEAD
import { NavLink as Link, Routes, Route } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars'
import './allCss/imgbar.css'
=======
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
>>>>>>> c6835db33b2eb4ced914a3a91b37c17d77624396

const ImageNavBar = (props) => {
    var imageDesc = ["This is description 1", "This is description 2", "This is description 3"]
    
    return (
        <div id="wrapDiv">
<<<<<<< HEAD
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
=======
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
>>>>>>> c6835db33b2eb4ced914a3a91b37c17d77624396
            </Routes>
        </div>

        
    );
};

const imgAdds = [require('../components/Images/cc1.png'), require('../components/Images/cc2.png'), require('../components/Images/cc3.png'), 
    require('../components/Images/cc4.png'), require('../components/Images/cc5.png'), require('../components/Images/cc6.png')]
export default ImageNavBar;