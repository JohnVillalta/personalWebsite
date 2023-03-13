import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect'

const Home = () => {
    return (
        <div className=" m-2 p-2">
            <div className="flex-col justify-start">
                <img className="rounded-full w-[25%] my-8 mx-auto drop-shadow-[5px_5px_5px_rgba(0,0,0,0.4)]" src={require('../components/Images/profPic.png')}/>
                <h1 className="w-[100%] text-center text-[150%]">John Villalta</h1>
                <div className="mt-[10px]">
                    <TypeWriterEffect 
                        textStyle={{
                            color: '#000000',
                            textAlign: 'center'
                        }}
                        multiText={[
                            'Aspiring FullStack Developer',
                            'Lightweight Photographer',
                            'Music Hobbyist',
                            'Fitness Nut'
                        ]}
                        multiTextDelay={1000}
                        multiTextLoop='true'
                    />
                </div>
            </div>  
            <div className="w-[50%] mx-auto drop-shadow-md bg-[#f7f5f0]">
                <p className="w-[90%] text-[120%] text-center mx-auto py-[2vh] mt-[5vh]">There is too much demand for perfection and a lack of explicitness when seeking a career in tech.
                    Why not spice up life with other interests? Check out mine!</p>
            </div>
        </div>
    );
};

export default Home;