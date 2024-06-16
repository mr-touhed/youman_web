"use client"
import React from 'react';
import { Background } from '../Background';
import { MovingBorderDemo } from '../MovingBorderDemo';
import Image from 'next/image';
import youmanCard from "@/images/tween_card.png";
// icons
import { FcNfcSign,FcSynchronize,FcMultipleDevices    } from "react-icons/fc";
import { IoQrCodeOutline } from "react-icons/io5";
import { motion, } from 'framer-motion';
import AnimatedImage from '../AnimatedImage';


const serviceList = [
    {Icon:FcNfcSign ,title:"Integrated NFC", dec:"Tap your card onto a smartphone and instantly share your contact details" },
    {Icon:IoQrCodeOutline ,title:"QR tecnology", dec:"No NFC ? No Problem! Scan the QR code using the device camera" , c:true },
    {Icon:FcSynchronize ,title:"Convenient", dec:"All the traditional contact information is included" },
    {Icon:FcMultipleDevices ,title:"No App required", dec:"All you need is an active internet connection to the recipient's device" },
]

const NfcSection = () => {
   
    return (
        <section className='dot-mask   '>
            <div className='max-w-7xl mx-auto py-12'>
            <h1 style={{lineHeight:"1.3"}} className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-green-700 text-center font-sans font-bold">
            Limitless sharing
        </h1>
        <p className="text-neutral-800 max-w-lg mx-auto my-2  text-xl text-center relative z-10">
        NFC Enabled Business card – Tap or Scan to share your contact information
          
        </p>
        
        
       
       
        
        <div className="w-full px-4 grid md:grid-cols-2 grid-cols-1 gap-8 items-center my-8 relative z-10">
                <div className='flex flex-col gap-8'>

                        {
                            serviceList.map(service => <Service key={service.title} service={service}/>)
                        }
                        

                </div>

                <div className='grid grid-cols-1 gap-16 items-center justify-center overflow-x-hidden'>
                    
                   <motion.div
                   initial={{ translateX: "100%" }}
                   whileInView={{ translateX: 0 }}
                   transition={{ delay: 0.5,duration: 0.3 }}
                   className=''
                   >
                <AnimatedImage/>
        </motion.div> 
                <div className='flex  justify-center'>
                <MovingBorderDemo  className="text-neutral-200 bg-green-700 "/>
                </div>
                </div>

           </div>
       
        
       
        
        </div>
        </section>
    );
};

export default NfcSection;



function Service({service}){
    const {Icon,title,dec,c} = service
    return (
    <article className='text-[#09090c] flex items-center gap-4'>
    <div className='rounded-full p-4 icon_shadow bg-[#5C5555]'>
            <Icon className={`text-white w-6 h-6`} />
    </div>
    <div >
        <h4 className='text-xl '>{title}</h4>
        <p className='font-thin '>{dec}</p>
    </div>
</article>)
}