import React from 'react';
import { Routes, Route } from 'react-router-dom'
import {NavLink as Link} from 'react-router-dom'
import ImageModal from '../components/ImgModal/imgModal'
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
                <Route path='image1' element={<ImageModal add = {imgAdds[0]} text={imgDesc[0]} date={imgDates[0]}/>}/>
                <Route path='image2' element={<ImageModal add = {imgAdds[1]} text={imgDesc[1]} date={imgDates[1]}/>}/>
                <Route path='image3' element={<ImageModal add = {imgAdds[2]} text={imgDesc[2]} date={imgDates[2]}/>}/>
                <Route path='image4' element={<ImageModal add = {imgAdds[3]} text={imgDesc[3]} date={imgDates[3]}/>}/>
                <Route path='image5' element={<ImageModal add = {imgAdds[4]} text={imgDesc[4]} date={imgDates[4]}/>}/>
                <Route path='image6' element={<ImageModal add = {imgAdds[5]} text={imgDesc[5]} date={imgDates[5]}/>}/>
            </Routes>
        </div>
    );
};

const imgAdds = [require('../components/Images/cc1.png'), require('../components/Images/cc2.png'), require('../components/Images/cc3.png'), 
    require('../components/Images/cc4.png'), require('../components/Images/cc5.png'), require('../components/Images/cc6.png')]

const imgDesc = [ "This originally was a small photo session I had in my own room for the purpose of finding inspiration for song art. I didn't necessarily " +
        "complete the task at hand, but I did manage to create an interesting photo for the night.", "This graphic design piece took a step forward from the" +
        " photo a created on December 6th. It captured that much more intimate emotions with the closeup. After taking the photo, I decided to add abit of " +
        "texture witht he paint splatter. A posterize effect and small amount of text later ended in the final result.", "Capturing a sense of music within " +
        "a photo is difficult to do when you don't fully have a sense of music within yourself yet. I learned that when taking this photo late January of 2022." +
        " That being said, it didn't take long to take a photo like this within the confinements of my room. I will add that the gradient backdrop was added " +
        "in post to remove a door.", "This is one of my favorite nature photos that has come out of my camera. Namely because of how deep blue the water is. " +
        " I recall going multiple times on hikes at Crabtree Trailhead and Pinecrest Lake in 2022. They were easy opportunities for me to clear out my head " +
        "from the clutter of social media and school.", "If any these photos speak the words of introspectiveness it's this one. If I'm being honest, however," +
        " I actually took this photo when I was hiking with some of my friends. I couldn't not take a photo in front of this body of water when we had stopped" +
        " at the perfect angle.", "This photo marks a very specific occasion to me. It was the time where I got lost on the way back from a one way trailhead. " +
        "This was probably one of the scariest moments of my life. The sun had went down while I was retracing my steps to find my way back to the car. With no " +
        "phone service and water left, I was in a frenzy of thoughts until I eventually found the returning route 2 hours after sundown. What an experience."]
const imgDates = ['December 6th, 2021', 'January 9th, 2022', 'January 25th, 2022', 'February 3rd, 2022', 'February 23rd, 2022', 'Oct 6th, 2022']

export default Content;