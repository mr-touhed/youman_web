import { get_singel_product } from "@/utils/fetchData";
import Image from "next/image";
import Link from "next/link";
import { FaMapLocationDot } from "react-icons/fa6";
import { AiFillShop } from "react-icons/ai";
const page = async ({params}) => {
       const {name} = params; 
    const {partner} =await get_singel_product(name);
   
    const {name:partner_name,location,offers,catagory,details,image} = partner;
 
    return (
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
            <div className="space-y-6">
                <Image src={image.display_url} width={600} height={600} alt={partner_name}/>
                <div className="flex gap-2 md:px-2 px-1 flex-wrap justify-center ">
            {offers.offer1 && <span className="border border-green-300 bg-[#ffffff] backdrop-blur-sm h-6  px-2 text-green-700 text-xs flex justify-center items-center rounded-xl">{offers.offer1}</span>}
            {offers.offer3 && <span className="border border-green-300 bg-[#ffffff] backdrop-blur-sm h-6  px-2 text-green-700 text-xs flex justify-center items-center rounded-xl">{offers.offer3}</span>}
            {offers.offer2 && <span className="border border-green-300 bg-[#ffffff] backdrop-blur-sm h-6  px-2 text-green-700 text-xs flex justify-center items-center rounded-xl">{offers.offer2}</span>}
            </div>
            </div>
            <div className="flex flex-col gap-6 text-base font-thin mt-3">
            
                    <h2 className="text-3xl font-bold">{partner_name}</h2>
                    <Link href={'/checkout'} className="p-2 bg-green-700 rounded-lg text-center font-semibold uppercase text-white">get it</Link>

                    <div>
                        <p ><span className="font-semibold">Address: <br/></span> {location.address} </p>
                        <p><span className="font-semibold">City: <br/></span> {location.city}</p>
                    </div>
                    <div>
                        <p className="text-justify"><span className="font-semibold">Offer Details: <br/></span>{details}</p>
                    </div>

                    <div >
                        
                       <div className="border-b pb-8">
                        <p className=" font-semibold ">Category:</p>
                        <p className=""> <span >{catagory}</span></p>
                       </div>
                    </div>
                    <div >
                        <p>For any offer related issues, please contact: +880 9611696515 (11:00 AM - 7:00 PM (Sunday-Thursday) or email: hello@youman.com.bd </p>
                        
                    </div>
            </div>
        </div>
    );
};

export default page;