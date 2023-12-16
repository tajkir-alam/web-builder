import Image from 'next/image';
import React from 'react';

const SectionContainer = () => {
    return (
        <>
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
        </>
    );
};

export default SectionContainer;