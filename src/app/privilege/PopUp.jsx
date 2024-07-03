'use client'

import useChangeParams from "@/hooks/useChangeParams";
import { useEffect, useState } from "react";

const PopUp = ({list,searchParams}) => {
  
        const [popup,setpopup] = useState(false);
        const [changeCatagory] = useChangeParams()

    useEffect(()=>{
            

        if(!searchParams.state){
            setTimeout(()=>{
                setpopup(true)
            },1500)
        }
          
    },[searchParams])


    const close_popup = (e) => {
        const isContaine = (e.target.classList.contains("fixed"));
        if(isContaine){
            setpopup(false)
        }
    }

    return (
       <>
       
       
      {popup ? <div className='fixed w-full left-0 h-full bg-[#00000016] z-10 flex justify-center items-center' onClick={(e)=> close_popup(e)}>
        <div className='md:w-[500px] h-[220px] bg-[#ffffff] rounded-lg p-4 flex flex-col justify-center items-center gap-4'>
                        <h2 className='text-xl '>Let&apos;s get your Location</h2>
                    <select className='md:w-[300px] w-full border p-2 text-md' defaultValue="choose" onChange={(e) => changeCatagory('state',e.target.value)}>
                        <option value="choose" disabled>Choose </option>
                            {list.map((list,indx) => <option key={indx} value={list.state}>{list.state}</option>)}
                    </select>
        </div> 
</div> : <></>} 
       </>
    );
};

export default PopUp;