import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TypeWriterEffect from 'react-typewriter-effect'
import tri1Pic from '../components/Home/tri1.png'
import tri2Pic from '../components/Home/tri2.png'
import tri3Pic from '../components/Home/tri3.png'
import tri4Pic from '../components/Home/tri4.png'
import tri5Pic from '../components/Home/tri5.png'
import tri6Pic from '../components/Home/tri6.png'
import tri7Pic from '../components/Home/tri7.png'
import tri8Pic from '../components/Home/tri8.png'

const Home = () => {
    return (
        <div className=" m-2 p-2 flex">
            <Parallax pages={1.2} style={{ top: '85px', left: '0'}} class='animation'>
                <ParallaxLayer offset={0} speed={0.1} className="-z-1">
                    <img class="animation_layer parallax" src={tri1Pic}/>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.2} className="-z-1">
                    <img class="animation_layer parallax" src={tri2Pic}/>
                </ParallaxLayer>
                <ParallaxLayer offset={0.2} speed={0.1} className="-z-1">
                    <img class="animation_layer parallax" src={tri3Pic}/>
                </ParallaxLayer>
                <ParallaxLayer offset={0.43} speed={0.4} className="-z-1">
                    <img class="animation_layer parallax" src={tri4Pic}/>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.3} className="-z-1">
                    <img class="animation_layer parallax" src={tri5Pic}/>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.4} className="-z-1">
                    <img class="animation_layer parallax" src={tri6Pic}/>
                </ParallaxLayer>
                <ParallaxLayer offset={.45} speed={0.45} className="-z-1">
                    <img class="animation_layer parallax" src={tri7Pic}/>
                </ParallaxLayer>
                <ParallaxLayer offset={0.2} speed={0.2} className="-z-1">
                    <img class="animation_layer parallax" src={tri8Pic}/>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.6} className="z-1">
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
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};

export default Home;