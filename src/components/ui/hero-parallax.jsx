"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import tween_card from "@/images/tween_card.png"
import { MovingBorderDemo } from "../MovingBorderDemo";
import { TypewriterEffectSmooth } from "./typewriter-effect";
import { useRouter } from 'next/navigation'

import { TypeAnimation } from 'react-type-animation';


export const HeroParallax = ({
  products,
}) => {
  const router = useRouter()
  const firstRow = products.slice(0, 2);
  const secondRow = products.slice(2, 4);
  const thirdRow = products.slice(4, 6);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const changeRoute = (link) =>{
      router.push(link)
  }
  const springConfig = { stiffness: 300, damping: 50, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 5], [0, 200]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 2], [0, -100]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-750, 10]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="md:h-[200vh]  pt-12  overflow-hidden   antialiased relative flex flex-col  [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse pb-2 overflow-x-auto no-scrollbar space-x-reverse space-x-4 mb-4">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              changeRoute={changeRoute}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row overflow-x-auto pb-2 no-scrollbar  mb-4 space-x-4 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
              changeRoute={changeRoute}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse pb-2 overflow-x-auto no-scrollbar space-x-reverse space-x-4 mb-5">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              changeRoute={changeRoute}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="px-4 max-w-7xl relative mx-auto  pt-16  md:px-4 w-full h-[100vh]  z-[2000]  left-0 top-0">
      
      <section className="grid md:grid-cols-[1fr_1fr] grid-cols-1 h-[100%] gap-4 mt-12">
      <div className="flex flex-col gap-8 items-center">
        <div className="space-y-6">

        
                    <h1 className="relative  z-10 md:text-5xl text-[8vw]  font-chirsman text-[#3F3F46]  text-center min-h-[40px]  font-extrabold ">
                 
                  
                  <TypeAnimation
      sequence={[
        'Unlock your world', // Types 'One'
        1000, // Waits 1s
        'Live beyond ordinary', // Deletes 'One' and types 'Two'
        2000,
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={false}
      repeat={Infinity}
      // style={{ fontSize: '2em', display: 'inline-block' }}
      className={`heading font-extrabold  font-crisman tracking-tight  text-nowrap `}
    />
                    
                  </h1>
                 

                    <div className="flex justify-center ">
                    <TypewriterEffectSmooth className="text-7xl" words={[{
                  text: "Youman",
                }]} />
        </div>
        </div>
       
      <Image
          src="/images/banner_img.png"
          height={800}
          width={1200}
          className="object-cover w-full h-auto md:hidden block  "
          alt={''}
        />
        
        
      <div className="flex md:flex-col flex-col-reverse md:gap-16">
      <p className="max-w-2xl text-justify font-light font-crisman text-base md:text-xl mt-8 dark:text-neutral-200">
      Youman is more than just access—it’s a lifestyle.  
Exclusive privileges, premium experiences, and a community that empowers you to reach new heights.

      </p>
     
      <div className="w-full  flex justify-center  ">
      <Link href="/checkout">
      <MovingBorderDemo className='font-crisman bg-green-700 from-neutral-200 ' />
      </Link>
      </div>
      </div>
     
      </div>
      <Image
          src="/images/banner_img.png"
          height={1200}
          width={800}
          className="object-cover w-full h-auto hidden md:block  "
          alt={''}
        />
      </section>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  changeRoute
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -30,
      }}
      key={product.title}
      className="group/product h-92 md:w-[35rem] w-[15rem] mx-auto relative flex-shrink-0 shadow-md rounded-md overflow-hidden shadow-slate-200"
    >
      <button
       onClick={()=>changeRoute(product.link)} 
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail} 
          height="400"
          width="400"
          className="object-cover  w-full inset-0"
          alt={product.title}
        />
      </button>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
