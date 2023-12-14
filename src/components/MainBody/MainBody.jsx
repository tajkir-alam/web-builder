import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const MainBody = ({ value }) => {
    const sanitizedHTML = (html) => {
        return { __html: html };
    };

    return (
        <section className=" secondary-bg  py-[50px] px-[80px]">
            <h4 className='bg-[#2B2B2B] rounded-md text-sm py-3 ps-4'>Desktop</h4>

            <div className="mt-8">
                <p dangerouslySetInnerHTML={sanitizedHTML(value)}></p>
                <div className='relative border border-[#5D96FF] h-36 w-full rounded-sm'>
                    <button className='absolute -top-4 right-4 p-2 bg-[#5D96FF] rounded-full hover:bg-[#719df0] duration-200'>
                        <AiOutlinePlus />
                    </button>

                    <button className='absolute inset-1/2 -translate-x-1/2 -translate-y-1/3 w-fit h-fit whitespace-nowrap flex items-center gap-2 py-2 px-4 bg-[#5D96FF] rounded hover:bg-[#719df0] duration-200'>
                        <AiOutlinePlus />
                        Add Block
                    </button>
                </div>

            </div>
        </section>
    );
};

export default MainBody;