
import Catagory from '@/components/Privilege/Catagory';
import CatagoryDetails from '@/components/Privilege/CatagoryDetails';
import HeroSlider from '@/components/Privilege/HeroSlider';


import { get_catagorys, get_offer_state, get_partners, } from '@/utils/fetchData';
import { Suspense } from 'react';
import PopUp from './PopUp';


const page = async ({searchParams}) => {
    const [fetch_partners,catagory_list,get_offer_state_list,] = await Promise.all([
        get_partners(),
        get_catagorys(),
        get_offer_state(),
        
    ]);

   
    return (
        <div className='max-w-7xl mx-auto flex flex-col gap-6 mt-20'>
                    <HeroSlider/>
                    <Suspense fallback="Loading...">

                    <Catagory catagorys={catagory_list.data}/>
                    </Suspense>
                        {/* <Options /> */}
                    <Suspense fallback="Loading....">

                    <CatagoryDetails partners={fetch_partners.data} searchParams={searchParams}/>
                    </Suspense>
                    
                 {/* <PopUp searchParams={searchParams} list = {get_offer_state_list.data}/> */}
        </div>
    );
};

export default page;