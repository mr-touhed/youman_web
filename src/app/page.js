


import { HeroParallaxDemo } from "@/components/Home/HeroParallax";
import InfinitePossibilities from "@/components/Home/InfinitePossibilities";
import MembershipMatter from "@/components/Home/MembershipMatter";
import NfcSection from "@/components/Home/NfcSection";
import { PartnersSection } from "@/components/Home/PartnersSection";
import Reviews from "@/components/Home/Reviews";


export default function Home() {
  return (
   <main className="space-y-8">
     
      <HeroParallaxDemo/>
       <InfinitePossibilities />
       <NfcSection  />
       <PartnersSection/>
        <MembershipMatter/>
       <Reviews/>
   </main>
  );
}
