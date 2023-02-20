import React from 'react';

const Home = () => {
    return (
        <div className="border-2 border-[#496e46] m-2 p-2 flex">
            <div className="flex-auto flex-col justify-start">
                <h1 class="stripe_inner">John Villalta</h1>
                <p>Aspiring Full Stack Developer</p>
                <p>Lightweight Photographer</p>
                <p>Music Hobbyist</p>
                <p>Fitness Nut</p>
            </div>
            <img className="flex-1 rounded-full w-[40%] my-8"src={require('../components/Images/profPic.png')}/>
            <div className="flex-auto">
                <div className="flex items-end">
                    <p className="w-60 text-justify bg-slate-500 ">There is too much demand for perfection and a lack of explicitness when seeking a career in tech. Why not spice up life with
                        other interest? Check out mine!</p>
                </div>
            </div>
        </div>
    );
};

export default Home;