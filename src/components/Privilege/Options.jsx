'use client'
import useChangeParams from "@/hooks/useChangeParams";
import BackButton from "../BackButton";



const Options = () => {
    const [changeCatagory] = useChangeParams();
   
    // const [locations,loading,error] = useDataFetching('location')
    // if(loading) return ;
    // if(error) return ;
    
    return (
        // <div className=" w-full flex py-2 justify-between bg-green-600 border-y-2">
                                
        //                             <div className="max-w-7xl mx-auto">
        //                             <BackButton/>
        //                             </div>
        //                             {/* <select className="mx-auto text-white bg-green-600 outline-none   backdrop-blur-sm" name="location" onChange={(e)=> changeCatagory('city',e.target.value)}  >
        //                             <option className="text-gray-50">Location Search</option>
        //                                 {
        //                                     locations.map(location => <option key={location}  value={location}>{location}</option>)
        //                                 }
        //                             </select> */}
                                    
                                    
        //                         </div>  

        <div className="border-b border-t h-12 flex items-center">
                <div>
                <BackButton/>
                </div>
        </div>
    );
};

export default Options;