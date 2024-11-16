
import Catagory from '@/components/Privilege/Catagory';
import CatagoryDetails from '@/components/Privilege/CatagoryDetails';
import HeroSlider from '@/components/Privilege/HeroSlider';


import { get_catagorys, get_offer_state, get_partners, get_query_partners, } from '@/utils/fetchData';
import { Suspense } from 'react';
import PopUp from './PopUp';


const page = async ({searchParams}) => {
    // const [fetch_partners,catagory_list,] = await Promise.all([
    //     get_partners(),
    //     get_catagorys(),
    //     // get_offer_state(),
        
    // ]);
    let list ;
    const {catagory}= searchParams

    if(catagory){
        const result = await get_query_partners(catagory);
        list = result.data

    }else{
        const result = await  get_partners();
        list = result.data
    }
   
    return (
        <div className='max-w-7xl mx-auto flex flex-col gap-6 mt-20'>
                    <HeroSlider/>
                    <Suspense fallback="Loading...">

                    <Catagory />
                    </Suspense>
                        {/* <Options /> */}
                    <Suspense fallback="Loading....">

                    <CatagoryDetails partners={list} searchParams={searchParams}/>
                    </Suspense>
                    
                 {/* <PopUp searchParams={searchParams} list = {get_offer_state_list.data}/> */}
        </div>
    );
};

export default page;