import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCount, increaseCount } from '@/redux/features/sectionCount/sectionCountSlice';
import { AiOutlinePlus } from 'react-icons/ai';
import SectionContainer from './SectionContainer';

const MainBody = ({ value }) => {
    const sections = useSelector((state) => state.sectionCount.sections);
    const dispatch = useDispatch();

    const sanitizedHTML = (html) => {
        return { __html: html };
    };

    return (
        <section className="secondary-bg py-[50px] px-[80px]">
            <h4 className='bg-[#2B2B2B] rounded-md text-sm mb-8 py-3 ps-4'>Desktop</h4>

            <p dangerouslySetInnerHTML={sanitizedHTML(value)}></p>

            {/* Sections */}
            {
                sections.map((section) =>
                    <div key={section._id} className='my-8 relative w-full h-96 group border-[3px] border-transparent hover:border-gray-400 duration-300'>
                        <SectionContainer
                            dispatch={dispatch}
                            decreaseCount={decreaseCount}
                            _id={section._id}
                        />
                    </div>
                )
            }

            {/* Add Section container */}
            <div className='relative border border-[#5D96FF] h-36 w-full rounded-sm'>
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