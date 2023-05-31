import React from 'react';
import './home.css'
import Image from '../components/image'
import John from '../components/Images/John.jpg'

const About = () => {
    return (
        <div id="main">
            <div id="imageDiv">
                <img src = {John}></img>
            </div>
            <div id="headerDiv">
                <h1>Hey there, my name's John Villalta. I'm currently a student studying Computer Science and Engineering at The University of California, Merced. 
                    My career objective is to find a position at a company that sustains a strong work family and provides excellent learning experiences to new
                    programers in the work field.</h1>
            </div>
        </div>
    );
};

export default About;