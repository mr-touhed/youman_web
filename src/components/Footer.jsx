import Link from "next/link";
import React from "react";

// Social Icons 
import { FaFacebookF,FaYoutube,FaSquareXTwitter,FaLinkedinIn,FaInstagram,} from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="relative bg-[#050607] pt-8 mt-6 pb-6 text-[#c7c6c6]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left ">
          <div className="w-full lg:w-6/12 px-3">
            <h4 className="text-3xl fonat-semibold md:text-left text-center  mr-[15px] text-blueGray-700 ">
              Stay connected
            </h4>
           
            <div className="mt-6 lg:mb-0 mb-6 flex justify-center gap-4 items-center md:justify-start ">
              <Link href="https://www.facebook.com/youmanbd" target="_blank"
                className=" text-lightBlue-400 shadow-lg font-normal  items-center justify-center align-center rounded-sm outline-none focus:outline-none mr-2"
                
              >
                <FaFacebookF className="text-white group-hover:text-black w-6 h-6 md:w-16 md:h-16" />
              </Link>
              <Link href="https://www.instagram.com/youman.bd" target="_blank"
                className=" text-lightBlue-400 shadow-lg font-normal  items-center justify-center align-center rounded-sm outline-none focus:outline-none mr-2"
                
              >
                <FaInstagram className="text-white group-hover:text-black w-6 h-6 md:w-16 md:h-16" />
              </Link>
              <Link href="https://www.linkedin.com/company/youmanbd/" target="_blank"
                className=" text-lightBlue-400 shadow-lg font-normal  items-center justify-center align-center rounded-sm outline-none focus:outline-none mr-2"
                
              >
                <FaLinkedinIn className="text-white group-hover:text-black w-6 h-6 md:w-16 md:h-16" />
              </Link>
              <Link href="https://x.com/youmanbd" target="_blank"
                className=" text-lightBlue-400 shadow-lg font-normal  items-center justify-center align-center rounded-sm outline-none focus:outline-none mr-2"
                
              >
                <FaSquareXTwitter className="text-white group-hover:text-black w-6 h-6 md:w-16 md:h-16" />
              </Link>
              <Link href="https://youtube.com/@youmanbd" target="_blank"
                className=" text-lightBlue-400 shadow-lg font-normal  items-center justify-center align-center rounded-sm outline-none focus:outline-none mr-2"
                
              >
                <FaYoutube className="text-white group-hover:text-black w-6 h-6 md:w-16 md:h-16" />
              </Link>
               
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                
                <ul className="list-unstyled space-y-2">
                  
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="/youman-story"
                    >
                      Our story
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="/contact-us"
                    >
                     Be a partner
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm"
                      href="/contact-us"
                    >
                     Contact us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                
                <ul className="list-unstyled space-y-2">
                  
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-1 text-sm"
                      href="/terms-and-conditions"
                    >
                      Terms &amp; conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="/privacy-and-policy"
                    >
                      Privacy policy
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>
              <a
                href="#"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
              >
                {" "}
                Youman
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
