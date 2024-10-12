import Image from 'next/image';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='max-w-lg mx-auto h-[100vh] grid place-content-center '>
            <Image src="/images/404.jpg" alt='404 logo' width={1200} height={1000} className='w-full h-auto'/>
        </div>
    );
};

export default NotFoundPage;