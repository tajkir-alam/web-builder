import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const GoBackBtn = ({ handleFlip }) => {
    return (
        <div className='text-center mt-5'>
            <button
                onClick={handleFlip}
                className='bg-[#F1614A] py-[10px] px-[20px] text-[13px] hover:bg-[#F1994D] duration-100 rounded-md'
            >
                <AiOutlineArrowLeft className='font-semibold text-lg mr-2 inline' />
                Go Back
            </button>
        </div>
    );
};

export default GoBackBtn;