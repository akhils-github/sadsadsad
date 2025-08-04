// src/app/under-maintenance/page.jsx (or .tsx if using TS)

import { TrafficCone } from "lucide-react";

export default function UnderMaintenance() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f8f8] text-center px-6">
      <TrafficCone
        size={80}
        color="#2d3748"
        strokeWidth={0.75}
        className="mb-8"
      />

      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        We&apos;ll be back soon!
      </h1>
      <p className="text-lg text-gray-600 max-w-xl">
        Our website is currently undergoing scheduled maintenance. <br />
        We&rsquo;re working hard to bring everything back online in no time.
      </p>

      <p className="mt-8 text-sm text-gray-500">Thank you for your patience!</p>
    </div>
  );
}
