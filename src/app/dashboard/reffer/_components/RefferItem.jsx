"use client"
import { baseURL } from '@/utils/baseURL';
import revalidateTag from '@/utils/revalided';
import React from 'react';

const RefferItem = ({name, _id}) => {
    const handel_remove = async (id) =>{
        try {
            const response = await fetch(`${baseURL}/remove-reffer/${id}`,{method:"DELETE"})
            const result = await response.json();
            if(result.status.type){
                    revalidateTag('reffer');
                   return  alert(result.status.message)
            }else{
               return  alert(result.status.message)
            }
        } catch (error) {
            
        }
    }
    return (
        <div  className='flex bg-slate-100 my-4 border border-slate-400 p-1 justify-between items-center max-w-screen-2xl'>
                        <div className='pl-4'>
                                <p>{name}</p>
                        </div>
                        <div className='border-l p-1'>
                                <button onClick={()=>handel_remove(_id)}>remove</button>
                        </div>
                    </div>
    );
};

export default RefferItem;