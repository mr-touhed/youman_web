"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";


import Link from "next/link";

export function ThreeDCardDemo({servic}) {

  const {name,link,img} = servic
  return (
    (<Link href={link} className="service_card">
    <CardContainer className="inter-var w-full ">
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl md:p-6 p-2 border  ">
        <CardItem
          translateZ="50"
          className="md:text-xl md:h-auto  text-green-700 dark:text-white   font-bold text-center w-full">
          {name}
        </CardItem>
        
        <CardItem translateZ="100" className="w-full mt-2">
          <Image
            src={img}
            height={1000}
            width={600}
            className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        
      </CardBody>
    </CardContainer>
    </Link>)
  );
}
