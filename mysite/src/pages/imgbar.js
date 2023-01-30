import React, { Fragment } from 'react'
import { NavLink as Link, Routes, Route } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars'
import { Dialog, Transition } from '@headlessui/react'

const ImageNavBar = ({ isShowing, setIsShowing, imgAdds, which }) => {
    var imageDesc = ["This is description 1", "This is description 2", "This is description 3"]

    const transitionVar = {
        enter: 'transform transition ease-in-out duration-400 sm:duration-500',
        enterFrom: 'translate-x-full',
        enterTo: 'translate-x-0',
        leave: 'transform transition ease-in-out duration-400 sm:duration-500',
        leaveFrom: 'translate-x-0',
        leaveTo: 'translate-x-full',
    };
    
    function closeModal() {
        setIsShowing(false);
    }

    return (
        <Transition show={isShowing} as={Fragment} {...transitionVar}>
            <Dialog onClose={closeModal} className="fixed top-0 right-0 h-[100%] w-[500px]" id="wrapDiv">
                    <Scrollbars>
                        <div className="grid grid-cols-1 gap-y-[25px] bg-black/30 px-[5%]" id="images"> 
                            {[...Array(6)].map((el, i) => (
                                <div onClick={() => {/*openModal(); setWhichImg(i)*/}}>
                                    <img className="object-cover w-[450px] h-[450px]" src={imgAdds[i]}/>
                                </div>
                            ))}  
                        </div>
                    </Scrollbars>
            </Dialog>
        </Transition>

        
    );
};

const imgAdds = [require('../components/Images/cc1.png'), require('../components/Images/cc2.png'), require('../components/Images/cc3.png'), 
    require('../components/Images/cc4.png'), require('../components/Images/cc5.png'), require('../components/Images/cc6.png')]
export default ImageNavBar;