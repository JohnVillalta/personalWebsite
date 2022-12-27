import React from 'react'
import './allCss/img.css'
import ImageNavBar from './imgbar'
import CloseOut from './closeout'

const ImageTemplate = (props) => {
    return(
        <div id= "back">
            <CloseOut />
            <img id= "photo" src= {props.add}/>
            <ImageNavBar id="PicBar"/>
        </div>
    );
};

export default ImageTemplate;