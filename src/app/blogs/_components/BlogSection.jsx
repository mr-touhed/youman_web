
"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useId } from "react";
import { IoIosSearch } from "react-icons/io";
import { format } from 'date-fns';
export function BlogSection({posts}) {


  const [search,setSearch] = useState('')
  const [blogItems,setBlogItems] = useState(posts);
  
  const [count,setCount] =  useState(4)
  useEffect(() => {
    if (search) {
      const debounceSearch = setTimeout(() => {
        const lowerCaseTerm = search.toLowerCase();

        const showItem = posts.filter(item => {
          return (
            item.title.toLowerCase().includes(lowerCaseTerm) ||
            item.content.toLowerCase().includes(lowerCaseTerm) ||
            item.labels.some(label => label.toLowerCase().includes(lowerCaseTerm))
          );
        });

        setBlogItems(showItem);
      }, 300); // Debounce search by 300ms

      return () => clearTimeout(debounceSearch);
    } else {
      setBlogItems(posts); // Reset to full posts when search is empty
    }
  }, [search, posts]);



  return (
    (<div >
      
      <div className="py-10 md:w-[500px] px-6 mx-auto relative">
      <input onChange={(e)=>setSearch(e.target.value)} value={search} type="search" placeholder="search" className="w-full pl-10 outline-0 placeholder:text-center py-2 rounded-md   border border-green-300 mx-auto " />
        <IoIosSearch className="text-green-400 w-6 h-6 absolute md:left-8 left-9 top-[50%] -translate-y-[10px]"/>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-4 max-w-7xl mx-auto relative">
        {blogItems.slice(0,count).map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden">
              
            <Grid size={20} />
            <Image src={feature.image} alt="" width={600} height={400} className="h-[150px] object-fill"/>
            <h3
              className="text-base font-bold text-green-700  dark:text-white relative z-20">
              {feature.title}
            </h3>
            <p
              className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.content}
            </p>
            <div className="flex justify-between items-center ">
              <p className="text-xs italic">{    format(new Date(feature.published), "dd MMMM yyyy")}</p>
            <Link href={feature.url} className="text-right block min-w-[50px] text-green-700 text-xs uppercase my-4" >Read more...</Link>
            </div>
            <div className="flex justify-evenly flex-wrap gap-2  ">
               {feature.labels.map(label => <span key={label} onClick={()=>setSearch(label)}  className="cursor-pointer text-xs border p-[2px]  bg-gray-100 rounded-md font-bold ">{label}</span>) }
            </div>
          </div>
        ))}
      </div>
        <div className="mt-16">
                    {(blogItems.length > 4 && blogItems.length > count) && (
                <button 
                    onClick={() => setCount(c => c + 4)} 
                    className="w-24 h-8 block mx-auto border-black shadow rounded-md border text-black text-sm">
                    See more
                </button>
            )}
        </div>
    </div>)
  );
}

// const grid = [
//   {
//     title: "HIPAA and SOC2 Compliant",
//     description:
//       "Our applications are HIPAA and SOC2 compliant, your data is safe with us, always.",
//       tag:'health'
//   },
//   {
//     title: "Automated Social Media Posting",
//     description:
//       "Schedule and automate your social media posts across multiple platforms to save time and maintain a consistent online presence.",
//       tag:'health'
//   },
//   {
//     title: "Advanced Analytics",
//     description:
//       "Gain insights into your social media performance with detailed analytics and reporting tools to measure engagement and ROI.",
//       tag:'health'
//   },
//   {
//     title: "Content Calendar",
//     description:
//       "Plan and organize your social media content with an intuitive calendar view, ensuring you never miss a post.",
//       tag:'health'
//   },
//   {
//     title: "Audience Targeting",
//     description:
//       "Reach the right audience with advanced targeting options, including demographics, interests, and behaviors.",
//       tag:'health'
//   },
//   {
//     title: "Social Listening",
//     description:
//       "Monitor social media conversations and trends to stay informed about what your audience is saying and respond in real-time.",
//       tag:'health'
//   },
//   {
//     title: "Customizable Templates",
//     description:
//       "Create stunning social media posts with our customizable templates, designed to fit your brand's unique style and voice.",
//       tag:'health'
//   },
//   {
//     title: "Collaboration Tools",
//     description:
//       "Work seamlessly with your team using our collaboration tools, allowing you to assign tasks, share drafts, and provide feedback in real-time.",
//       tag:'health'
//   },
// ];

export const Grid = ({
  pattern,
  size
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    (<div
      className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div
        className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10" />

          
      </div>
    </div>)
  );
};

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}) {
  const patternId = useId();

  return (
    (<svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height} />
          ))}
        </svg>
      )}
    </svg>)
  );
}


