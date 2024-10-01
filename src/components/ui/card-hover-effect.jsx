"use client"
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {  useEffect, useState } from "react";
import Image from "next/image";



export const HoverEffect = ({
  items,
  className,
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  const [offerItems,setOfferItems] = useState(items.filter(i => i.catagory === "Food & Dining"));
  const [loading,setLoading] = useState(false)


  const catagorys =[];
   items.map(item => {
    const i = item.catagory 
    if(catagorys.includes(i)){
      return 
    }else{
      catagorys.push(i)
    }
  });

  const handel_tabs = (category) =>{
    setLoading(true)
    const catagory = category.toLowerCase();
      setTimeout(()=>{
        const show = items.filter(item => (item.catagory).toLowerCase() === catagory) ;
         setOfferItems(show);
         setLoading(false)
      },600)
  }

 

  return (
    <>
       <section>
       {/* <div className="md:flex md:flex-row flex-col gap-2 md:justify-center  hidden  py-6 overflow-x-auto no-scrollbar">
        {
          catagorys.map(item => <span  onClick={(e)=>handel_tabs(e)} key={item} className=" cursor-pointer flex justify-center   min-w-[140px] px-4 py-1 border border-green-900 hover:bg-green-700 hover:text-neutral-100 rounded-md bg-[rgb(64 66 68) ] ">{item} </span>)
        }
            

        </div>


        <div className="md:hidden grid grid-cols-2 gap-2 mt-2">
        {
          catagorys.map(item => <span  onClick={(e)=>handel_tabs(e)} key={item} className=" cursor-pointer flex justify-center  text-xs  min-w-[100px] px-4 py-1 border border-green-900 hover:bg-green-700 hover:text-neutral-100 rounded-md bg-[rgb(64 66 68) ] ">{item} </span>)
        }
            

        </div> */}


          <div className="grid md:grid-cols-6 grid-cols-3 gap-2 place-items-center mt-8  md:p-1 rounded-md border-[#f4f4f4] md:border md:shadow-sm">
                  <div onClick={()=>handel_tabs('Travel and dining')} className="flex flex-col items-center cursor-pointer">
                  <Image src="/images/icons/Travel_Dining.png" alt="Travel and dining" width={100} height={100} className="md:w-28 w-16"/>
                    <h4 className="text-xs font-semibold">Traviling</h4>
                  </div>
                  <div onClick={()=>handel_tabs('Wellbeing')} className="flex flex-col items-center cursor-pointer">
                  <Image src="/images/icons/Wellbeing.png" alt="Wellbeing.png"  width={100} height={100} className="md:w-28 w-16" />
                  <h4 className="text-xs font-semibold">Wellbeing</h4>
                  </div>
                  <div onClick={()=>handel_tabs('Grooming')} className="flex flex-col items-center cursor-pointer">
                  <Image src="/images/icons/Grooming.png" alt="Grooming.png"  width={100} height={100} className="md:w-28 w-16" />
                  <h4 className="text-xs font-semibold">Grooming</h4>
                  </div>
                  <div onClick={()=>handel_tabs('Healthcare')} className="flex flex-col items-center cursor-pointer">
                  <Image src="/images/icons/Healthcare.png" alt="Grooming.png"  width={100} height={100} className="md:w-28 w-16" />
                  <h4 className="text-xs font-semibold">Healthcare</h4>
                  </div>
                  <div onClick={()=>handel_tabs('others')}  className="flex flex-col items-center cursor-pointer">
                  <Image src="/images/icons/others.png" alt="others.png" width={100} height={100} className="md:w-28 w-16" />
                  <h4 className="text-xs font-semibold">Others</h4>
                  </div>
                  <div onClick={()=>handel_tabs('Automobile')} className="flex flex-col items-center cursor-pointer">
                  <Image src="/images/icons/Automobile.png" alt="Grooming.png"  width={100} height={100} className="md:w-28 w-16" />
                  <h4 className="text-xs font-semibold">Automobile</h4>
                  </div>
          </div>
       </section>
          
        <section className="mt-8 min-h-screen overflow-hidden">
        {
          loading ? <h4 className="text-center text-base font-light animate-pulse"> <span className="text-lg ">✣</span> Loading..</h4> :
          offerItems.length < 1 ? <h4 className="text-center text-base font-light">Offer Will be Updating soon 🥰</h4> :
          <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-3  lg:grid-cols-3 gap-3 ",
            className
          )}
        >
            
          { offerItems.map((item, idx) => (
            <Link
              href={`/privilege?catagory=${item.catagory}`}
              key={idx}
              className="flex flex-col items-center bg-slate-100 p-2  rounded-sm shadow-sm gap-3"
            >
              <Image src={item.image.display_url} width={400} height={400} alt="partner card "  className="w-24 h-24 rounded-full"/>
                    
                    <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-center">{item.name}</h3>
                    <p className="text-xs font-semibold text-right">{item.catagory}</p>
                    </div>

                    <div className="text-black flex md:flex-row flex-col gap-2 justify-between w-full">
                    <span className="inline-block px-4 rounded-xl text-xs  backdrop-blur-sm bg-[#fffb113e]">10%</span>
                    <span className="inline-block px-4 rounded-xl text-xs  backdrop-blur-sm bg-[#34db7256]">Cash voucher</span>
                    </div>
            </Link>
          ))}
        </div>
        }
        </section>
    </>
  );
};

export const Card = ({
  className,
  children,
  style,
  img
}) => {
  return (
    <div
        
      className={cn(
        "rounded-2xl h-full max-w-[250px] p-2 overflow-hidden bg-[#f4f2f2] border  dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div style={{Background:`url(${img})`}} className="relative z-50 " >
        <div className="p-2" >{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}) => {
  return (
    <h4 className={cn("text-[#3F3F46]font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
