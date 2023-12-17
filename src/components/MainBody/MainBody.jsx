import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount } from '@/redux/features/sectionCount/sectionCountSlice';
import { AiOutlinePlus } from 'react-icons/ai';
import SectionContainer from './SectionContainer';
import { updateBannerImgSrc } from '@/redux/features/heroBannerImg/heroBannerImgSlice';

const MainBody = () => {
    const dispatch = useDispatch();
    const { sections } = useSelector((state) => state.sectionCount);
    const { textValue } = useSelector((state) => state.textEditor);
    const [isDraggingOver, setIsDraggingOver] = useState(false);        // -------> This is for dragging border effect. Not working after deployment but works on local.

    const sanitizedHTML = (html) => {
        return { __html: html };
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const draggedItem = e.dataTransfer.getData('application/json');
        const parseDraggedItem = JSON.parse(draggedItem);

        if (parseDraggedItem.path?.includes('ComponentsBannerImg')) {
            dispatch(updateBannerImgSrc(parseDraggedItem.path));
        }
      
        
        if (draggedItem === 'button1') {
            console.log(draggedItem);
            return;
        }

        setIsDraggingOver(false);
    }

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDraggingOver(true);
    }

    const handleDragLeave = () => {
        setIsDraggingOver(false);
    }

    return (
        <section className="secondary-bg py-[50px] px-[80px]">
            <h4 className='bg-[#2B2B2B] rounded-md text-white text-sm mb-8 py-3 ps-4'>Desktop</h4>

            <p dangerouslySetInnerHTML={sanitizedHTML(textValue)} className='my-8'></p>

            {/* Sections */}
            {
                sections.map((section) =>
                    <div
                        key={section._id}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        className={`relative w-full h-96 group border-[3px] border-transparent hover:border-gray-400 duration-300 ${isDraggingOver && 'border border-gray-400'}`}
                    >
                        <SectionContainer
                            _id={section._id}
                        />
                    </div>
                )
            }

            {/* Add Section container */}
            <div className='relative border border-[#5D96FF] h-36 w-full rounded-sm text-white'>
                <button onClick={() => dispatch(increaseCount())} className='absolute -top-4 right-4 p-2 bg-[#5D96FF] rounded-full hover:bg-[#719df0] duration-300'>
                    <AiOutlinePlus />
                </button>

                <button onClick={() => dispatch(increaseCount())} className='absolute inset-1/2 -translate-x-1/2 -translate-y-1/3 w-fit h-fit whitespace-nowrap flex items-center gap-2 py-2 px-4 bg-[#5D96FF] rounded hover:bg-[#78a0e9] duration-200'>
                    <AiOutlinePlus />
                    Add Block
                </button>
            </div>
        </section>
    );
};

export default MainBody;