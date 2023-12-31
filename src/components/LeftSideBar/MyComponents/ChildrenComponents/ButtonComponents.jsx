import React from 'react';
import ChildComponentsTitle from '../../ChildComponentsTitle';

const ButtonComponents = ({ handleFlip }) => {

    const handleDragStart = (e, dragType) => {
        const buttonInfo = {
            dragType,
            className: e.target.className
        }
        e.dataTransfer.setData('application/json', JSON.stringify(buttonInfo));
    }

    return (
        <>
            <ChildComponentsTitle handleFlip={handleFlip} title='Action Button' />

            <div className="grid grid-cols-2 gap-2 py-3 px-2 cursor-pointer">
                <button
                    draggable
                    onDragStart={(e) => handleDragStart(e, 'buttonComponent')}
                    className='bg-[#F1614A] hover:bg-[#F1994D] py-[10px] px-[20px] text-white text-[13px] duration-100 rounded-md'
                >
                    Button
                </button>

                <button
                    draggable
                    onDragStart={(e) => handleDragStart(e, 'buttonComponent')}
                    className='bg-[#5D96FF] hover:bg-[#78a0e9] py-[10px] px-[20px] text-white text-[13px] duration-200 rounded-md'
                >
                    Button
                </button>
                <button
                    draggable
                    onDragStart={(e) => handleDragStart(e, 'buttonComponent')}
                    className='bg-[#848892] hover:bg-[#787e88] py-[10px] px-[20px] text-white text-[13px] duration-200 rounded-md'
                >
                    Button
                </button>
                <button
                    draggable
                    onDragStart={(e) => handleDragStart(e, 'buttonComponent')}
                    className='bg-[#cffd4f] hover:bg-[#d6f189] py-[10px] px-[20px] text-black text-[13px] duration-200 rounded-md'
                >
                    Button
                </button>
                <button
                    draggable
                    onDragStart={(e) => handleDragStart(e, 'buttonComponent')}
                    className='bg-[#131720] hover:bg-[#202533] py-[10px] px-[20px] text-white text-[13px] duration-200 rounded-md'
                >
                    Button
                </button>
                <button
                    draggable
                    onDragStart={(e) => handleDragStart(e, 'buttonComponent')}
                    className='bg-[#d63a69] hover:bg-[#723547] py-[10px] px-[20px] text-white text-[13px] duration-200 rounded-md'
                >
                    Button
                </button>
            </div>
        </>
    );
};

export default ButtonComponents;