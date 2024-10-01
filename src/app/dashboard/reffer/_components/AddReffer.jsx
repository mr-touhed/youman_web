"use client"
import { baseURL } from "@/utils/baseURL";
import revalidateTag from "@/utils/revalided";
import { useState } from "react";


const AddReffer = () => {
    const [name,setName] = useState('');
    const handel_submit = async (e) =>{
        e.preventDefault()
        try {
            const response = await fetch(`${baseURL}/add-reffer`,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({name})
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
            
        }
    }
    return (
        <form onSubmit={handel_submit} className='flex justify-between border p-1 items-center mt-4 gap-4'>
                <div className='flex-1'>
                    <input onChange={e => setName(e.target.value)} value={name} type="text" className='w-full border px-2'/>
                </div>
                <div className='px-2 bg-green-500 text-white rounded-md'>
                    <button className=''>Add</button>
                </div>
            </form>
    );
};

export default AddReffer;