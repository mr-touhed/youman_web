import { ThreeDCardDemo } from "./_components/ThreeDCardDemo";

export async function PartnersSection() {
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

                  <section>
                      <ThreeDCardDemo/>

                  </section>
    </div>
  );
}
