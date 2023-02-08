import React from 'react'
import {ReactComponent as X} from './close_white_24dp.svg'
import { useNavigate } from 'react-router-dom';
import { Dialog } from '@headlessui/react'

const CloseOut = ({ isShowing, setIsShowing, propRef }) => {
    function closeModal() {
        propRef.current.classList.remove("blurryBoi")
        setIsShowing(false);
    }

    return (
        <Dialog open={isShowing} as="div" onClose={closeModal}>
            <X className="fixed top-[15px] left-[15px] w-[75px] h-[75px]" id="Close" onClick={() => {closeModal()}}/>
        </Dialog>
    );
};

export default CloseOut;