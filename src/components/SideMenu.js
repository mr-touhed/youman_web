"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GoHomeFill } from "react-icons/go";
import { IoIosListBox } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { IoTicket } from "react-icons/io5";
import { ImSpinner3 } from "react-icons/im";
import { CiSquareCheck } from "react-icons/ci";
import { MdDeliveryDining, MdEmail } from "react-icons/md";
import { TfiGallery } from "react-icons/tfi";
const SideMenu = () => {
    const pathname = usePathname();
  
    return (
        <aside className="border-r flex flex-col items-center  space-y-8">
                    <div className=' w-full '>
                    <h4 className='text-base text-center uppercase font-bold'>Partner </h4>
                    <ul className="p-3 w-full space-y-4">
                        <li className="w-full  border rounded-md text-center">
                            <Link href="/" className={`flex  justify-center items-center gap-4 p-2 rounded-md font-semibold ${pathname === "/" ? "bg-green-700 text-white": ""}`}> <GoHomeFill className='w-6 h-6'/> <span className='min-w-[100px] block'>Home</span></Link>
                        </li>
                        <li className="w-full  border rounded-md text-center">
                            <Link href="/dashboard/partner-list" className={`flex  justify-center items-center gap-4 p-2 rounded-md font-semibold ${pathname === "/dashboard/partner-list" ? "bg-green-700 text-white": ""}`}><IoIosListBox className='w-6 h-6'/> <span className='min-w-[100px] block'>Partner List</span></Link>
                        </li>
                        <li className="w-full  border rounded-md text-center">
                            <Link href="/dashboard/add-partner" className={`flex  justify-center items-center gap-4 p-2 rounded-md font-semibold ${pathname === "/dashboard/add-partner" ? "bg-green-700 text-white": ""}`}><IoIosAddCircle className='w-6 h-6'/> <span className='min-w-[100px] block'>Add Partner</span></Link>
                        </li>
                        <li className="w-full  border rounded-md text-center">
                            <Link href="/dashboard/reffer" className={`flex  justify-center items-center gap-4 p-2 rounded-md font-semibold ${pathname === "/dashboard/reffer" ? "bg-green-700 text-white": ""}`}><IoTicket className='w-6 h-6'/> <span>Create Reffer</span></Link>
                        </li>
                      
                      
                    </ul>
                    </div>

                    <div className='border-t-2 w-full '>
                                    <h4 className='text-base text-center uppercase font-bold'>Contact </h4>
                    <ul className="p-3 w-full space-y-4">
                    <li className="w-full  border rounded-md text-center">
                        <Link href="/dashboard/contact" className={`flex  justify-center items-center gap-4 p-2 rounded-md font-semibold ${pathname === "/dashboard/contact" ? "bg-green-700 text-white": ""}`}><MdEmail className='w-6 h-6'/> <span>Contact message</span></Link>
                    </li>
                   
                    </ul>
                    </div>
                    <div className='border-t-2 w-full '>
                    <h4 className='text-base text-center uppercase font-bold'>Blogs </h4>
                        <ul className="p-3 w-full space-y-4">
                        <li className="w-full  border rounded-md text-center">
                            <Link href="/dashboard/blogs" className={`flex  justify-center items-center gap-4 p-2 rounded-md font-semibold ${pathname === "/dashboard/blogs" ? "bg-green-700 text-white": ""}`}><IoIosAddCircle className='w-6 h-6'/> <span>Add Blogs</span></Link>
                        </li>
                        <li className="w-full  border rounded-md text-center">
                            <Link href="/dashboard/blogs/list" className={`flex  justify-center items-center gap-4 p-2 rounded-md font-semibold ${pathname === "/dashboard/blogs/list" ? "bg-green-700 text-white": ""}`}><IoIosListBox className='w-6 h-6'/> <span>Blog list</span></Link>
                        </li>
                        </ul>
                    </div>
                    <div className='border-t-2 w-full '>
                    <h4 className='text-base text-center uppercase font-bold'>Card order </h4>
                        <ul className="p-3 w-full space-y-4">
                        <li className="w-full  border rounded-md text-center">
                            <Link href="/dashboard/process-order" className={`flex  justify-center items-center gap-4 p-2 rounded-md font-semibold ${pathname === "/dashboard/process-order" ? "bg-green-700 text-white": ""}`}><ImSpinner3  className='w-6 h-6'/> <span>Process Order</span></Link>
                        </li>
                        <li className="w-full  border rounded-md text-center">
                            <Link href="/dashboard/received-order" className={`flex  justify-center items-center gap-4 p-2 rounded-md font-semibold ${pathname === "/dashboard/received-order" ? "bg-green-700 text-white": ""}`}><CiSquareCheck   className='w-6 h-6'/> <span>Received  Order</span></Link>
                        </li>
                        <li className="w-full  border rounded-md text-center">
                            <Link href="/dashboard/delivery-card" className={`flex  justify-center items-center gap-4 p-2 rounded-md font-semibold ${pathname === "/dashboard/delivery-card" ? "bg-green-700 text-white": ""}`}><MdDeliveryDining    className='w-6 h-6'/> <span>Delivery Card</span></Link>
                        </li>
                        </ul>
                    </div>
                    
                    <div className='w-full border-t-2'>
                    <h4 className='text-base text-center uppercase font-bold'>UI </h4>


                    <ul className="p-3 w-full space-y-4">
                        <li className="w-full  border rounded-md text-center">
                            <Link href="/dashboard/slider-images" className={`flex  justify-center items-center gap-4 p-2 rounded-md font-semibold ${pathname === "/dashboard/slider-images" ? "bg-green-700 text-white": ""}`}> <TfiGallery  className='w-6 h-6'/> <span className='min-w-[100px] block'>Slider Images</span></Link>
                        </li>
                    
                    
                    </ul>
                    </div>
            </aside>
    );
};

export default SideMenu;