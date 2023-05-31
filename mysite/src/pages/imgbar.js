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
    
    function closeModal() {
        setIsShowing(false);
    }

    return (
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
    );
};

export default ImageNavBar;