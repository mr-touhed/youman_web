


import { HeroParallaxDemo } from "@/components/Home/HeroParallax";
import InfinitePossibilities from "@/components/Home/InfinitePossibilities";
import MembershipMatter from "@/components/Home/MembershipMatter";
import NfcSection from "@/components/Home/NfcSection";
import { PartnersSection } from "@/components/Home/PartnersSection";
import Reviews from "@/components/Home/Reviews";
import SEO from "@/components/SEO";


export default function Home() {
  return (
    <>
    <SEO/>
    
   
   <main className="space-y-8">
     
      <HeroParallaxDemo/>
       <InfinitePossibilities />
       <NfcSection  />
       <PartnersSection/>
        <MembershipMatter/>
       <Reviews/>
   </main>
   </>
  );
}
