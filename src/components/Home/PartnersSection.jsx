import { ThreeDCardDemo } from "./_components/ThreeDCardDemo";

export async function PartnersSection() {
  const services = [
    {
      name:"Travel and Dining",
      link:"/"
    },
    {
      name:"Wellbeing",
      link:"/"
    },
    {
      name:"Grooming",
      link:"/"
    },
    {
      name:"Healthcare",
      link:"/"
    },
    {
      name:"Automobile",
      link:"/"
    },
    {
      name:"Others",
      link:"/"
    },

  ]

  return (
    <div className="max-w-5xl  mx-auto px-8 my-16">
                  <h1
                    style={{ lineHeight: "1.3" }}
                    className="relative z-10 text-4xl md:text-7xl line-clamp-3  bg-clip-text text-transparent bg-green-700  text-center font-sans font-bold"
                  >
                    Boundless Privilege
                  </h1>
                  <div className="text-justify text-base space-y-4">
                    <p className="text-center">
                      More than a card—it’s your key to exclusive opportunities.
                    </p>
                    <p className="">
                      Youman is your key to unlocking exclusive opportunities. From
                      restaurant, travel, healthcare to premium lifestyle perks, it’s
                      designed for those who expect more.
                    </p>
                  </div>

                  <section className="grid md:grid-cols-3 grid-cols-2 gap-4 mt-16">
                      
                      {
                        services.map(servic => <ThreeDCardDemo key={servic.name} link={servic.link} name={servic.name}/>)
                      }
                  </section>
    </div>
  );
}
