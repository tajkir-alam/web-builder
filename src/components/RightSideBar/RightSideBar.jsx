"use client";
import React, { useRef, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import ReactQuill from 'react-quill';
import './TextEditor.css';


const RightSideBar = () => {
    const [showComponents, setShowComponents] = useState(true);
    const [value, setValue] = useState('');

    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };


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
                className='mt-4 min-h-[250px] h-auto bg-[#2F3031] border border-[#575757] rounded'
            />

            <div>
                <div className='flex '>
                    <p>Inline Text Editing</p>
                    <div className="flex items-center justify-center">
                        <button
                            onClick={handleToggle}
                            className={`relative w-12 h-6 rounded-full focus:outline-none transition-transform duration-300 transform ${isToggled ? 'bg-green-500' : 'bg-gray-300'
                                }`}
                        >
                            <div
                                className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md duration-300 ${isToggled ? 'translate-x-[calc(100%+12px)]' : 'translate-x-1'
                                    }`}
                            />
                        </button>
                    </div>
                </div>
                <p className='text-sm text-[#707070]'>
                    Allow rich text editing inline on the page by double clicking on text blocks.
                </p>
            </div>
        </div>
    );
};

export default RightSideBar;