import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCount, increaseCount } from '@/redux/features/sectionCount/sectionCountSlice';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi2';

const MainBody = ({ value }) => {
    const sections = useSelector((state) => state.sectionCount.sections);
    const dispatch = useDispatch();

    const sanitizedHTML = (html) => {
        return { __html: html };
    };

    return (
        <section className="secondary-bg py-[50px] px-[80px]">
            <h4 className='bg-[#2B2B2B] rounded-md text-sm py-3 ps-4'>Desktop</h4>

            {/* Sections */}
            {
                sections.map((section) =>
                    <div key={section._id} className='my-8 relative w-full h-96 group border-[3px] border-transparent hover:border-gray-400 duration-300'>
                        <Image
                            alt='Hero'
                            layout='fill'
                            src='/ComponentsBannerImg/banner1.png'
                        />
                        
                        <div className='absolute text-center inset-y-1/4 w-2/5 left-[30%]'>
                            <h6 className='capitalize text-[13.412px] text-[#69764A] font-semibold'>gift guide</h6>
                            <h3 className='text-[36.224px] text-[#536136] font-bold'>Here’s to Joy</h3>
                            <p className='text-[8.567px] text-[#7A8365] mb-[16px]'>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                            </p>
                            <button className='bg-[#536136] hover:bg-[#627241] py-[6px] text-sm px-[14px] rounded capitalize duration-300 active:scale-95'>
                                Shop Gifts
                            </button>
                        </div>

                        {/* Section remove button */}
                        <button
                            onClick={() => dispatch(decreaseCount(section._id))}
                            className='absolute -top-4 right-4 text-xl p-2 bg-[#F1614A] rounded-full hover:bg-[#719df0] opacity-0 group-hover:opacity-100 duration-300'>
                            <HiOutlineTrash />
                        </button>
                    </div>
                )
            }


            {/* Add Section container */}
            <div>
                <p dangerouslySetInnerHTML={sanitizedHTML(value)}></p>
                <div className='relative border border-[#5D96FF] h-36 w-full rounded-sm'>
                    <button onClick={() => dispatch(increaseCount())} className='absolute -top-4 right-4 p-2 bg-[#5D96FF] rounded-full hover:bg-[#719df0] duration-300'>
                        <AiOutlinePlus />
                    </button>

                    <button onClick={() => dispatch(increaseCount())} className='absolute inset-1/2 -translate-x-1/2 -translate-y-1/3 w-fit h-fit whitespace-nowrap flex items-center gap-2 py-2 px-4 bg-[#5D96FF] rounded hover:bg-[#78a0e9] duration-200'>
                        <AiOutlinePlus />
                        Add Block
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MainBody;