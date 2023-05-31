import React from 'react'
import './allCss/img.css'
import ImageNavBar from './imgbar'
import CloseOut from './closeout'
<<<<<<< HEAD
//import { useHistory  } from 'react-router-dom'
=======
>>>>>>> d18ff57b98ba099aa56f40ca54337a25dd31b43d

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