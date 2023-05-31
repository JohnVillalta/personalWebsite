<<<<<<< HEAD
import React from 'react'
import './imgbar.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {NavLink as Link} from 'react-router-dom'
import toad from '../components/Images/toadhat.jpg'
import zoro from '../components/Images/zoro.png'
import flute from '../components/Images/flute.jpg'
import sus from '../components/Images/sus.jpg'
import link from '../components/Images/link.jpg'
import joaquin from '../components/Images/joaquin.jpg'
import cut from '../components/Images/cut.jpg'
import { Scrollbars } from "react-custom-scrollbars"

const ImageNavBar = (props) => {
    // var imageDesc = ["This is description 1", "This is description 2", "This is description 3"]
=======
import React, { Fragment } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Dialog, Transition } from '@headlessui/react'

const ImageNavBar = ({ isShowing, setIsShowing, imgAdds, setWhichImg }) => {
    const transitionVar = {
        enter: 'transform transition ease-in-out duration-400 sm:duration-500',
        enterFrom: 'translate-x-full',
        enterTo: 'translate-x-0',
        leave: 'transform transition ease-in-out duration-400 sm:duration-500',
        leaveFrom: 'translate-x-0',
        leaveTo: 'translate-x-full',
    };
>>>>>>> d18ff57b98ba099aa56f40ca54337a25dd31b43d
    
    function closeModal() {
        setIsShowing(false);
    }

    return (
<<<<<<< HEAD
        <div id="wrapDiv">
            <Scrollbars style = {{width: "100%", height: "100%"}}>
                <Link to = "../image1" activestyle><img class = "navImg" src = {toad}/></Link>
                <Link to = "../image2" activestyle><img class = "navImg" src = {zoro}/></Link>
                <Link to = "../image3" activestyle><img class = "navImg" src = {flute}/></Link>
                <Link to = "../image4" activestyle><img class = "navImg" src = {sus}/></Link>
                <Link to = "../image5" activestyle><img class = "navImg" src = {link}/></Link>
                <Link to = "../image6" activestyle><img class = "navImg" src = {joaquin}/></Link>
                <Link to = "../image7" activestyle><img class = "navImg" src = {cut}/></Link>

                <Routes>
                    <Route path='../image1'/>
                    <Route path='../image2'/>
                    <Route path='../image3'/>
                    <Route path='../image4'/>
                    <Route path='../image5'/>
                    <Route path='../image6'/>
                    <Route path='../image7'/>
                </Routes>
            </Scrollbars>
        </div>

        
=======
        <Transition show={isShowing} as={Fragment} {...transitionVar}>
            <Dialog onClose={closeModal} className="fixed top-0 right-0 h-[100%] w-[500px]" id="wrapDiv">
                <Scrollbars>
                    <div className="grid grid-cols-1 gap-y-[25px] bg-black/30 px-[5%] py-[5%]" id="images"> 
                        {[...Array(6)].map((el, i) => (
                            <div onClick={() => {setWhichImg(i)}}>
                                <img className="object-cover w-[450px] h-[450px]" src={imgAdds[i]}/>
                            </div>
                        ))}  
                    </div>
                </Scrollbars>
            </Dialog>
        </Transition>
>>>>>>> d18ff57b98ba099aa56f40ca54337a25dd31b43d
    );
};

export default ImageNavBar;