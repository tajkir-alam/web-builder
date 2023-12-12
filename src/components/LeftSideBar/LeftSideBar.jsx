import React from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const LeftSideBar = () => {
    return (
        <div className='col-span-2 primary-bg h-screen py-[25px] px-[15px]'>
            <div className='relative'>
                <input
                    type="text"
                    placeholder='Search...'
                    className='max-w-full bg-[#333333] rounded-md outline-none py-[4px] px-[10px]'
                />
                <button className='absolute right-2 top-2 active:scale-90 duration-200'>
                    <HiMagnifyingGlass />
                </button>

                <hr className='my-[26px] border-[#797979]' />

            </div>
        </div>
    );
};

export default LeftSideBar;