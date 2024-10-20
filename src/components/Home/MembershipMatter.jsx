import Image from "next/image";
import Link from "next/link";

// Social Icons 
import { FaFacebookF,FaYoutube,FaSquareXTwitter,FaLinkedinIn,FaInstagram,FaBloggerB      } from "react-icons/fa6";
import HeadingAnimation from "../HeadingAnimation";

const SocialMediaArray = [
    {
        id:"3",
        Icon: FaFacebookF,
        link: "https://www.facebook.com/youmanbd",

    },
    {
        id:"4",
        Icon:FaInstagram ,
        link: "https://www.instagram.com/youman.bd",

    },
    {
        id:"5",
        Icon: FaLinkedinIn,
        link: "https://www.linkedin.com/company/youmanbd/",

    },
    {
        id:"6",
        Icon:FaSquareXTwitter ,
        link: "https://x.com/youmanbd",

    },
    {
        id:"2",
        Icon: FaYoutube,
        link: "https://youtube.com/@youmanbd",

    },
    {
        id:"1",
        Icon:FaBloggerB ,
        link:"/blogs" ,

    }
    
    
    
   
    
]


const MembershipMatter = () => {
    return (
        <section className="dot-mask px-3 pt-6">
        <div className="max-w-7xl mx-auto ">
        <div className="space-y-8">
                    <HeadingAnimation>

                    <h1 style={{lineHeight:"1.3"}} className="relative z-10 text-4xl  md:text-7xl line-clamp-3  bg-clip-text text-transparent bg-green-700  text-center font-sans font-bold">
                    Membership that matters
                </h1>
                    </HeadingAnimation>
                <h4 className="sub-heading">
                Youman is for those who aim higher.  
Join a community where ambition meets support. It’s about growth, connection, and reaching for what’s next—always with the support of a like-minded community.

                
                </h4>
        </div>

        <section className="grid grid-cols-3 place-items-center  md:max-w-xl  md:mx-auto gap-3 mt-10 md:mt-20 pb-8 ">
                   
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
    const {Icon,link,id} = media
    return(
        <div className="group">
        <Link href={link} target={id === "1" ? "_blank" : "_parent" } className="p-2 md:mb-8 md:p-4 md:w-36 md:h-36 w-20 h-20 mb-3 bg-black group-hover:bg-transparent rounded-md shadow-md grid place-content-center life_style_card">

                <Icon className="text-white group-hover:text-black w-8 h-8 md:w-16 md:h-16"/>

        </Link>
        </div>
    )
}