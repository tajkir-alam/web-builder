import React, { useState } from 'react';
import { HiMagnifyingGlass, HiPhoto } from 'react-icons/hi2';
import MyComponents from './MyComponents/MyComponents';
import BasicComponents from './BasicComponents/BasicComponents';
import ReactCardFlip from 'react-card-flip';

const LeftSideBar = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped((prevIsFlipped) => !prevIsFlipped);
    };

    return (
        <div className='primary-bg h-screen py-[25px] px-[15px]'>
            <div className='relative'>
                <input
                    type="text"
                    placeholder='Search...'
                    className='max-w-full bg-[#333333] rounded-md outline-none py-[4px] px-[10px]'
                />
                <button className='absolute right-5 top-2 z-20 active:scale-90 duration-200'>
                    <HiMagnifyingGlass />
                </button>

                <hr className='my-[26px] border-[#797979]' />
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <div>
                        <MyComponents handleClick={handleClick} />

                        <hr className='my-[26px] border-[#797979]' />

                        <BasicComponents />
                    </div>

                    <div>
                        <div onClick={handleClick} className="bg-[#3e3f41] hover:bg-[#4f5053] rounded flex flex-col items-center py-3 cursor-pointer">
                            <HiPhoto />
                            <p className='text-xs whitespace-nowrap mt-2'>Search bar</p>
                        </div>
                        <div className="bg-[#3e3f41] hover:bg-[#4f5053] rounded flex flex-col items-center py-3 cursor-pointer">
                            <HiPhoto />
                            <p className='text-xs whitespace-nowrap mt-2'>Container</p>
                        </div>
                    </div>
                </ReactCardFlip>
            </div>
        </div>
    );
};

export default LeftSideBar;