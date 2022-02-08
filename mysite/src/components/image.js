import React from 'react';
import './image.css'

function Image(props) {
    return (
        <div style = {{display: 'inline-block', textAlign: 'center', width: '33vw'}}>
            <img src= {props.add} alt= 'image'/> 
            <p>{props.text}</p>

        </div>
    );
};

export default Image;