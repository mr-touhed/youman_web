"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import youman from "@/images/Pages_img/Youmancatalyst.png"
import story from "@/images/Pages_img/Ourstory.png"
import Trending from "@/images/Pages_img/Trendingnow.png"
import Blogs from "@/images/Pages_img/Blogs.png"
import Partners from "@/images/Pages_img/Partners.png"
import Contact from "@/images/Pages_img/Contactus.png"
export function HeroParallaxDemo() {
  return <div data-scroll data-scroll-speed="-5">
    <HeroParallax products={products} />
  </div>;
}
export const products = [
  {
    title: "Youman catalyst",
    link: "/checkout",
    thumbnail:
    youman,
  },
  {
    title: "Our story",
    link: "/youman-story",
    thumbnail:
    story,
  },
  {
    title: "Trending now",
    link: "/trending-now",
    thumbnail:
    Trending,
  },
  {
    title: "Blogs",
    link: "/blogs",
    thumbnail:
    Blogs,
  },
 
  {
    title: "Contact us",
    link: "/contact-us",
    thumbnail:
    Contact,
  },
  {
    title: "Partners",
    link: "/privilege",
    thumbnail:
    Partners,
  }

];
