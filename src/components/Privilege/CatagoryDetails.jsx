import {  useCallback } from "react";
import PartnerCard from "./PartnerCard";






const CatagoryDetails = async  ({searchParams}) => {
    

    const fetchingData = useCallback(async()=>{
       try {
         const {catagory,city} = searchParams;
                          let response;
                    if(catagory && city){
                         response = await fetch(`${process.env.HOST}/api/partners?catagory=${catagory}&city=${city}`);
                    }else if(catagory){
                        response = await fetch(`${process.env.HOST}/api/partners?catagory=${catagory}`);
                    }else if(city){
                        response = await fetch(`${process.env.HOST}/api/partners?city=${city}`);
                    }else{
                        response = await fetch(`${process.env.HOST}/api/partners`);
                    }
                    
                    return  await response.json();
                   

       } catch (error) {
            console.log("error from fetchingData",error )
       }
        
    },[searchParams])

    const data = await fetchingData();
    
    return (
        <div className="grid md:grid-cols-4 grid-cols-1 p-4 gap-4">
                    
                    {
                       data && data.map(data => <PartnerCard key={data} data={data}/>)
                    }
                     
           
        </div>
    );
};

export default CatagoryDetails;