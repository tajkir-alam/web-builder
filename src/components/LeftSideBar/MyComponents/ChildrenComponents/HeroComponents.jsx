import React from 'react';
import Image from "next/legacy/image";
import { useDispatch } from 'react-redux';
import { updateBannerImgSrc } from '@/redux/features/heroBannerImg/heroBannerImgSlice';
import GoBackBtn from '../../GoBackBtn';

const HeroComponents = ({ handleFlip }) => {
    const dispatch = useDispatch();

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
        dispatch((updateBannerImgSrc(path)));
    };

    const handleDragStart = (e, path) => {
        e.dataTransfer.setData('text/plain', path);
    }


    return (
        <>
            <h4 className='text-center mb-4'>Hero Banner</h4>
            <div className="grid grid-cols-2 gap-2 py-3 px-2 cursor-pointer">
                {imagePaths.map((path, index) => (
                    <div
                        key={index}
                        onClick={() => handleImageClick(path)}
                        onDragStart={(e) => handleDragStart(e, path)}
                    >
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
            <GoBackBtn handleFlip={handleFlip} />
        </>
    );
};

export default HeroComponents;