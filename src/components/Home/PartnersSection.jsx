import { ThreeDCardDemo } from "./_components/ThreeDCardDemo";

import travel from "../../images/privilege_card/Youman_Trave.jpg"
import Wellbeing from "../../images/privilege_card/youman_fitness.jpg"
import Healthcare from "../../images/privilege_card/youman_healthCare.jpg"
import Automobile from "../../images/privilege_card/Youman_Automobile.jpg"
import Grooming from "../../images/privilege_card/youman_fitness.jpg"
import Others from "../../images/privilege_card/Youman_ourStore.jpg"
import HeadingAnimation from "../HeadingAnimation";


export async function PartnersSection() {
  const services = [
    {
      name:"Travel and Dining",
      link:"/privilege?catagory=Travel+and+Dining",
      img:travel,
    },
    {
      name:"Wellbeing",
      link:"/privilege?catagory=Wellbeing",
      img:Wellbeing
    },
    {
      name:"Grooming",
      link:"/privilege?catagory=Grooming",
      img:Grooming
    },
    {
      name:"Healthcare",
      link:"/privilege?catagory=Healthcare",
      img:Healthcare
    },
    {
      name:"Automobile",
      link:"/privilege?catagory=Automobile",
      img:Automobile
    },
    {
      name:"Others",
      link:"/privilege?catagory=Others",
      img:Others
    },

  ]

  return (
    <div className="max-w-5xl  mx-auto px-3 my-16">
          <HeadingAnimation>
                  <h1
                    style={{ lineHeight: "1.3" }}
                    className="relative z-10 text-4xl md:text-7xl line-clamp-3  bg-clip-text text-transparent bg-green-700  text-center font-sans font-bold"
                  >
                    Boundless Privilege
                  </h1>
                  </HeadingAnimation>
                  <div className="text-justify text-base space-y-4">
                    <h4 className="sub-heading">
                      More than a card—it’s your key to exclusive opportunities.
                    </h4>
                    <p>
                      Youman is your key to unlocking exclusive opportunities. From
                      restaurant, travel, healthcare to premium lifestyle perks, it’s
                      designed for those who expect more.
                    </p>
                  </div>

                  <section className="grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-3  mt-8">
                      
                      {
                        services.map(servic => <ThreeDCardDemo  key={servic.name} servic={servic}/>)
                      }
                  </section>
    </div>
  );
}
