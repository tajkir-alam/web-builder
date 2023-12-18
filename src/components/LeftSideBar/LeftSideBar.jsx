import React, { useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import MyComponents from './MyComponents/MyComponents';
import BasicComponents from './BasicComponents/BasicComponents';
import ReactCardFlip from 'react-card-flip';
import HeroComponents from './MyComponents/ChildrenComponents/HeroComponents';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import GoBackBtn from './GoBackBtn';
import ButtonComponents from './MyComponents/ChildrenComponents/ButtonComponents';

const LeftSideBar = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleFlip = (component) => {
        setIsFlipped((prevIsFlipped) => !prevIsFlipped);
        setSelectedComponent(component);
    };

    return (
        <div className='primary-bg min-h-screen py-[25px] px-[15px] text-white hidden md:block'>
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
                                <ButtonComponents handleFlip={handleFlip} />
                                :

                                /* this is for go back to front part again */
                                <div className='flex flex-col items-center'>
                                <p className='text-lg mb-2 text-red-200'>No components are found.</p>
                                < GoBackBtn handleFlip={handleFlip} />
                                </div>
                        }
                    </div>
                </ReactCardFlip>
            </div>
        </div>
    );
};

export default LeftSideBar;