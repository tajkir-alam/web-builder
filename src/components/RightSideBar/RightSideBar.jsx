"use client";
import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const RightSideBar = () => {
    const [showComponents, setShowComponents] = useState(true);
    const [value, setValue] = useState('');


    return (
        <div className='primary-bg h-screen py-[25px] px-[15px] overflow-hidden'>
            <div className='mb-4 flex items-center justify-between'>
                <h5>Basic Components</h5>
                <button onClick={() => setShowComponents(!showComponents)}>
                    <HiChevronDown className={`${showComponents ? 'rotate-0' : 'rotate-180'} duration-300`} />
                </button>
            </div>
            <h6 className='text-[#918f8f] text-sm'>Text *</h6>

            <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
    );
};

export default RightSideBar;