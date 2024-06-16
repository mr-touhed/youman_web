import { HoverEffect } from "../ui/card-hover-effect";

export function PartnersSection() {
  return (
    <div className="max-w-5xl  mx-auto px-8">
       <h1 style={{lineHeight:"1.3"}} className="relative z-10 text-4xl md:text-7xl line-clamp-3  bg-clip-text text-transparent bg-green-700  text-center font-sans font-bold">
                       Boundless Privilege
                    </h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/privilege",
    catagory:"health"
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "/privilege",
    catagory:"health"
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "/privilege",
    catagory:"hotel"
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "/privilege",
    catagory:"resturent"
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "/privilege",
    catagory:"resturent"
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "/privilege",
    catagory:"resturent"
  },
];
