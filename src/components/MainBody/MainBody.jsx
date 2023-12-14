import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const MainBody = () => {
    return (
        <section className=" secondary-bg  py-[50px] px-[80px]">
            <h4 className='bg-[#2B2B2B] rounded-md text-sm py-3 ps-4'>Desktop</h4>

            <div className="mt-8">

                <button className='relative border border-[#5D96FF] h-36 w-full rounded-sm'>
                    <div className='absolute -top-4 right-4 p-2 bg-[#5D96FF] rounded-full hover:bg-[#719df0] duration-200'>
                    <AiOutlinePlus />
                    </div>
                </button>

            </div>
        </section>
    );
};

export default MainBody;