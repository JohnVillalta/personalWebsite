import React from 'react'
import './allCss/img.css'
import ImageNavBar from './imgbar'
import CloseOut from './closeout'

const ImageTemplate = (props) => {
     
    //let history = useHistory();


    return (
        <div id= "back">
            <CloseOut/>
            <img id= "photo" src= {props.add}/>
            <h1 id = "photoDesc">{props.desc}</h1>
            <ImageNavBar id="PicBar" desc = {props.desc}/>
        </div>
    );
};

export default ImageTemplate;