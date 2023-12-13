"use client";
import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';

const RightSideBar = () => {
    const [showComponents, setShowComponents] = useState(true);

    return (
        <div className='primary-bg h-screen py-[25px] px-[15px]'>
            <div className='mb-4 flex items-center justify-between'>
                <h5>Basic Components</h5>
                <button onClick={() => setShowComponents(!showComponents)}>
                    <HiChevronDown className={`${showComponents ? 'rotate-0' : 'rotate-180'} duration-300`} />
                </button>
            </div>
            <h6 className='text-[#918f8f] text-sm'>Text *</h6>
        </div>
    );
};

export default RightSideBar;