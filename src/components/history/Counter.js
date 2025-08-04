import React from 'react'

import Image from 'next/image'
import { counters } from '@/constants/dummy-data/history/data'

const Counter = () => {
  return (
          <div className="grid  grid-cols-1 lg:grid-cols-5 lg:gap-5 md:gap-5 gap-10 lg:my-20 md:grid-cols-2 mb-10 lg:mb-10 md:mb-5">
            {counters.map((counter, index) => (
              <div key={index} className=" md:mb-0">
               <Image src={counter.image} width={50} height={50} alt={counter.label} />
                <p className="counter-label leading-[1.2] mt-3">{counter.label}</p>
              </div>
            ))}
          </div>
  )
}

export default Counter 