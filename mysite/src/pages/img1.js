import React from 'react'
import './img.css'
import {ReactComponent as CloseOut} from './close_white_24dp.svg'

const ImageTemplate = (props) => {
    var [toggle, settoggle] = React.useState(1) 

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
        <div id= "back">
            <CloseOut id="CloseOut"}/>
            <img id= "photo" src= {props.add} onClick = {makeBlurry}/>
            <h1>This is the description for Image 1</h1>
        </div>
    );
};

export default ImageTemplate;