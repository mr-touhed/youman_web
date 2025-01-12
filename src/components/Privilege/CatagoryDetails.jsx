"use client"

import { useEffect, useState } from "react";
import PartnerCard from "./PartnerCard";
import { get_partners, get_query_partners } from "@/utils/fetchData";
import { IoIosSearch } from "react-icons/io";







const CatagoryDetails =   ({searchParams,partners}) => {
        const [partnerList,setPartnerList] = useState(partners);
        const [search,setSearch] = useState('');
        const [showData,setShowData] = useState(partnerList)
       
        const [visibleCount, setVisibleCount] = useState(4);
        const {catagory} = searchParams;
        const showMoreProducts = () => {
          setVisibleCount((prevCount) => prevCount + 4);
        };


    useEffect(()=>{
        setTimeout(()=>{
            if(!search){
                setShowData(partnerList)
             }else{
                const filterData =  partnerList.filter(partner => partner.name.toLowerCase().includes(search.toLowerCase()));
                setShowData(filterData)
                 
             }
        },400)
    },[search])
    useEffect(()=>{
        
        const get_query_partner =async () =>{
            
            try {
                const result = await get_query_partners(catagory);
                setShowData(result.data);
                setPartnerList(result.data)
               
            } catch (error) {
                console.log(error);
            }
        }

        async function getallpartner () {
            const result = await get_partners();
            setShowData(result.data);
        }
       
            if(catagory === undefined || null ){
                getallpartner()
                
            }
            get_query_partner()
        
        
    }, [catagory])
    
   

    return (
        <>
        <div className="py-5 md:w-[500px] md:px-6 px-4 mx-auto relative w-full ">
      <input onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="search" className="w-full pl-10 outline-0 placeholder:text-center py-2 rounded-md   border border-green-300 mx-auto " />
        <IoIosSearch className="text-green-400 w-6 h-6 absolute md:left-8 left-9 top-[50%] -translate-y-[10px]"/>
      </div>
        <div className="grid md:grid-cols-4 grid-cols-2 md:p-4 p-2 md:gap-8 gap-2 place-items-center">
        {showData.length < 1 && "No data found yet"}
                    {
                        showData.slice(0,visibleCount).map(data => <PartnerCard key={data._id} data={data}/>)
                        
                    }
                     
           
        </div>
        <div>
                 {visibleCount < showData.length && (
                  <button onClick={showMoreProducts} className="w-24 h-8 block mx-auto border-black shadow rounded-md border  text-black text-sm">See more</button>  
                )}
                  </div>
    </>
    );
};

export default CatagoryDetails;