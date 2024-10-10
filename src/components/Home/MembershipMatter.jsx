import Image from "next/image";
import Link from "next/link";

// Social Icons 
import { FaFacebookF,FaYoutube,FaSquareXTwitter,FaLinkedinIn,FaInstagram,FaBloggerB      } from "react-icons/fa6";

const SocialMediaArray = [
    {
        id:"1",
        Icon:FaBloggerB ,
        link:"/blogs" ,

    },
    {
        id:"2",
        Icon: FaYoutube,
        link: "/",

    },
    {
        id:"3",
        Icon: FaFacebookF,
        link: "/",

    },
    {
        id:"4",
        Icon:FaInstagram ,
        link: "/",

    },
    {
        id:"5",
        Icon: FaLinkedinIn,
        link: "/",

    },
    {
        id:"6",
        Icon:FaSquareXTwitter ,
        link: "/",

    },
]


const MembershipMatter = () => {
    return (
        <section className="dot-mask px-3 pt-6">
        <div className="max-w-7xl mx-auto ">
        <div>
                    <h1 style={{lineHeight:"1.3"}} className="relative z-10 text-4xl md:text-7xl line-clamp-3  bg-clip-text text-transparent bg-green-700  text-center font-sans font-bold">
                    Membership That Matters
                </h1>
                <h4 className="sub-heading">
                Youman is for those who aim higher.  
Join a community where ambition meets support. It’s about growth, connection, and reaching for what’s next—always with the support of a like-minded community.

                
                </h4>
        </div>

        <section className="grid grid-cols-3 place-items-center gap-3 mt-10 md:mt-24 pb-8 ">
                   
                   {
                    SocialMediaArray.map(media => <SocialCard key={media.id} media={media}/>)
                   }
                    
                    

        </section>
        
        
        </div>
    </section>
    );
};

export default MembershipMatter;




function SocialCard({media}){
    const {Icon,link} = media
    return(
        <Link href={`/`} className="p-2 md:p-4 w-full h-20 bg-black rounded-md shadow-md grid place-content-center">

                <Icon className="text-white w-8 h-8"/>

        </Link>
    )
}