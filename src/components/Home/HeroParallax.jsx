"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import youman from "@/images/Pages_img/photo-output.png"
import story from "@/images/Pages_img/Our_story.png"
import Trending from "@/images/Pages_img/Trending_now.png"
import Blogs from "@/images/Pages_img/Blogs.png"
import Partners from "@/images/Pages_img/Partners.png"
import Contact from "@/images/Pages_img/Contact_us.png"
export function HeroParallaxDemo() {
  return <div data-scroll data-scroll-speed="-5">
    <HeroParallax products={products} />
  </div>;
}
export const products = [
  {
    title: "Youman catalyst",
    link: "/privilege?catagory=automobile",
    thumbnail:
    youman,
  },
  {
    title: "Our story",
    link: "/privilege?catagory=Wellbeing",
    thumbnail:
    story,
  },
  {
    title: "Trending now",
    link: "/privilege?catagory=Wellbeing",
    thumbnail:
    Trending,
  },
  {
    title: "Blogs",
    link: "/privilege?catagory=Food & Dining",
    thumbnail:
    Blogs,
  },
  {
    title: "Partners",
    link: "/privilege?catagory=Travel",
    thumbnail:
    Partners,
  },
  {
    title: "Contact us",
    link: "/privilege?catagory=Hotel & Resturant",
    thumbnail:
    Contact,
  },
  

];
