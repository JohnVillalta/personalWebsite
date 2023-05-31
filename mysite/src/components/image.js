import React from 'react';

function Image(props) {
    return (
        <div className="flex flex-col items-center text-center">
            <img className="object-cover w-[450px] h-[450px]" src={props.add} alt='image'/> 
            <p>{props.text}</p>
        </div>
    );
};

export default Image;