"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export function MovingBorderDemo({className}) {
  return (
    
      
        <Button
        borderRadius="1rem"
        className={` dark:bg-gradient-to-b from-#000000c7 to-#ffffff40 backdrop-blur-sm shadow-2xl text-white dark:text-black font-bold font-assistant border-neutral-200 dark:border-slate-800 ${className}`}
      >
        GET IT
      </Button>
     
    
  );
}
