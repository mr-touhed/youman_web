import React from 'react';
import { Background } from '../Background';
import { MovingBorderDemo } from '../MovingBorderDemo';
import Image from 'next/image';
import youmanCard from "@/images/tween_card.png";
// icons
import { FcNfcSign,FcSynchronize,FcInspection,FcMultipleDevices    } from "react-icons/fc";
import { FaBarcode } from "react-icons/fa";


const serviceList = [
    {Icon:FcNfcSign ,title:"Integrated NFC", dec:"Tap your card onto a smartphone and instantly share your contact details" },
    {Icon:FaBarcode ,title:"QR tecnology", dec:"No NFC ? No Problem! Scan the QR code using the device camera" },
    {Icon:FcSynchronize ,title:"Convenient", dec:"All the traditional contact information is included" },
    {Icon:FcMultipleDevices ,title:"No App required", dec:"All you need is an active internet connection to the recipient's device" },
]

const NfcSection = () => {
    return (
        <Background >
            <h1 style={{lineHeight:"1.2"}} className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Limitless sharing
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2  text-sm text-center relative z-10">
        NFC Enabled Business card – Tap or Scan to share your contact information
          
        </p>
        
        
       
       
        
        <div className="w-full px-4 grid md:grid-cols-2 grid-cols-1 gap-8 items-center my-8 relative z-10">
                <div className='flex flex-col gap-8'>

                        {
                            serviceList.map(service => <Service key={service.title} service={service}/>)
                        }
                        

                </div>

                <div className='flex flex-col '>
                <Image
          src={youmanCard}
          height="400"
          width="300"
          className="object-cover  w-full inset-0 card_animation"
          alt={''}
        />
                <div className='flex justify-center'>
                <MovingBorderDemo  />
                </div>
                </div>

           </div>
       
        
       
        
        </Background>
    );
};

export default NfcSection;



function Service({service}){
    const {Icon,title,dec} = service
    return (
    <article className='text-white flex items-center gap-4'>
    <div className='rounded-full p-4 icon_shadow bg-[#5C5555]'>
            <Icon className='w-6 h-6'/>
    </div>
    <div >
        <h4 className='text-xl text-neutral-400'>{title}</h4>
        <p className='font-thin text-neutral-500'>{dec}</p>
    </div>
</article>)
}