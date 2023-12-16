import { increaseCount } from '@/redux/features/sectionCount/sectionCountSlice';
import Image from 'next/image';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

const MainBody = ({ value }) => {
    const sectionCount = useSelector((state) => state.sectionCount.value);
    const dispatch = useDispatch();

    const sanitizedHTML = (html) => {
        return { __html: html };
    };

    return (
        <section className="secondary-bg py-[50px] px-[80px]">
            <h4 className='bg-[#2B2B2B] rounded-md text-sm py-3 ps-4'>Desktop</h4>

            {/* Sections */}
            {
                [...Array(sectionCount)].map((_, index) =>
                    <div key={index} className='my-8 relative w-full h-96'>
                        <Image
                            alt='Hero'
                            layout='fill'
                            src='/ComponentsBannerImg/banner1.png'
                        />

                        <div className='absolute'>
                            <h6 className='capitalize'>gift guide</h6>
                            <h3>Here’s to Joy</h3>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                            </p>
                            <button>
                                Shop Gifts
                            </button>
                        </div>
                    </div>
                )
            }


            {/* Add Section container */}
            <div>
                <p dangerouslySetInnerHTML={sanitizedHTML(value)}></p>
                <div className='relative border border-[#5D96FF] h-36 w-full rounded-sm'>
                    <button onClick={() => dispatch(increaseCount())} className='absolute -top-4 right-4 p-2 bg-[#5D96FF] rounded-full hover:bg-[#719df0] duration-200'>
                        <AiOutlinePlus />
                    </button>

                    <button onClick={() => dispatch(increaseCount())} className='absolute inset-1/2 -translate-x-1/2 -translate-y-1/3 w-fit h-fit whitespace-nowrap flex items-center gap-2 py-2 px-4 bg-[#5D96FF] rounded hover:bg-[#719df0] duration-200'>
                        <AiOutlinePlus />
                        Add Block
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MainBody;