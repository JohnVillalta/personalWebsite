import React from 'react'
import './allCss/closeout.css'
import {ReactComponent as X} from './close_white_24dp.svg'
import { useNavigate } from 'react-router-dom';

const CloseOut = () => {
    const navigate = useNavigate();

    function goBack() {
        navigate("../", {replace: true});
    }

    function makeBlurry() {
        document.getElementById("nav").style.filter = "none";
        document.getElementById("mainContentPage").style.filter = "none";
    }

    return (
        <div>
            <X id="Close" onClick = {() => {goBack(); makeBlurry();}}/>
        </div>
    );
};

export default CloseOut;