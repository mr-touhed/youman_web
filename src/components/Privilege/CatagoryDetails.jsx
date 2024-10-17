"use client"

import { useEffect, useState } from "react";
import PartnerCard from "./PartnerCard";
import { get_query_partners } from "@/utils/fetchData";
import { IoIosSearch } from "react-icons/io";







const CatagoryDetails =   ({searchParams,partners}) => {
        const [partnerList,setPartnerList] = useState(partners)
    
    useEffect(()=>{
        const get_partner =async () =>{
            try {
                const result = await get_query_partners(searchParams.catagory,searchParams.state);
                setPartnerList(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        if(searchParams.catagory || searchParams.state){
            get_partner()
        }
        
    }, [searchParams])
    
    return (
        <>
        <div className="py-5 md:w-[500px] px-6 mx-auto relative">
      <input onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="search" className="w-full pl-10 outline-0 placeholder:text-center py-2 rounded-md   border border-green-300 mx-auto " />
        <IoIosSearch className="text-green-400 w-6 h-6 absolute md:left-8 left-9 top-[50%] -translate-y-[10px]"/>
      </div>
        <div className="grid md:grid-cols-4 grid-cols-2 md:p-4 p-2 md:gap-8 gap-2 place-items-center">
        {partnerList.length < 1 && "No data found yet"}
                    {
                        partnerList.map(data => <PartnerCard key={data._id} data={data}/>)
                        
                    }
                     
           
        </div>
    </>
    );
};

export default CatagoryDetails;