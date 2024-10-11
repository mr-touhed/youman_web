import Link from "next/link";
import React from "react";

// Social Icons 
import { FaFacebookF,FaYoutube,FaSquareXTwitter,FaLinkedinIn,FaInstagram,FaBloggerB      } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="relative bg-[#050607] pt-8 mt-6 pb-6 text-[#c7c6c6]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left pb-6">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700 ">
              Stay Connected!
            </h4>
           
            <div className="mt-6 lg:mb-0 mb-6 grid md:grid-cols-6 grid-cols-3 gap-2 justify-items-start ">
              <button
                className=" text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-sm outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaFacebookF className="text-white group-hover:text-black w-8 h-8 md:w-16 md:h-16" />
              </button>
              <button
                className=" text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-sm outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaYoutube className="text-white group-hover:text-black w-8 h-8 md:w-16 md:h-16" />
              </button>
              <button
                className=" text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-sm outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaSquareXTwitter className="text-white group-hover:text-black w-8 h-8 md:w-16 md:h-16" />
              </button>
              <button
                className=" text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-sm outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaLinkedinIn className="text-white group-hover:text-black w-8 h-8 md:w-16 md:h-16" />
              </button>
              <button
                className=" text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-sm outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaInstagram className="text-white group-hover:text-black w-8 h-8 md:w-16 md:h-16" />
              </button>
              <button
                className=" text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-sm outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaBloggerB className="text-white group-hover:text-black w-8 h-8 md:w-16 md:h-16" />
              </button>
             
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                
                <ul className="list-unstyled">
                  
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="/our-story"
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="/contact-us"
                    >
                     Be A Partners
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="/contact-us"
                    >
                     Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                
                <ul className="list-unstyled">
                  
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
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
