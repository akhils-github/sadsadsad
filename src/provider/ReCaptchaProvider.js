"use client";
import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const ReCaptchaProvider = ({ children }) => {
    console.log(process.env.NEXT_PUBLIC_SITE_KEY,"process.env.SITE_KEYprocess.env.SITE_KEY")
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_SITE_KEY}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};
export default ReCaptchaProvider;
