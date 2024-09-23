"use client"
import React, { useEffect, useRef } from 'react'
import { H2 } from '../typography/FontStyles'
import Image from 'next/image'
import Body from '../layouts/Body'

export default function Journey() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      let animation: Animation | null = null;

      const startAnimation = () => {
        animation = scrollElement.animate(
          [
            { transform: 'translateX(0)' },
            { transform: 'translateX(-80%)' }
          ],
          {
            duration: 30000,
            iterations: Infinity
          }
        );
      };

      startAnimation();

      scrollElement.addEventListener('mouseenter', () => {
        if (animation) {
          animation.pause();
        }
      });

      scrollElement.addEventListener('mouseleave', () => {
        if (animation) {
          animation.play();
        } else {
          startAnimation();
        }
      });
    }
  }, []);

  return (
    <div className='py-10 overflow-hidden bg-gray text-brand' >
        <Body>
            <H2 className='mb-10' >
            Political Journey
            </H2>
        </Body>
        <div className='relative  w-[4100px]  h-[300px] overflow-hidden  group cursor-pointer'>
        <div ref={scrollRef} className='absolute w-[4100px] h-[300px] animate-scroll-left group-hover:animate-none'>
          <Image src={'/images/landing/jurney.png'} alt="journey" width={8100} height={300} className="w-[4100px] object-scale-down" />
        </div>
      </div>

    </div>
  )
}
