"use client";
import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";



export function NavbarDemo() {
  return (
    (<div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
     
    </div>)
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed top-10 inset-x-0 max-w-7xl mx-auto z-50", className)}>
      
        <div className="md:hidden block">
        <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm font-semibold ">
            <HoveredLink href="/web-dev">Youman catalyst</HoveredLink>
            <HoveredLink href="/youman-story">Our story</HoveredLink>
            <HoveredLink href="/trending-now">Trending now</HoveredLink>
            <HoveredLink href="/blogs">Blogs</HoveredLink>
            <HoveredLink href="/privilege">Partners</HoveredLink>
            <HoveredLink href="/branding">Contact us</HoveredLink>
          </div>
        </MenuItem>
       
       
      </Menu>
        </div>

          <div className="md:block hidden text-lg font-semibold ">
          <Menu setActive={setActive}>
<Link href="/web-dev">Youman catalyst</Link>
<Link href="/youman-story">Our story</Link>
<Link href="/trending-now">Trending now</Link>
<Link href="/blogs">Blogs</Link>
<Link href="/privilege">Partners</Link>
<Link href="/branding">Contact us</Link>
</Menu>
          </div>
      
    </div>)
  );
}

export default Navbar;