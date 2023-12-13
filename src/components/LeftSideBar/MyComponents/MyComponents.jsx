import React from 'react';
import { HiPhoto } from 'react-icons/hi2';

const MyComponents = () => {
    return (
        <>
            <h5 className='mb-4'>My Components</h5>
            <div className="grid grid-cols-3 gap-[6px]">
                <div className="bg-[#2F3031] rounded flex flex-col items-center py-3">
                    <HiPhoto />
                    <p>Hero</p>
                </div>
            </div>
        </>
    );
};

export default MyComponents;