"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function Background({bgColor,children }) {
  return (
    <div className={`min-h-[100vh] w-full mt-16  ${bgColor} relative flex flex-col items-center justify-center antialiased`}>
      <div className="py-8 max-w-6xl">
        {children}
      </div>
      <BackgroundBeams />
    </div>
  );
}
