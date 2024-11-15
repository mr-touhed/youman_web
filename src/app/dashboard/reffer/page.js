import { baseURL } from '@/utils/baseURL';
import React from 'react';
import AddReffer from './_components/AddReffer';
import RefferItem from './_components/RefferItem';

const get_reffers = async () =>{
    try {
        const response = await fetch(`${baseURL}/get-reffer`,{next:{tags:['reffer']}});
        return await response.json()
    } catch (error) {
        console.log(error);
    }
}

const RefferPage = async () => {
    const refferData = await get_reffers();
    
    

    return (
        <div className='max-w-lg mx-auto'>
                <h2 className='text-2xl text-center uppercase'>Promo code List</h2>

            {
                refferData?.result.map(reffer => (
                    <RefferItem key={reffer._id} _id={reffer._id} name={reffer.name} amount={reffer?.amount}/>
                ))
            }
            <AddReffer/>
        </div>
    );
};

export default RefferPage;