import React, { Fragment } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import './css/imgModal.css'

const ImageModal = ({add, text, date, which, isShowing, setIsShowing, propRef}) => {
    const transitionVar = {
        enter:" transition duration-250 sm:duration-450 ease-out",
        enterFrom:"transform scale-95 opacity-0",
        enterTo:"transform scale-100 opacity-100",
        leave:"transition duration-250 sm:duration-450 ease-out",
        leaveFrom:"transform scale-100 opacity-100",
        leaveTo:"transform scale-95 opacity-0",
    };
    
    function closeModal() { 
        propRef.current.classList.remove("blurryBoi")
        setIsShowing(false);
    }

    return (
        <Transition show={isShowing} as={Fragment}>
            <div className="fixed top-0 bg-black/10 h-[100%] w-[100%]">
                <Dialog className="fixed top-0 w-full h-full" as="div" onClose={closeModal} id="back">
                    <Transition.Child as={Fragment} {...transitionVar}>
                        <Dialog.Panel>
                            {/*This panel includes the closeout x, the selected photo, and its text*/}
                            <img id= "photo" src={add[which]} alt="usedImg"/>
                            <div id="photoProps">
                                <p id="pDesc">{text[which]}</p>
                                <p id="pDate">{date[which]}</p>
                                <button onClick={closeModal} id="goBackButt">Go Back!</button>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </div>
        </Transition>
    )
};

export default ImageModal;