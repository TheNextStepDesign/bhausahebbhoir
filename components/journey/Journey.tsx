import React from 'react'
import { H2 } from '../typography/FontStyles'
import Image from 'next/image'

export default function Journey() {
  return (
    <div className='py-10 overflow-hidden' >
        <H2>
        Political Journey
        </H2>
        <div className=' w-[4100px]  h-[500px] overflow-hidden py-10 '>
        <div className='absolute w-[4100px] h-[500px] animate-scroll-left overflow-hidden'>
          <Image src={'/images/landing/jurney.png'} alt="journey" width={4100} height={500} className="w-[4100px] h-full object-cover" />
        </div>
      </div>

    </div>
  )
}
