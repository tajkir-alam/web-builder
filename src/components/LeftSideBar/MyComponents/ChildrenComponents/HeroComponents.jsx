import React, { useState } from 'react';
import Image from "next/legacy/image";
import { AiOutlineArrowLeft } from 'react-icons/ai';

const HeroComponents = ({ handleFlip }) => {
    const [clickedImagePath, setClickedImagePath] = useState(null);

    const imagePaths = [
        "/ComponentsBannerImg/banner1.png",
        "/ComponentsBannerImg/banner2.jpg",
        "/ComponentsBannerImg/banner3.jpg",
        "/ComponentsBannerImg/banner4.jpg",
        "/ComponentsBannerImg/banner5.jpg",
        "/ComponentsBannerImg/banner6.png",
        "/ComponentsBannerImg/banner7.jpg",
    ];

    const handleImageClick = (path) => {
        setClickedImagePath(path);
        console.log("Clicked Image Path:", path);
    };

    return (
        <>
            <h4 className='text-center mb-4'>Hero Banner</h4>
            <div className="grid grid-cols-2 gap-2 py-3 px-2 cursor-pointer">
                {imagePaths.map((path, index) => (
                    <div key={index} onClick={() => handleImageClick(path)}>
                        <Image
                            alt=''
                            src={path}
                            height={250}
                            width={400}
                            className='rounded hover:scale-105 duration-300'
                        />
                    </div>
                ))}
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