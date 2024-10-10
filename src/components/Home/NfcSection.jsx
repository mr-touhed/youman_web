"use client"
import React from 'react';
import { MovingBorderDemo } from '../MovingBorderDemo';


import { motion, } from 'framer-motion';
import AnimatedImage from '../AnimatedImage';
import Link from 'next/link';
import { LinkPreview } from '../ui/link-preview';

// icons
import QRicon from "../../images/icon_img/qr.png"
import no_app from "../../images/icon_img/no_app.png"
import NFC from "../../images/icon_img/NFC.png"
import convenient from "../../images/icon_img/convenient.png"
import Image from 'next/image';

const serviceList = [
    {Icon:QRicon ,title:"Integrated NFC", dec:"Tap your card onto a smartphone and instantly share your contact details" },
    {Icon:NFC ,title:"QR tecnology", dec:"No NFC ? No Problem! Scan the QR code using the device camera" , c:true },
    {Icon:convenient ,title:"Convenient", dec:"All the traditional contact information is included" },
    {Icon:no_app ,title:"No App required", dec:"All you need is an active internet connection to the recipient's device" },
]

const NfcSection = () => {
   
    return (
        <section className='dot-mask px-4  min-h-screen'>
            <div className='max-w-7xl mx-auto py-12 space-y-8'>
            <h1 style={{lineHeight:"1.3"}} className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-green-700 text-center font-sans font-bold">
            Aspire, Connect, Grow
        </h1>
        <h4 className="sub-heading">
        With one tap, your world opens up. Share your profile, connect with others, and unlock experiences in an instant.  
Youman gives you a platform to explore the best life has to offer—anytime, anywhere

          
        </h4>
        
        
       
       
        
        <div className="w-full  grid md:grid-cols-2 grid-cols-1 gap-8 items-center my-16 relative z-10 ">
                <div className='flex flex-col gap-8'>

                        {
                            serviceList.map(service => <LinkPreview  key={service.title} imageSrc='/images/nfc_tap.png' ><Service  service={service}/></LinkPreview> )
                        }
                        

                </div>

                <div className='grid grid-cols-1 gap-4 px-8 items-center justify-center overflow-x-hidden'>
                    
                   <motion.div
                   initial={{ translateX: "100%" }}
                   whileInView={{ translateX: 0 }}
                   transition={{ delay: 0.5,duration: 0.3 }}
                   className=''
                   >
                <AnimatedImage/>
        </motion.div> 
                
                <Link className='flex  justify-center' href="/checkout">
                <MovingBorderDemo  className="text-neutral-200 bg-green-700 "/>
                </Link>
                
                </div>

           </div>
       
        
       
        
        </div>
        </section>
    );
};

export default NfcSection;



function Service({service}){
    const {Icon,title,dec,} = service
    return (
    <article className='text-[#09090c] flex items-center gap-4'>
    <div className=' md:p-3 p-2 icon_shadow bg-green-700 rounded-md'>
            <Image src={Icon} alt="Icon" width={1000} height={700} className="md:w-9 md:h-8 w-8 h-5"/>
    </div>
    <div >
        <h4 className='text-xl '>{title}</h4>
        <p className='font-thin '>{dec}</p>
    </div>
</article>)
}