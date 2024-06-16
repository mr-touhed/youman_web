'use client'
import useChangeParams from "@/hooks/useChangeParams";
import useDataFetching from "@/hooks/useDataFetching";
import Link from "next/link";



const Options = () => {
    const [changeCatagory] = useChangeParams();
   
    const [locations,loading,error] = useDataFetching('location')
    if(loading) return ;
    if(error) return ;
    
    return (
        <div className=" w-full flex py-2 justify-between bg-green-600 border-y-2">
                                
                                    <button className="  text-gray-50  px-8   ">
                                        <Link href="/">Back</Link>
                                    </button>
                                    <select className="mx-auto text-white bg-green-600 outline-none   backdrop-blur-sm" name="location" onChange={(e)=> changeCatagory('city',e.target.value)}  >
                                    <option className="text-gray-50">Location Search</option>
                                        {
                                            locations.map(location => <option key={location}  value={location}>{location}</option>)
                                        }
                                    </select>
                                    
                                    
                                </div>  
    );
};

export default Options;