import React from 'react'
import './closeout.css'
import {ReactComponent as X} from './close_white_24dp.svg'
import { useNavigate } from 'react-router-dom';

const CloseOut = ({ match, destination }) => {
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

    const navigate = useNavigate();

    function goBack() {
        navigate("../", {replace: true});
    }

    return (
        <div>
            <X id="Close" onClick = {() => {makeBlurry(); goBack()}}/>
        </div>
    );
};

export default CloseOut;