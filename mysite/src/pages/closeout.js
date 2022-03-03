import React from 'react'
import './closeout.css'
import {ReactComponent as X} from './close_white_24dp.svg'
import { useNavigate } from 'react-router-dom';

const CloseOut = ({ match, destination }) => {
    const navigate = useNavigate();

    function goBack() {
        navigate("../", {replace: true});
    }

    return (
        <div>
            <X id="Close" onClick = {goBack}/>
        </div>
    );
};

export default CloseOut;