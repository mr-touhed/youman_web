"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Image from "next/image";
import youmanCard from "@/images/tween_card.png"
import { MovingBorderDemo } from "./MovingBorderDemo";
export function Background() {
  return (
    <div className="min-h-[100vh] w-full mt-16  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          NFC Card
        </h1>
       
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        NFC Enabled Business card – Tap or Scan to share your contact information
          
        </p>
        <div>
        <div className="w-full flex justify-center my-8 relative z-10">
        <MovingBorderDemo />
           </div>
        </div>
        
        <Image
          src={youmanCard}
          height="600"
          width="600"
          className="object-cover  w-full inset-0 card_animation"
          alt={''}
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
