import React from 'react';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom'
=======
import ImageTemplate from './img'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
>>>>>>> c6835db33b2eb4ced914a3a91b37c17d77624396
import {NavLink as Link} from 'react-router-dom'
import ImageModal from './imgModal'
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
<<<<<<< HEAD
=======

    var [toggle, settoggle] = React.useState(0.5)
    var imageDesc = ["This is description 1", "This is description 2", "This is description 3", "This is description 4", "This is description 5", "This is description 6", "This is description 7"]

>>>>>>> c6835db33b2eb4ced914a3a91b37c17d77624396
    const divStyle = {
        textAlign: 'center', 
        width: '100%'
    };

    function makeBlurry() {
<<<<<<< HEAD
=======
        if(toggle == 0.5 || document.getElementById("nav").style.filter == "none"){
            settoggle(1);
>>>>>>> c6835db33b2eb4ced914a3a91b37c17d77624396
            document.getElementById("nav").style.filter = "blur(4px)";
            document.getElementById("mainContentPage").style.filter = "blur(4px)";
    };

    return (
        <div style={{display: 'block', height: '1150px', overflow: 'auto'}}>
            <div id="mainContentPage" style= {{divStyle}} onClick = {makeBlurry}>
<<<<<<< HEAD
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
=======
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
>>>>>>> c6835db33b2eb4ced914a3a91b37c17d77624396
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