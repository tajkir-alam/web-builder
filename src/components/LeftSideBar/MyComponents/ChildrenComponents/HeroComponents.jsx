import Image from 'next/image';
import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const HeroComponents = ({ handleFlip }) => {
    return (
        <>
        <h4 className='text-center mb-4'>Hero Banner</h4>
            <div
                onClick={handleFlip}
                className="bg-[#3e3f41] hover:bg-[#4f5053] rounded-md grid grid-cols-2 gap-2 py-3 px-2 cursor-pointer"
            >
                <div>
                    <Image
                        alt=''
                        src="/ComponentsBannerImg/banner1.jpg"
                        height={100}
                        width={300}
                        className='rounded-md hover:scale-105 duration-300'
                    />
                </div>
                <div>
                    <Image
                        alt=''
                        src="/ComponentsBannerImg/banner2.jpg"
                        height={100}
                        width={300}
                        className='rounded-md hover:scale-105 duration-300'
                    />
                </div>
                <div>
                    <Image
                        alt=''
                        src="/ComponentsBannerImg/banner3.jpg"
                        height={100}
                        width={300}
                        className='rounded-md hover:scale-105 duration-300'
                    />
                </div>
                <div>
                    <Image
                        alt=''
                        src="/ComponentsBannerImg/banner4.jpg"
                        height={100}
                        width={300}
                        className='rounded-md hover:scale-105 duration-300'
                    />
                </div>
                <div>
                    <Image
                        alt=''
                        src="/ComponentsBannerImg/banner5.jpg"
                        height={100}
                        width={300}
                        className='rounded-md hover:scale-105 duration-300'
                    />
                </div>
                <div>
                    <Image
                        alt=''
                        src="/ComponentsBannerImg/banner6.png"
                        height={100}
                        width={300}
                        className='rounded-md hover:scale-105 duration-300'
                    />
                </div>
            </div>

            {/* this is for go back to front part again */}
            <div className='text-center mt-5'>
                <button
                    onClick={handleFlip}
                    className='bg-[#F1614A] py-[10px] px-[20px] text-[13px] hover:bg-[#F1994D] duration-100 rounded-md'
                >
                    <AiOutlineArrowLeft className='font-semibold text-lg mr-2 inline' />
                    Go Back
                </button>
            </div>
        </>
    );
};

export default HeroComponents;