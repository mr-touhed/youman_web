
import BackButton from '@/components/BackButton';
import React from 'react';

const Detailslayout = ({children}) => {
    return (
        <div className='px-4'>
            <div className='h-20 border-b'>
                <BackButton/>
            </div>
            <div className='mt-6'>
            {children}
            </div>
        </div>
    );
};

export default Detailslayout;