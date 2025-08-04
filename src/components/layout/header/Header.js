import Image from 'next/image';
import React from 'react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 transform z-50 md:h-[112px] w-full flex justify-center bg-transparent h-[80px]">
      <div >
        
        <Image
          src="/logo/logo.jpg"
          alt="Logo"
          width={200}
          height={100}
          className="h-[50px] w-auto opacity-90 md:h-[82px] "
          priority
        />
      </div>
    </header>
  );
};
