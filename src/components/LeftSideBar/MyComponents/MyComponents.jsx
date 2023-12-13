import React from 'react';
import { HiPhoto } from 'react-icons/hi2';

const MyComponents = () => {
    return (
        <>
            <h5 className='mb-4'>My Components</h5>
            <div className="grid grid-cols-3 gap-[6px] duration-200">
                <div className="bg-[#3e3f41] hover:bg-[#4f5053] rounded flex flex-col items-center py-3 cursor-pointer">
                    <HiPhoto />
                    <p className='text-xs whitespace-nowrap mt-2'>Hero</p>
                </div>
                <div className="bg-[#3e3f41] hover:bg-[#4f5053] rounded flex flex-col items-center py-3 cursor-pointer">
                    <HiPhoto />
                    <p className='text-xs whitespace-nowrap mt-2'>Button</p>
                </div>
                <div className="bg-[#3e3f41] hover:bg-[#4f5053] rounded flex flex-col items-center py-3 cursor-pointer">
                    <HiPhoto />
                    <p className='text-xs whitespace-nowrap mt-2'>Search bar</p>
                </div>
                <div className="bg-[#3e3f41] hover:bg-[#4f5053] rounded flex flex-col items-center py-3 cursor-pointer">
                    <HiPhoto />
                    <p className='text-xs whitespace-nowrap mt-2'>Container</p>
                </div>
            </div>
        </>
    );
};

export default MyComponents;