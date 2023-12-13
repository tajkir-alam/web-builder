"use client";
import React, { useRef, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import ReactQuill from 'react-quill';
import './TextEditor.css';


const RightSideBar = () => {
    const [showComponents, setShowComponents] = useState(true);
    const [value, setValue] = useState('');

    console.log(value);

    const toolbarOptions = [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline'],
        [{ 'color': [] }, { 'background': [] }],

        [{ 'list': 'ordered' }, { 'list': 'bullet' }],

        [{ 'size': ['small', false, 'large', 'huge'] }],

        [{ 'font': [] }],
        [{ 'align': [] }],
        ['image'],
        ['link'],
        ['clean']
    ];

    const modules = {
        toolbar: toolbarOptions,
    };

    return (
        <div className='primary-bg h-screen py-[25px] px-[15px] overflow-hidden'>
            <div className='mb-4 flex items-center justify-between'>
                <h5>Basic Components</h5>
                <button onClick={() => setShowComponents(!showComponents)}>
                    <HiChevronDown className={`${showComponents ? 'rotate-0' : 'rotate-180'} duration-300`} />
                </button>
            </div>
            <h6 className='text-[#918f8f] text-sm'>Text *</h6>

            <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                modules={modules}
                className='mt-4 min-h-[250px] h-auto bg-[#2F3031] border border-[#575757] rounded' />
        </div>
    );
};

export default RightSideBar;