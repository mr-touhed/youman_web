"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import cardImg1 from "@/images/Youman-Website-banner.jpg"
import cardImg2 from "@/images/Youman-2.jpg"
import cardImg3 from "@/images/Youman-3.jpg"
import cardImg4 from "@/images/Youman-4.jpg"
import cardImg5 from "@/images/Youman-6.jpg"
import cardImg6 from "@/images/Youman-7.jpg"
export function HeroParallaxDemo() {
  return <div data-scroll data-scroll-speed="-5">
    <HeroParallax products={products} />
  </div>;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
    cardImg1,
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
    cardImg2,
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
    cardImg3,
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
    cardImg4,
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
    cardImg5,
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
    cardImg6,
  },
  

];
