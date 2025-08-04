"use client";
import useScroll from "@/hook/useScroll";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/popups/ContactForm";
import React, { useState } from "react";
import { Bell, ChevronDown, Mail, Menu, Power, Search, X } from "lucide-react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { navLinks } from "@/constants/data/layout";
import { includesSlug } from "@/utils/convertion";
import { usePathname } from "next/navigation";

// Animated Hamburger Component
const AnimatedHamburger = ({ isOpen, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-md p-2.5 relative w-10 h-10"
    >
      <span className="sr-only">{isOpen ? 'Close menu' : 'Open main menu'}</span>
      <div className={`w-6 h-6 relative flex flex-col justify-center items-center transition-all duration-300 ${
  isOpen ? 'translate-x-[20px]' : ''
}`}>
        {/* Top line */}
        <span
          className={`block absolute h-0.5 w-6 transform transition duration-300 ease-in-out ${
            isOpen 
              ? 'rotate-45 translate-y-0 bg-gray-700' 
              : '-translate-y-2 bg-gray-700'
          }`}
        />
        {/* Middle line */}
        <span
          className={`block absolute h-0.5 w-6 transform transition duration-300 ease-in-out ${
            isOpen 
              ? 'opacity-0 bg-gray-700' 
              : 'opacity-100 bg-gray-700'
          }`}
        />
        {/* Bottom line */}
        <span
          className={`block absolute h-0.5 w-6 transform transition duration-300 ease-in-out ${
            isOpen 
              ? '-rotate-45 translate-y-0 bg-gray-700' 
              : 'translate-y-2 bg-gray-700'
          }`}
        />
      </div>
    </button>
  );
};

export const Header = () => {
  const scrollPosition = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    if (!mobileMenuOpen) {
      // Opening: First animate hamburger, then show menu
      setMobileMenuOpen(true);
      setTimeout(() => {
        setShowMenu(true);
      }, 200); // Delay matches hamburger animation duration
    } else {
      // Closing: Hide menu first, then animate hamburger
      setShowMenu(false);
      setTimeout(() => {
        setMobileMenuOpen(false);
      }, 100); // Small delay for smooth closing
    }
  };

  return (
    <>
      <Contact isOpen={openContact} setIsOpen={setOpenContact} />
      <header
        className={`fixed inset-x-0 top-0 z-10 h-20 bg-[#14191A] text-white ${
          scrollPosition > 70 ? "" : ""
        }`}
      >
        <nav
          aria-label="Global"
          className=" flex pl-10 justify-between items-center gap-x-10 h-full"
        >
          <Link href="/" className="relative z-10 group">
            <span className="sr-only">Lael Designers</span>
            <Image
              alt={"/logo/logo-main.png"}
              src={"/logo/logo-main.png"}
              width={140}
              height={60}
              objectFit="contain"
              className="object-contain h-20 w-36  transition-transform duration-400"
            />
            {/* <div className=" hover:inline-block absolute w-32 h-20 -z-10 -bottom-3.5 -right-2 bg-primary-500   opacity-0 transition-opacity duration-400 group-hover:opacity-100"></div> */}
          </Link>
          
          {/* Animated Hamburger Menu Button */}
          <div className="flex lg:hidden ml-auto text-gray-700 mr-3">
            <AnimatedHamburger
              isOpen={mobileMenuOpen}
              onClick={handleMenuToggle}
            />
          </div>
          
          <PopoverGroup className="hidden items-center lg:flex lg:gap-x-7  h-full ">
            {navLinks?.map((menu) => (
              <React.Fragment key={menu?.id}>
                {menu?.subMenu ? (
                  <Popover className="relative">
                    {({ open, close }) => (
                      <>
                        {/* <PopoverButton className="focus-within:bg-gray-00 flex items-center gap-x-1 navbar-heading ">
                          {menu?.name}
                          <ChevronDown
                            aria-hidden="true"
                            className="size-5 flex-none"
                          />
                        </PopoverButton> */}

                        {/* <PopoverPanel
                          onMouseLeave={() => {
                            close();
                          }}
                          transition
                          className="data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in absolute -left-8 top-full z-10 mt-3 w-fit overflow-hidden rounded-md bg-white p-3 shadow-lg ring-1 ring-gray-900/5 transition"
                        >
                          {menu?.subMenu.map((sub) => (
                            <Link
                              key={sub?.id}
                              href={sub?.href}
                              onClick={() => {
                                close();
                              }}
                              className="block whitespace-nowrap rounded-md p-2 px-3 text-sm/6 font-medium text-gray-900 hover:bg-gray-200"
                            >
                              {sub?.name}
                            </Link>
                            // </div>
                          ))}
                        </PopoverPanel> */}
                      </>
                    )}
                  </Popover>
                ) : (
                  <>
                    {includesSlug("contact", menu?.name) ? (
                      <div
                        onClick={() => setOpenContact(true)}
                        className=" h-full cursor-pointer navbar-heading  px-2 flex items-center hover:bg-[#434748]"
                      >
                        Contact
                      </div>
                    ) : (
                      <Link
                      href={menu?.href}
                      className={`navbar-heading px-2 py-2 flex h-[30px] items-center border-b-4 transition-all ${
                        pathname === menu?.href
                          ? "border-[#A36305] text-[#A36305]" // Active: styled but no size change
                          : "border-transparent hover:bg-[#434748] hover:h-[80px]"
                      }`}
                    >
                      {menu?.name}
                    </Link>
                    
                    )}
                  </>
                )}
              </React.Fragment>
            ))}
            <div className="group  relative z-20 px-5 h-full  border-l border-[#2C3031] flex items-center hover:bg-gradient-to-r from-[#CC8D02] to-[#FDD012] navbar-heading  "  onClick={() => setOpenContact(true)} >
            <span className="transform transition-transform duration-300 group-hover:-translate-x-1 cursor-pointer">
    Book Free Consultation
  </span>
  <span className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 cursor-pointer ">
    <Image src="/assets/arrow.png" alt="arrow" width={24} height={24} />
  </span>
            </div>
          </PopoverGroup>
          {/* {scrollPosition > 700 && (
            <div
              className="font-semibold hidden lg:flex w-fit px-8 h-12 py-3 primary-btn outline-btn ml-auto rounded-full"
              onClick={() => setOpenContact(true)}
            >
              Book a Free Consultation
            </div>
          )} */}
        </nav>
        {showMenu && (
          <Dialog
            open={showMenu}
            onClose={() => {
              setShowMenu(false);
              setTimeout(() => {
                setMobileMenuOpen(false);
              }, 100);
            }}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-10" />
            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ease-in-out">
              <div className="flex items-center justify-between">
                <p>Menu</p>
                <AnimatedHamburger
                  isOpen={mobileMenuOpen}
                  onClick={handleMenuToggle}
                  
                 
                />
              </div>
              <div className="z-50 mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
        {navLinks?.map((menu) => (
          <React.Fragment key={menu?.id}>
            {menu?.subMenu ? (
              <Disclosure as="div" className="-mx-3">
                <Disclosure.Button className="group flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  {menu?.name}
                  <ChevronDown
                    aria-hidden="true"
                    className="group-data-[open]:rotate-180 size-5 transition-transform"
                  />
                </Disclosure.Button>
         
              </Disclosure>
            ) : includesSlug("contact", menu?.name) ? (
              <div
                onClick={() => {
                  setOpenContact(true);
                  setShowMenu(false);
                  setTimeout(() => {
                    setMobileMenuOpen(false);
                  }, 100);
                }}
                className="cursor-pointer navbar-heading  py-2 rounded-lg text-base font-semibold text-gray-900 hover:bg-gray-50"
              >
                Contact
              </div>
            ) : (
              <Link
                href={menu?.href}
                onClick={() => {
                  setShowMenu(false);
                  setTimeout(() => {
                    setMobileMenuOpen(false);
                  }, 100);
                }}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              >
                {menu?.name}
              </Link>
            )}
          </React.Fragment>
        ))}

        <div className="text-sm font-semibold  py-2 text-gray-900" onClick={()=>{
          setOpenContact(true);
          setShowMenu(false);
          setTimeout(() => {
            setMobileMenuOpen(false);
          }, 100);
        }}>
          Book Free Consultation
        </div>
      </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        )}
      </header>
    </>
  );
};