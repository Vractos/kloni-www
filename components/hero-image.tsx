'use client';

import { cn } from '@/lib/utils';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import heroImage from '@/public/dashboard-2.png';

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

interface Line {
  id: string;
  direction: 'to top' | 'to left';
  size: number;
  duration: number;
}

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [lines, setLines] = useState<Line[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const removeLine = (id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== id));
  };

  useEffect(() => {
    if (!inView) return;

    const renderLine = (timeout: number) => {
      timeoutRef.current = setTimeout(() => {
        setLines((lines) => [
          ...lines,
          {
            direction: Math.random() > 0.5 ? 'to top' : 'to left',
            duration: randomNumberBetween(1300, 3500),
            size: randomNumberBetween(10, 28),
            id: Math.random().toString(36).substring(7),
          },
        ]);

        renderLine(randomNumberBetween(800, 2500));
      }, timeout);
    };

    renderLine(randomNumberBetween(800, 1300));

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [inView, setLines]);

  return (
    <div ref={ref} className='[perspective:2000px]'>
      <div
        className={cn(
          'relative rounded-2xl border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient shadow-lg',
          inView ? 'animate-image-rotate' : '[transform:rotateX(25deg)]',
          'before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]',
          inView && 'before:animate-image-glow'
        )}
      >
        <div className='absolute top-0 left-0 z-20 h-full w-full'>
          {lines.map((line) => (
            <span
              key={line.id}
              onAnimationEnd={() => removeLine(line.id)}
              style={
                {
                  '--direction': line.direction,
                  '--size': line.size,
                  '--animation-duration': `${line.duration}ms`,
                } as CSSProperties
              }
              className={cn(
                'absolute top-0 block h-[1px] w-[10rem] bg-glow-lines',
                line.direction === 'to left' &&
                  `left-0 h-[1px] w-[calc(var(--size)*0.2rem)] sm:w-[calc(var(--size)*0.35rem)] animate-glow-line-horizontal md:w-[calc(var(--size)*0.40rem)] lg:w-[calc(var(--size)*0.55rem)] 2xl:w-[calc(var(--size)*1rem)]`,
                line.direction === 'to top' &&
                  `right-0 h-[calc(var(--size)*0.25rem)] w-[1px] animate-glow-line-vertical sm:h-[calc(var(--size)*0.30rem)] md:h-[calc(var(--size)*0.40rem)] lg:h-[calc(var(--size)*0.5rem)]`
              )}
            />
          ))}
        </div>
        <svg
          className={cn(
            'absolute left-0 top-0 h-full w-full',
            '[&_path]:stroke-white [&_path]:[strokeOpacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]',
            inView && '[&_path]:animate-sketch-lines'
          )}
          width='100%'
          viewBox='0 0 1499 778'
          fill='none'
        >
          <path pathLength='1' d='M1500 72L220 72'></path>
          <path pathLength='1' d='M1500 128L220 128'></path>
          <path pathLength='1' d='M1500 189L220 189'></path>
          <path pathLength='1' d='M220 777L220 1'></path>
          <path pathLength='1' d='M538 777L538 128'></path>
        </svg>
        <Image
          src={heroImage}
          // width={1336}
          // height={732}
          priority
          className={cn(
            `relative z-10 transition-opacity rounded-lg`,
            inView ? 'opacity-100' : 'opacity-0'
          )}
          alt='Thera'
        />
      </div>
    </div>
  );
};
