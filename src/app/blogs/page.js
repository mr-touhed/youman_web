import Image from 'next/image';
import React from 'react';
import { BlogSection } from './_components/BlogSection';
import banner from "@/images/Pages_img/Blogs.png"
const BlogPage = () => {
    return (
        <>
        <section className='w-full md:h-[400px] overflow-hidden bg-[#EFF3FF]'>
                <Image src={banner} alt="" width={1200} height={700} className='w-full object-contain md:h-[400px] '/>
        </section>
        <section>
                <BlogSection/>
        </section>
        </>
    );
};

export default BlogPage;