"use client";

import Image from "next/image";
import React from "react";

import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo({name,link}) {
  return (
    (<CardContainer className="w-full relative">
      <CardBody
        className="bg-gray-50 flex flex-col justify-center   space-y-6 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:h-64 h-32  rounded-xl p-3 border  ">
        
        
        <CardItem translateZ="100" className="w-full mt-4">
                    <h4 className="md:text-3xl font-bold text-center ">{name}</h4>
        </CardItem>
        
        <CardItem
            translateZ={20}
            as="button"
            className="px-4 absolute bottom-0 left-0 rounded-t-none py-2 rounded-md  dark:bg-white dark:text-black text-white text-xs font-bold grid place-content-center w-full">
                    <Link href={link} className="Details ">opportunities</Link>
          </CardItem>
      </CardBody>
    </CardContainer>)
  );
}
