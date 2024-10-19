"use client"

import { useEffect, useState } from "react";
import PartnerCard from "./PartnerCard";
import { get_query_partners } from "@/utils/fetchData";
import { IoIosSearch } from "react-icons/io";







const CatagoryDetails =   ({searchParams,partners}) => {
        const [partnerList,setPartnerList] = useState(partners);
        const [search,setSearch] = useState('');
        const [showData,setShowData] = useState(partnerList)
    
    
    useEffect(()=>{
        setTimeout(()=>{
            if(search){
                const filterData =  partnerList.filter(partner => partner.name.toLowerCase().includes(search.toLowerCase()));
                setShowData(filterData)
             }else{
                 setShowData(partnerList)
             }
        },400)
    },[search])
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
        <div className="py-5 md:w-[500px] md:px-6 px-4 mx-auto relative w-full ">
      <input onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="search" className="w-full pl-10 outline-0 placeholder:text-center py-2 rounded-md   border border-green-300 mx-auto " />
        <IoIosSearch className="text-green-400 w-6 h-6 absolute md:left-8 left-9 top-[50%] -translate-y-[10px]"/>
      </div>
        <div className="grid md:grid-cols-4 grid-cols-2 md:p-4 p-2 md:gap-8 gap-2 place-items-center">
        {partnerList.length < 1 && "No data found yet"}
                    {
                        showData.slice(0,4).map(data => <PartnerCard key={data._id} data={data}/>)
                        
                    }
                     
           
        </div>
        <div>
                  <button className="w-24 h-8 block mx-auto border-black shadow rounded-md border  text-black text-sm">See more</button>  
        </div>
    </>
    );
};

export default CatagoryDetails;