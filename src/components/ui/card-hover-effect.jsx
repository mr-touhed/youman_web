"use client"
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {  useState } from "react";
import Image from "next/image";



export const HoverEffect = ({
  items,
  className,
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  const [offerItems,setOfferItems] = useState(items.filter(i => i.catagory === "Food & Dining"));

  const catagorys =[];
   items.map(item => {
    const i = item.catagory 
    if(catagorys.includes(i)){
      return 
    }else{
      catagorys.push(i)
    }
  });

  const handel_tabs = (e) =>{
    
    const catagory = (e.target.innerText).toLowerCase();
    const show = items.filter(item => (item.catagory).toLowerCase() === catagory) ;
    setOfferItems(show)
  }

  return (
    <>
       <section>
       <div className="md:flex md:flex-row flex-col gap-2 md:justify-center  hidden  py-6 overflow-x-auto no-scrollbar">
        {
          catagorys.map(item => <span  onClick={(e)=>handel_tabs(e)} key={item} className=" cursor-pointer flex justify-center   min-w-[140px] px-4 py-1 border border-green-900 hover:bg-green-700 hover:text-neutral-100 rounded-md bg-[rgb(64 66 68) ] ">{item} </span>)
        }
            

        </div>


        <div className="md:hidden grid grid-cols-2 gap-2 mt-2">
        {
          catagorys.map(item => <span  onClick={(e)=>handel_tabs(e)} key={item} className=" cursor-pointer flex justify-center  text-xs  min-w-[100px] px-4 py-1 border border-green-900 hover:bg-green-700 hover:text-neutral-100 rounded-md bg-[rgb(64 66 68) ] ">{item} </span>)
        }
            

        </div>
       </section>
          
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
        
      {offerItems.map((item, idx) => (
        <Link
          href={`/privilege?catagory=${item.catagory}`}
          key={idx}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-[255px] bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card img={item.image.display_url}>
            <Image src={item.image.display_url} width={400} height={400} alt="partner card " />
                <div className="text-white absolute w-full top-0 left-0 flex justify-between">
                <span className="inline-block px-4 rounded-xl animate-pulse  backdrop-blur-sm bg-[#fffb113e]">10%</span>
                <span className="inline-block px-4 rounded-xl animate-pulse delay-100 backdrop-blur-sm bg-[#34db7256]">Cash voucher</span>
                </div>
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.catagory}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
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
