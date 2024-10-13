"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";


const Menubar = () => {

    const [showMenu,setShowMenu] = useState(true)

    return (
        <nav className="fixed z-50  top-2 inset-x-0 max-w-7xl mx-auto  shadow-sm  w-full border  rounded-lg  border-transparent dark:bg-black dark:border-white/[0.2] bg-[#ffffff7b] backdrop-blur-sm shadow-input flex justify-between   items-center  px-8 py-3  pl-2 md:pl-8 ">
           <section className="w-full  items-center flex justify-between">
        <div className="relative">
        <RiMenu2Fill onTouchStart={()=>setShowMenu(!showMenu)} className="w-8 h-8 font-bold  md:hidden block"/>
            <ul className={`text-lg md:font-semibold font-chirsman md:flex  gap-10 flex-row  hidden`}>
                <li>
                <Link href="/web-dev">Youman catalyst</Link>
                </li>
                <li>
                <Link href="/youman-story">Our story</Link>
                </li>
                <li>
                <Link href="/trending-now">Trending now</Link>
                </li>
            <li>
            <Link href="/blogs">Blogs</Link>
            </li>
            <li>
            <Link href="/privilege">Partners</Link>
            </li>
           <li>
           <Link href="/contact-us">Contact us</Link>
           </li>
            
            </ul>
            <MobileMenu showMenu={showMenu}/>
        </div>
        <div>
        <Link href="/">
          <Image src="/images/youman_logo.png" alt="youman logo" width={1000} height={500} className="w-20 "/>
      </Link>
        </div> 
        </section>
        </nav>
    );
};

export default Menubar;



function MobileMenu({showMenu}){
    return (<ul className={`text-lg md:hidden   font-chirsman flex  gap-4   flex-col  bg-[#ffffffed] backdrop-blur-lg border border-transparent  shadow-input p-4 rounded-md   ${showMenu ? "opacity-1" : "opacity-0"} transition-opacity ease-in-out duration-100    fixed z-50`}>
        <li>
        <Link href="/web-dev">Youman catalyst</Link>
        </li>
        <li>
        <Link href="/youman-story">Our story</Link>
        </li>
        <li>
        <Link href="/trending-now">Trending now</Link>
        </li>
    <li>
    <Link href="/blogs">Blogs</Link>
    </li>
    <li>
    <Link href="/privilege">Partners</Link>
    </li>
   <li>
   <Link href="/contact-us">Contact us</Link>
   </li>
    
    </ul>)
} 