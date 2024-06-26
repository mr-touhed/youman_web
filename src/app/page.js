


import { HeroParallaxDemo } from "@/components/Home/HeroParallax";
import LifeStyle from "@/components/Home/LifeStyle";
import NfcSection from "@/components/Home/NfcSection";
import { PartnersSection } from "@/components/Home/PartnersSection";
import Reviews from "@/components/Home/Reviews";


export default function Home() {
  return (
   <main className="">
     
      <HeroParallaxDemo/>
       <NfcSection  />
       <LifeStyle />
       <PartnersSection/>
    
       <Reviews/>
   </main>
  );
}
