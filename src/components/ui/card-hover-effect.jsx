"use client"
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import dhakaLogo from "@/images/hello_dhaka_logo.png"
// import dhakaLogo from "@/images/a.jpg"
import { Background } from "../Background";
export const HoverEffect = ({
  items,
  className,
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  const [offerItems,setOfferItems] = useState(items.filter(i => i.catagory === "hotel"));

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
    const show = items.filter(item => (item.catagory).toLowerCase() ===catagory) ;
    setOfferItems(show)
  }

  return (
    <>
    <div className="flex gap-2 justify-center py-6 text-white">
        {
          catagorys.map(item => <span  onClick={(e)=>handel_tabs(e)} key={item} className="block cursor-pointer px-4 py-2 border border-slate-700 hover:bg-slate-700 rounded-md bg-[rgb(64 66 68) ] uppercase">{item}</span>)
        }
            

        </div>
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
        
      {offerItems.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
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
          <Card >
            <Image src={dhakaLogo} alt="partner card " />
                <div className="text-white absolute w-full top-0 left-0 flex justify-between">
                <span className="inline-block px-4 rounded-xl animate-pulse  backdrop-blur-sm bg-[#fffb113e]">10%</span>
                <span className="inline-block px-4 rounded-xl animate-pulse delay-100 backdrop-blur-sm bg-[#34db7256]">Cash voucher</span>
                </div>
            <CardTitle>Hello Dhaka</CardTitle>
            <CardDescription>Food & Dining</CardDescription>
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
  style
}) => {
  return (
    <div
        
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div style={{Background:`url(${dhakaLogo})`}} className="relative z-50 " >
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
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
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
