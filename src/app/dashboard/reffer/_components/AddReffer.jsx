"use client"
import { baseURL } from "@/utils/baseURL";
import revalidateTag from "@/utils/revalided";
import { useState } from "react";


const AddReffer = () => {
    const [reffer,setReffer] = useState({name:"", amount:""});
    const handel_input = (e) =>{
        setReffer(prev => ({...prev, [e.target.name]:e.target.value}))
    }
    const handel_submit = async (e) =>{
        e.preventDefault()
        try {
            const response = await fetch(`${baseURL}/add-reffer`,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(reffer)
            });
            const result = await response.json();
            if(result.status.type){
                revalidateTag('reffer');
                setName('')
                return alert("add new reffer")
            }else{
                alert(result.status.message)
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={handel_submit} className='flex justify-between border p-1 items-center mt-4 gap-4'>
                <div className='flex-1 flex gap-2'>
                    <input onChange={e => handel_input(e)} value={reffer.name} type="text" placeholder="Promo code" name="name" className='w-full border px-2 ' required/>
                    <input onChange={e => handel_input(e)} value={reffer.amount} type="text" placeholder="amount" name="amount" className='w-full border px-2 flex-1 min-w-28' required/>
                </div>
                <div className='px-2 bg-green-500 text-white rounded-md'>
                    <button className=''>Add</button>
                </div>
            </form>
    );
};

export default AddReffer;