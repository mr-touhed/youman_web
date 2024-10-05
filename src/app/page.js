


import { HeroParallaxDemo } from "@/components/Home/HeroParallax";
import LifeStyle from "@/components/Home/LifeStyle";
import MembershipMatter from "@/components/Home/MembershipMatter";
import NfcSection from "@/components/Home/NfcSection";
import { PartnersSection } from "@/components/Home/PartnersSection";
import Reviews from "@/components/Home/Reviews";


export default function Home() {
  return (
   <main className="space-y-36">
     
      <HeroParallaxDemo/>
       <LifeStyle />
       <NfcSection  />
       <PartnersSection/>
        <MembershipMatter/>
       <Reviews/>
   </main>
  );
}
