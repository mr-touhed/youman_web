import { Background } from "@/components/Background";
import { CustomerReview } from "@/components/CustomerReview";

import { HeroParallaxDemo } from "@/components/HeroParallax";
import { PartnersSection } from "@/components/PartnersSection";


export default function Home() {
  return (
   <main className="">
     
      <HeroParallaxDemo/>
       <Background/>
       <PartnersSection/>
       <CustomerReview/>
   </main>
  );
}
