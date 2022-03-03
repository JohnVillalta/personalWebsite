import React from 'react'
import './img.css'
import ImageNavBar from './imgbar'
import CloseOut from './closeout'
//import {useHistory  } from 'react-router-dom'

const ImageTemplate = (props) => {
    var [toggle, settoggle] = React.useState(1) 
    //let history = useHistory();

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
            <CloseOut onClick={makeBlurry}/>
            <img id= "photo" src= {props.add}/>
            <ImageNavBar id="PicBar"/>
        </div>
    );
};

export default ImageTemplate;