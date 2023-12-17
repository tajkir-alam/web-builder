import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const GoBackBtn = ({ handleFlip }) => {
    return (
        <button
            onClick={handleFlip}
            className='bg-[#474747] hover:bg-[#3b3a3a] duration-100 rounded-full p-1 ml-2'
        >
            <AiOutlineArrowLeft className='font-semibold text-xl' />
            {/* Go Back */}
        </button>
    );
};

export default GoBackBtn;