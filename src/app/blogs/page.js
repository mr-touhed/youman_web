import Image from 'next/image';
import React from 'react';
import { BlogSection } from './_components/BlogSection';

const BlogPage = () => {
    return (
        <>
        <section className='w-full h-[400px] overflow-hidden bg-[#EFF3FF]'>
                <Image src="/images/blog_banner.jpg" alt="" width={1200} height={700} className='w-full object-contain h-[400px] '/>
        </section>
        <section>
                <BlogSection/>
        </section>
        </>
    );
};

export default BlogPage;