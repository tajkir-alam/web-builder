import React from 'react';
import GoBackBtn from './GoBackBtn';

const ChildComponentsTitle = ({handleFlip, title}) => {
    return (
        <div className='mb-4 flex items-center gap-6'>
            <GoBackBtn handleFlip={handleFlip} />
            <h4 className='capitalize'>{title}</h4>
        </div>
    );
};

export default ChildComponentsTitle;