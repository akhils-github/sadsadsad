// src/app/(main)/terms-conditions/page.js

"use client";
import { termsData } from "@/constants/dummy-data/terms-conditions/data";

export default function TermsConditions() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative flex justify-center items-center px-4 py-16"
      style={{
        backgroundImage: "url('/images/banners/service-turnkey.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Glassmorphism container */}
      <div className="relative z-5 w-full max-w-4xl rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl p-8 text-white">
        <h1 className="sub-heading-white mb-8">{termsData.title}</h1>

        {termsData.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl md:text-3xl font-semibold mb-4">{section.heading}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              {section.content.map((line, idx) => (
                <li className="md:text-xl" key={idx}>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
