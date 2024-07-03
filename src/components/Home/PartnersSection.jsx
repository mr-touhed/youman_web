import { get_catagorys, get_partners } from "@/utils/fetchData";
import { HoverEffect } from "../ui/card-hover-effect";

export async  function PartnersSection() {
  const catagory =await  get_partners()
  return (
    <div className="max-w-5xl  mx-auto px-8 mt-8">
       <h1 style={{lineHeight:"1.3"}} className="relative z-10 text-4xl md:text-7xl line-clamp-3  bg-clip-text text-transparent bg-green-700  text-center font-sans font-bold">
                       Boundless Privilege
                    </h1>
      <HoverEffect items={catagory.data} />
    </div>
  );
}
