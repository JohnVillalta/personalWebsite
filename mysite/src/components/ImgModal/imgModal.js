import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';
import './css/imgModal.css'
import CloseOut from './closeout'
import ImageNavBar from '../../pages/imgbar'

const ImageModal = (props) => {
    const navigate = useNavigate();
    let [isOpen, setIsOpen] = useState(true)

    function goBack() {
        navigate("../", {replace: true});
    }

    function makeBlurry() {
        document.getElementById("nav").style.filter = "none";
        document.getElementById("mainContentPage").style.filter = "none";
    }
    
    return (
        <div class="finalDiv">
                <Dialog open={isOpen} onClose={() => {setIsOpen(false); goBack(); makeBlurry();}} id="back">
                    <Dialog.Panel>
                        {/*This panel includes the closeout x, the selected photo, and its text*/}

                        <CloseOut />
                        <img id= "photo" src= {props.add} alt="usedImg"/>
                        <div id="photoProps">
                            <p>{props.text}</p>
                            <button onClick={() => {setIsOpen(false); goBack(); makeBlurry();}} id="goBackButt">Go Back!</button>
                        </div>
                    </Dialog.Panel>
                </Dialog>
                <Dialog open={isOpen} onClose={() => {setIsOpen(false); goBack(); makeBlurry();}}>
                    <Dialog.Panel>
                        {/*This panel includes the entire rightside navbar, scrollable and linkable to the next*/}
                        <ImageNavBar id="PicBar"/>
                    </Dialog.Panel>
                </Dialog>
        </div>
    )
};

export default ImageModal;