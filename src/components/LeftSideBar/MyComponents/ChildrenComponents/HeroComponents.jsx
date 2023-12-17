import React from 'react';
import Image from "next/legacy/image";
import { useDispatch } from 'react-redux';
import { updateBannerImgSrc } from '@/redux/features/heroBannerImg/heroBannerImgSlice';
import ChildComponentsTitle from '../../ChildComponentsTitle';

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
        const newPath = {
            path
        }
        e.dataTransfer.setData('application/json', JSON.stringify(newPath));
    }


    return (
        <>
            <ChildComponentsTitle handleFlip={handleFlip} title='Hero Banner' />

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
        </>
    );
};

export default HeroComponents;