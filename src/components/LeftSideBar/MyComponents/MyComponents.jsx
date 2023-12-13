"use client";
import React, { useState } from 'react';
import { HiChevronDown, HiPhoto } from 'react-icons/hi2';

const MyComponents = () => {
    const [showComponents, setShowComponents] = useState(true);

    return (
        <>
            <div className='mb-4 flex items-center justify-between'>
                <h5>My Components</h5>
                <button onClick={() => setShowComponents(!showComponents)}>
                    <HiChevronDown className={`${showComponents ? 'rotate-0' : 'rotate-180'} duration-300`} />
                </button>
            </div>
            <div className={`${showComponents ? '' : '-translate-y-16 opacity-0 invisible'} grid grid-cols-3 gap-[6px] duration-300`}>
                <div className="bg-[#3e3f41] hover:bg-[#4f5053] rounded flex flex-col items-center py-3 cursor-pointer">
                    <HiPhoto />
                    <p className='text-xs whitespace-nowrap mt-2'>Hero</p>
                </div>
                <div className="bg-[#3e3f41] hover:bg-[#4f5053] rounded flex flex-col items-center py-3 cursor-pointer">
                    <HiPhoto />
                    <p className='text-xs whitespace-nowrap mt-2'>Button</p>
                </div>
                <div className="bg-[#3e3f41] hover:bg-[#4f5053] rounded flex flex-col items-center py-3 cursor-pointer">
                    <HiPhoto />
                    <p className='text-xs whitespace-nowrap mt-2'>Search bar</p>
                </div>
                <div className="bg-[#3e3f41] hover:bg-[#4f5053] rounded flex flex-col items-center py-3 cursor-pointer">
                    <HiPhoto />
                    <p className='text-xs whitespace-nowrap mt-2'>Container</p>
                </div>
            </div>
        </>
    );
};

export default MyComponents;