import React, { useMemo, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import useToggleMenu from '@/hooks/useToggleMenu/useToggleMenu';
import dynamic from 'next/dynamic';
import './TextEditor.css';

// import Quill from 'quill';
import { Quill } from 'react-quill';
window.Quill = Quill;
import ImageResize from 'quill-image-resize-module-react';
Quill.register('modules/imageResize', ImageResize);



const RightSideBar = ({ value, setValue }) => {
    const { showComponents, componentsHidden, showComponentMenu } = useToggleMenu();

    // ReactQuill preventing from server-side-rendering 
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

    // toggle btn
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
        imageResize: {
            parchment: Quill.import('parchment'),
            modules: ['Resize', 'DisplaySize']
        }
    };

    return (
        <div className='primary-bg h-screen py-[25px] px-[15px] overflow-hidden'>
            <div className='mb-4 flex items-center justify-between'>
                <h5>Basic Components</h5>
                <button onClick={showComponentMenu}>
                    <HiChevronDown className={`${showComponents ? 'rotate-0' : 'rotate-180'} duration-300`} />
                </button>
            </div>

            <section className={`${!showComponents && '-translate-y-16 opacity-0 invisible'} ${componentsHidden && 'hidden'} translate-y-0 duration-300`}>
                <h6 className='text-[#918f8f] text-sm'>Text *</h6>
                <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={setValue}
                    modules={modules}
                    className='mt-4 min-h-[250px] h-auto bg-[#2F3031] border border-[#575757] rounded'
                />
            </section>

            <div className='mt-[26px] space-y-4'>
                <div className='flex items-center justify-between'>
                    <p>Inline Text Editing</p>
                    <div className="flex items-center justify-center">
                        <button
                            onClick={handleToggle}
                            className={`relative w-10 h-5 rounded-full focus:outline-none transition-transform duration-300 transform ${isToggled ? 'bg-green-500' : 'bg-gray-300'
                                }`}
                        >
                            <div
                                className={`absolute top-1 w-3 h-3 bg-white rounded-full shadow-md duration-300 ${isToggled ? 'translate-x-[calc(100%+12px)]' : 'translate-x-1'
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