import React from 'react';
import { HiArrowUturnLeft, HiArrowUturnRight, HiOutlineEye } from "react-icons/hi2";

const Header = () => {
    return (
        <header className='primary-bg text-white ps-[26px] font-semibold flex justify-between items-center border-b border-b-[#575757]'>
            <h3>Titans Web Builder</h3>
            <div className='hidden md:flex items-center space-x-6'>
                <div className='flex items-center space-x-3 text-[#c5c5c5] text-lg'>
                    <button className='hover:text-[#ecebeb]'><HiArrowUturnLeft /></button>
                    <button className='hover:text-[#ecebeb]'><HiArrowUturnRight /></button>
                    <button className='hover:text-[#ecebeb]'><HiOutlineEye /></button>
                </div>
                <button className='bg-[#F1614A] py-[10px] px-[20px] text-[13px] hover:bg-[#F1994D] duration-100'>Publish</button>
            </div>
        </header>
    )
};

export default Header;