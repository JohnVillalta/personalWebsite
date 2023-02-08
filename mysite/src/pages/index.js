import React from 'react';

const Home = () => {
    return (
        <div className="border-2 border-[#496e46] m-2 p-2 h-100 flex-col">
            <div className="flex-col justify-start">
                <h1>John Villalta</h1>
                <p>Aspiring Full Stack Developer</p>
                <p>Lightweight Photographer</p>
                <p>Music Hobbyist</p>
                <p>Fitness Nut</p>
            </div>
            <img src="../components/Images/profPic.png"></img>
            <div className="flex justify-end">
                <p className="w-60">There is too much demand for perfection and a lack of explicitness when seeking a career in tech. Why not spice up life with
                     other interest? Check out mine!</p>
            </div>
        </div>
    );
};

export default Home;