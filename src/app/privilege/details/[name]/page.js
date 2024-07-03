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
            <div>
                <Image src={image.display_url} width={600} height={600} alt={partner_name}/>
            </div>
            <div className="flex flex-col gap-6">
                   {offers.discount &&  <span className="flex px-2 max-w-[75px] bg-green-400 items-center justify-center rounded-xl text-white">{offers.discount}%</span>}
                   {offers.flat  && <span className="flex px-2 max-w-[170px] bg-yellow-400 items-center justify-center rounded-xl text-white">{offers.flat} TK cash voucher</span>}
                    <h2 className="text-3xl font-bold">{partner_name}</h2>
                    <Link href={'/checkout'} className="p-2 bg-green-700 rounded-lg text-center font-semibold uppercase text-white">get it</Link>

                    <div>
                        <p ><span className="font-semibold"><FaMapLocationDot className="w-8 h-8 text-gray-300"/></span> {location.address} </p>
                        <p><span className="font-semibold">City:</span> {location.state}</p>
                    </div>
                    <div>
                        {details}
                    </div>

                    <div>
                        <h2 className="font-semibold">Product Information</h2>
                       <div>
                        <p className="uppercase font-semibold text-gray-600">Brand</p>
                       <div className="flex justify-around gap-16 my-6">
                       <p className="flex flex-col items-center"><span><AiFillShop className="w-6 h-6 text-gray-500"/></span> <span >{catagory}</span></p>
                       
                       </div>
                       </div>
                    </div>
                    <div>
                        <p>For any offer related issues, please contact Youman: WhatsApp +8801844696515 (11:00 AM - 7:00 PM || Working days only)</p>
                    </div>
            </div>
        </div>
    );
};

export default page;