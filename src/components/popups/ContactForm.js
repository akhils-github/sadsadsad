"use client";

import { Button, Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

import { Transition } from "@headlessui/react";
import { options } from "@/constants/data/data";
import toast from "react-hot-toast";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { basicXFormRequest, CONTACT_FORM, RECAPTCHA_VERIFY } from "@/api";
import ReCaptchaProvider from "@/provider/ReCaptchaProvider";

export default function Contact({ isOpen, setIsOpen }) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  function close() {
    setIsOpen(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      toast.error("reCAPTCHA is not available. Please try again later.");
      return;
    }
    const formData = {};
    try {
      const token = await executeRecaptcha("submit_form");
      const validationResponse = await basicXFormRequest.post(
        RECAPTCHA_VERIFY,
        { token }
      );
      if (validationResponse?.data?.success) {
        const formResponse = await basicXFormRequest.post(
          CONTACT_FORM,
          formData
        );
        if (formResponse?.data?.data?.createdAt) {
          toast.success("Form submitted successfully!");
        } else {
          toast.error("Form validation failed.");
        }
      } else {
        toast.error("reCAPTCHA validation failed.");
      }
    } catch (error) {
      toast.error("Error submitting form.");
      console.error(error);
    }
    // setSubmitting(true);

    // Simulating form submission delay
    // setTimeout(() => {
    //   alert("Form submitted successfully!");
    //   setSubmitting(false);
    //   setFormData({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     phone: "",
    //     message: "",
    //   });
    // }, 2000);
  };
  return (
    <>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none "
          onClose={close}
        >
          {/* Background overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 w-screen overflow-y-auto overflow-x-min  mt-15">
            <div className="flex min-h-full items-center justify-center text-center rounded-2xl">
              {/* Modal panel with slide-up animation */}
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-full"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-full"
              >
                <DialogPanel className="w-full transform rounded-2xl bg-white text-left align-middle shadow-xl ">
                  <div className="flex justify-center mx-auto items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-8 w-full">
                      {/* Left Column */}
                      <div className="lg:col-span-3 bg-white ms-10 pt-5 order-last lg:order-first">
                        <div className="space-y-6 font-(family-name:--font-primary)">
                          <div className="ml-0">
                            <p className="font-light text-gray-600 text-sm">
                              Office
                            </p>
                            <p className="text-xs">
                              +91
                              <span className="ms-2 text-xs">9496411902</span>
                            </p>
                          </div>
                          <div className="ml-0">
                            <p className="font-light text-gray-600 text-sm">
                              Showroom
                            </p>
                            <p className="text-xs">
                              +91
                              <span className="ms-2 text-xs">7994133503</span>
                            </p>
                          </div>
                          <div className="ml-0">
                            <p className="font-light text-gray-600 text-sm">
                              Email
                            </p>
                            <p className="text-xs">
                              sales@laelhomesolutions.com
                            </p>
                          </div>
                          <div className="ml-0">
                            <p className="font-light text-gray-600 text-sm">
                              Visit Us At
                            </p>
                            <p className="w-full text-xs">
                              XXXII/523 Toll Junction,Paruthelipalam
                              Edappally,Kochi{" "}
                            </p>
                          </div>
                          <div className="ml-0">
                            <p className="font-light text-gray-600 text-sm">
                              Head Office
                            </p>
                            <p className="text-xs">
                              50/1938 F, Old NH, Cheranaloor Road, Kunnumpuram,
                              Amrita Nagar, Edappally,Kochi
                            </p>
                          </div>
                        </div>
                        {/* Google Map */}
                        <div className="mt-5 w-full ">
                          <div className="relative w-full pr-10">
                            <div className="mt-5 w-full pr-10">
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3928.882839610604!2d76.313007!3d10.026526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d8fcbd239cb%3A0xac893ba2228004e6!2sLael%20Designers!5e0!3m2!1sen!2sus!4v1751442798828!5m2!1sen!2sus"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-xl w-full"
                              ></iframe>
                            </div>
                          </div>
                        </div>

                        {/* Social Media */}
                        <div className="grid grid-cols-3 gap-4 w-52  rounded-lg mt-5 font-light mb-5">
                          <a
                            href="https://www.facebook.com/laelinteriors/"
                            className="flex justify-center items-center p-3 text-black rounded-sm border-1 border-gray-300"
                          >
                            <Image
                              src="/assets/fb.svg"
                              alt="Facebook Icon"
                              width={10}
                              height={10}
                            />
                          </a>
                          <a
                            href="https://www.instagram.com/laellifestylehub/"
                            className="flex justify-center items-center p-3 text-black rounded-sm border-1 border-gray-300 "
                          >
                            <Image
                              src="/assets/insta.svg"
                              alt="Facebook Icon"
                              width={30}
                              height={30}
                            />
                          </a>
                          <a
                            href="https://www.youtube.com/@LaelLifestyleHub-3k"
                            className="flex justify-center items-center p-3 text-black rounded-sm border-1 border-gray-300 "
                          >
                            <Image
                              src="/assets/youtube.svg"
                              alt="Facebook Icon"
                              width={30}
                              height={30}
                            />
                          </a>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="lg:col-span-5 bg-[#F3F4F4] ps-10 rounded-2xl">
                        <div className="flex justify-between items-center pt-5 pr-5">
                          <p className="text-3xl font-(family-name:--font-secondary)">
                            Book a Free Appointment
                          </p>
                          {/* Close Button */}
                          <button
                            onClick={close}
                            className="text-gray-600 hover:text-gray-900 transition cursor-pointer bg-white rounded-full lg:p-3 md:p-3 p-2"
                            aria-label="Close"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-x"
                            >
                              <path d="M18 6 6 18" />
                              <path d="m6 6 12 12" />
                            </svg>
                          </button>
                        </div>
                        {/* Contact Form */}

                        <div className="lg:col-span-3 order-first lg:order-last bg-white rounded-lg mt-10 mr-10 ">
                          <p className="text-md font-(family-name:--font-primary) ps-10 fw-600 font-medium pt-5">
                            Contact Details
                          </p>
                          <div className="space-y-6 m-8 mt-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label
                                  htmlFor="firstName"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  First Name*
                                </label>
                                <input
                                  type="text"
                                  id="firstName"
                                  name="firstName"
                                  required
                                  placeholder="John"
                                  className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3  sm:text-sm accent-amber-300"
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor="lastName"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  id="lastName"
                                  name="lastName"
                                  placeholder="Smith"
                                  className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3  sm:text-sm "
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label
                                  htmlFor="email"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Email*
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  placeholder="johnsmith@domain.com"
                                  required
                                  className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3  sm:text-sm accent-amber-300"
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor="phone"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Phone Number*
                                </label>
                                <input
                                  type="tel"
                                  id="phone"
                                  name="phone"
                                  placeholder="1234567890"
                                  required
                                  className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3  accent-amber-300  sm:text-sm"
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="location"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Location*
                              </label>
                              <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder="Your location"
                                required
                                className="mt-1 block lg:w-1/2 w-full md:w-1/2 border rounded-md shadow-sm py-2 px-3  accent-amber-300  sm:text-sm mb-10"
                              />
                            </div>

                            <div className="flex flex-col">
                              <h1 className="text-lg font-medium text-gray-800 mb-2">
                                Select your requirement
                              </h1>
                              <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
                                {options.map((option) => {
                                  return (
                                    <div
                                      key={option}
                                      className="flex items-center gap-2"
                                    >
                                      <input
                                        type="checkbox"
                                        className="rounded border-gray-300   accent-amber-300 size-4 text-yellow-400  "
                                      />
                                      <label className="text-xs font-normal text-gray-700">
                                        {option}
                                      </label>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                            <hr className="h-px w-full bg-gray-500 my-5" />
                            <div className="flex flex-col pb-10 justify-between items-center lg:flex-row md:flex-row ">
                              {/* Checkbox and label wrapped together */}
                              <div className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  id="termsAgreed"
                                  name="termsAgreed"
                                  className="rounded border-gray-300  accent-amber-300 size-4"
                                />
                                <label
                                  htmlFor="termsAgreed"
                                  className="text-xs font-normal text-gray-700"
                                >
                                  I agree to receive general emails and offers
                                  from Lael Designers.
                                </label>
                              </div>

                              {/* Submit button */}
                              <div
                                onClick={handleSubmit}
                                className="h-8 text-md font-normal rounded-full bg-gradient-to-b from-[#FFF289] to-[#FDD012] px-15 flex items-center mt-10 md:mt-0 lg:mt-0 w-full justify-center lg:w-fit md:w-fit text-lg relative overflow-hidden  opacity-35 text-black"
                              >
                                Submit
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
