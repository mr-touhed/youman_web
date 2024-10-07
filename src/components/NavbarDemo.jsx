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
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Youman Catalyst</HoveredLink>
            <HoveredLink href="/interface-design">Creations</HoveredLink>
            <HoveredLink href="/seo">Blogs</HoveredLink>
            <HoveredLink href="/branding">Partners</HoveredLink>
            <HoveredLink href="/branding">Contact us</HoveredLink>
          </div>
        </MenuItem>
       
       
      </Menu>
        </div>

          <div className="md:block hidden">
          <Menu setActive={setActive}>
<Link href="/catalyst">Youman Catalyst</Link>
<Link href="/creations">Creations</Link>
<Link href="/about">Blogs</Link>
<Link href="/privilege">Partners</Link>
<Link href="/about">Contact us</Link>
</Menu>
          </div>
      
    </div>)
  );
}

export default Navbar;