import React, { useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import MyComponents from './MyComponents/MyComponents';
import BasicComponents from './BasicComponents/BasicComponents';
import ReactCardFlip from 'react-card-flip';
import HeroComponents from './MyComponents/ChildrenComponents/HeroComponents';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const LeftSideBar = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleFlip = (component) => {
        setIsFlipped((prevIsFlipped) => !prevIsFlipped);
        setSelectedComponent(component);
    };

    return (
        <div className='primary-bg min-h-screen py-[25px] px-[15px]'>
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
                    {/* This div belongs to front components */}
                    <div>
                        <MyComponents handleFlip={handleFlip} />

                        <hr className='my-[26px] border-[#797979]' />

                        <BasicComponents handleFlip={handleFlip} />
                    </div>

                    {/* This div belongs to back components */}
                    <div>
                        {selectedComponent === "Hero" ?
                            <HeroComponents handleFlip={handleFlip} />
                            :
                            selectedComponent === "Button" ?
                                'sdsds'
                                :
                                <div className='text-center space-y-3'>
                                    <p>No components are found</p>
                                    <button
                                        onClick={handleFlip}
                                        className='bg-[#F1614A] py-[10px] px-[20px] text-[13px] hover:bg-[#F1994D] duration-100 rounded-md'
                                    >
                                        <AiOutlineArrowLeft className='font-semibold text-lg mr-2 inline' />
                                        Go Back
                                    </button>
                                </div>
                        }
                    </div>
                </ReactCardFlip>
            </div>
        </div>
    );
};

export default LeftSideBar;