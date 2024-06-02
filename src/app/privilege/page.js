import Catagory from '@/components/Privilege/Catagory';
import CatagoryDetails from '@/components/Privilege/CatagoryDetails';
import HeroSlider from '@/components/Privilege/HeroSlider';
import Options from '@/components/Privilege/Options';
import React, { Suspense } from 'react';

const page = ({searchParams}) => {
    return (
        <div className='max-w-7xl mx-auto flex flex-col gap-6'>
                    <HeroSlider/>
                    <Catagory/>
                    <Options/>
                    <Suspense fallback={"Loading..."}>
                    <CatagoryDetails searchParams={searchParams}/>
                    </Suspense>
                   
        </div>
    );
};

export default page;