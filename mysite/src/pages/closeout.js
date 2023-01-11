import React from 'react'
import './allCss/closeout.css'
import {ReactComponent as X} from './close_white_24dp.svg'
import { useNavigate } from 'react-router-dom';

<<<<<<< HEAD
const CloseOut = () => {
=======
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

>>>>>>> c6835db33b2eb4ced914a3a91b37c17d77624396
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
<<<<<<< HEAD
            <X id="Close" onClick = {() => {goBack(); makeBlurry();}}/>
=======
            <X id="Close" onClick = {() => {makeBlurry(); goBack()}}/>
>>>>>>> c6835db33b2eb4ced914a3a91b37c17d77624396
        </div>
    );
};

export default CloseOut;