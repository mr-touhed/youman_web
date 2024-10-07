import Image from "next/image";


const MembershipMatter = () => {
    return (
        <section className="dot-mask px-4 ">
        <div className="max-w-7xl mx-auto ">
        <div>
                    <h1 style={{lineHeight:"1.3"}} className="relative z-10 text-4xl md:text-7xl line-clamp-3  bg-clip-text text-transparent bg-green-700  text-center font-sans font-bold">
                    Membership That Matters
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-base text-center relative z-10">
                Youman is for those who aim higher.  
Join a community where ambition meets support. It’s about growth, connection, and reaching for what’s next—always with the support of a like-minded community.

                
                </p>
        </div>

        <div className="grid grid-cols-3 place-items-center gap-8 mt-10 md:mt-24 pb-8">
                    <div className="cursor-pointer">
                        <Image src="/images/icons/blogging.png" alt="blog" width={300} height={300} className="md:w-32"/>
                    </div>
                    <div className="cursor-pointer">
                        <Image src="/images/icons/youtube.png" alt="youtube.png" width={300} height={300} className="md:w-32"/>
                    </div>
                    <div className="cursor-pointer">
                        <Image src="/images/icons/facebook.png" alt="facebook.png" width={300} height={300} className="md:w-32"/>
                    </div>
                    

        </div>
        
        
        </div>
    </section>
    );
};

export default MembershipMatter;