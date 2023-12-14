import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { HiPhoto } from 'react-icons/hi2';

const HeroComponents = ({ handleFlip }) => {
    return (
        <>
            <div onClick={handleFlip} className="bg-[#3e3f41] hover:bg-[#4f5053] rounded flex flex-col items-center py-3 cursor-pointer">
                <HiPhoto />
                <p className='text-xs whitespace-nowrap mt-2'>Search bar</p>
            </div>
            <div className="bg-[#3e3f41] hover:bg-[#4f5053] rounded flex flex-col items-center py-3 cursor-pointer">
                <HiPhoto />
                <p className='text-xs whitespace-nowrap mt-2'>Container</p>
            </div>

            {/* this is for go back to front part again */}
            <div className='text-center mt-5'>
                <button
                    onClick={handleFlip}
                    className='bg-[#F1614A] py-[10px] px-[20px] text-[13px] hover:bg-[#F1994D] duration-100 rounded-md'
                >
                    <AiOutlineArrowLeft className='font-semibold text-lg mr-2 inline' />
                    Go Back
                </button>
            </div>
        </>
    );
};

export default HeroComponents;