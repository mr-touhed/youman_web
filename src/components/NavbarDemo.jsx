"use client";
import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { Menu, MenuItem } from "./ui/navbar-menu";



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
      {/* <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
       
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu> */}

<Menu setActive={setActive}>
<Link href="/">Home</Link>
<Link href="/blogs">Blogs</Link>
<Link href="/about">About</Link>
</Menu>
      
    </div>)
  );
}

export default Navbar;