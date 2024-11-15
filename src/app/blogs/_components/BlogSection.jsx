
"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { format } from 'date-fns';
export function BlogSection({posts}) {


  const [search,setSearch] = useState('')
  const [blogItems,setBlogItems] = useState(posts);
  
  const [count,setCount] =  useState(4)
  useEffect(() => {
    if (search) {
      const debounceSearch = setTimeout(() => {
        const lowerCaseTerm = search.toLowerCase();

        const showItem = posts.filter(item => {
          return (
            item.title.toLowerCase().includes(lowerCaseTerm) ||
            item.content.toLowerCase().includes(lowerCaseTerm) ||
            item.labels.some(label => label.toLowerCase().includes(lowerCaseTerm))
          );
        });

        setBlogItems(showItem);
      }, 300); // Debounce search by 300ms

      return () => clearTimeout(debounceSearch);
    } else {
      setBlogItems(posts); // Reset to full posts when search is empty
    }
  }, [search, posts]);



  return (
    (<div >
      
      <div className="py-10 md:w-[500px]  px-6 mx-auto relative">
      <input onChange={(e)=>setSearch(e.target.value)} value={search} type="search" placeholder="search" className="w-full pl-10 outline-0 placeholder:text-center py-2 rounded-md   border border-green-300 mx-auto " />
        <IoIosSearch className="text-green-400 w-6 h-6 absolute md:left-8 left-9 top-[50%] -translate-y-[10px]"/>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-4 max-w-7xl mx-auto relative">
        {blogItems.slice(0,count).map((feature) => (
          <div
            key={feature.title}
            className="relative md:h-[540px] border space-y-4 bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden">
              
            
            <Image src={feature.image} alt="" width={600} height={400} className="h-[150px] object-fill"/>
            <h3
              className="text-base font-bold text-green-700  dark:text-white relative z-20">
              {feature.title}
            </h3>
            <p
              className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal  ">
              {feature.content}
            </p>
            <div className="flex justify-between md:px-4 items-baseline md:absolute md:w-[90%] left-0 bottom-3 ">
              <p className="text-xs italic">{    format(new Date(feature.published), "dd MMMM yyyy")}</p>
            <Link href={feature.url} className="text-right block min-w-[50px] text-green-700 text-xs font-bold my-4" >Read more...</Link>
            </div>
            {/* <div className="flex justify-evenly flex-wrap gap-2  ">
               {feature.labels.map(label => <span key={label} onClick={()=>setSearch(label)}  className="cursor-pointer text-xs border p-[2px]  bg-gray-100 rounded-md font-bold ">{label}</span>) }
            </div> */}
          </div>
        ))}
      </div>
        <div className="mt-16">
                    {(blogItems.length > 4 && blogItems.length > count) && (
                <button 
                    onClick={() => setCount(c => c + 4)} 
                    className="w-24 h-8 block mx-auto border-black shadow rounded-md border text-black text-sm">
                    See more
                </button>
            )}
        </div>
    </div>)
  );
}


