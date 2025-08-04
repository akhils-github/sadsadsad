"use client";
import Contact from "@/components/popups/ContactForm";
import { footerLinks, serviceCategories } from "@/constants/data/layout";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [openContact, setOpenContact] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Contact isOpen={openContact} setIsOpen={setOpenContact} />
      <footer className="bg-[#14191A] flex flex-col gap-y-5 w-full pt-10 md:pb-8 ">
        <div className="w-full pl-5">
          {/* Service Categories */}
          <div className="grid grid-cols-1 ml-3 lg:ml-0 lg:grid-cols-5 md:grid-cols-3 gap-5 text-center text-sm font-medium py-10 whitespace-nowrap">
            {serviceCategories.map((item, index) => (
              <div key={index} className="flex gap-2 sm:gap-3 items-center">
                <p className="text-yellow-500 sm:hidden">◆</p>
                <Link href={item.slug}>
                  <p className="text-[16px] text-[#FFFFFF] font-medium">
                    {item.label}
                  </p>
                </Link>
                {index < serviceCategories.length - 1 && (
                  <p className="text-yellow-500 hidden sm:block ml-10">◆</p>
                )}
              </div>
            ))}
          </div>

          <hr className="border-gray-300 mb-6" />

          {/* Footer Links */}
          <div className="px-3 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-y-4">
              {footerLinks.map((link, index) => (
                <div key={index}>
                  {link.name.toLowerCase().includes("contact") ? (
                    <button
                      onClick={() => setOpenContact(true)}
                      className="text-sm text-[#FFFFFF] font-medium hover:text-white transition-colors duration-200 leading-none"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-[#FFFFFF] font-medium hover:text-white transition-colors duration-200 leading-none"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-300 my-6" />

          {/* Mobile Footer */}
          <div className="relative w-full text-white py-10 px-4 block md:hidden">
            <Image
              src="/assets/lael.png"
              width={500}
              height={150}
              alt="LAEL Logo"
              className="absolute inset-0 mx-auto opacity-100 z-0 object-contain"
            />
            <div className="relative z-10 flex flex-col gap-4 items-start">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} LAEL Designers. All Rights Reserved.
              </p>
              <div
                onClick={scrollToTop}
                className="flex items-center gap-2 cursor-pointer hover:text-gray-300"
              >
                <ArrowUp className="w-4 h-4" />
                <p className="back-top">Back to top</p>
              </div>
            </div>
          </div>

          {/* Desktop Footer */}
          <div className="hidden md:flex flex-col md:flex-row justify-between items-start h-full footer-paragraph w-full relative">
  {/* Background LAEL logo */}
  <div className="absolute inset-0 flex justify-end items-end pointer-events-none">
    <Image 
      src="/assets/lael.png" 
      width={593} 
      height={177} 
      alt="LAEL Designers background logo" 
      className=" -mt-10"
    />
  </div>
  
  <p className="z-10 relative">
    © {new Date().getFullYear()} LAEL Designers. All Rights Reserved.
  </p>
  
  <div 
    onClick={scrollToTop} 
    className="relative flex cursor-pointer md:items-center mt-10 lg:mr-5 md:mt-0 z-10 md:mr-0 justify-start"
  >
    <ArrowUp className="w-5 h-5" />
    <p className="ml-2 back-top text-white w-[300px] lg:w-auto">
      Back to top
    </p>
  </div>
</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
