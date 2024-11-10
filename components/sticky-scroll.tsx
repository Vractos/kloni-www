'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  useTransform,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  MotionValue,
  useAnimation,
} from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';

const sections = [
  {
    text: 'Cadastre-se na plataforma',
    imagePath: '/Thera.jpeg',
    alt: 'Illustration 04',
    description:
      'Faça seu cadastro de forma simples e rápida, preenchendo somente algumas informações básicas',
  },
  {
    text: 'Fale com a Theramind',
    imagePath: '/Thera.jpeg',
    alt: 'Illustration 04',
    description:
      'A Theramind é a nossa inteligência artificial que vai te fazer algumas perguntas sobre qual ou quais desafios a sua empresa tem',
  },
  {
    text: 'Receba a lista de startups qualificadas',
    imagePath: '/Thera.jpeg',
    alt: 'Illustration 04',
    description:
      'A Theramind vai processar o seu desafio e te mandar uma lista raqueada das startups que mais se adequam ao seu desafio e ao perfil da sua empresa',
  },

];



export const StickyScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollValue = useMotionValue(0);
  const { scrollY } = useScroll({ target: containerRef });
  const [activeIndex, setActiveIndex] = useState(0);

  function remapValue(value: number, high1: number, low1: number, high2: number, low2: number) {
    const remap = ((value - high1) * (low2 - high2)) / (low1 - high1) + high2;
    return remap > 0 ? remap : 0;
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const container = containerRef.current;
    const sections = container
      ? Array.from(container.querySelectorAll('section'))
      : [];
    const containerTop = container?.offsetTop || 0;
    const containerHeight = container?.clientHeight || 0;
    const containerBottom = containerTop + containerHeight;
    const viewportTop = latest;

    if (containerBottom <= viewportTop) {
      scrollValue.set(sections.length + 1);
    } else if (containerTop >= viewportTop) {
      scrollValue.set(0);
    } else {
      scrollValue.set(
        remapValue(
          viewportTop,
          containerTop,
          containerBottom,
          0,
          sections.length + 1
        )
      );
    }

    const newIndex = Math.floor(scrollValue.get()) >= sections.length ? sections.length - 1 : Math.floor(scrollValue.get());
    setActiveIndex(newIndex);

    sections.forEach((section, index) => {
      if (index === activeIndex) {
        section.style.setProperty('--stick-visibility', '1');
        section.style.setProperty('--stick-scale', '1');
      } else {
        section.style.setProperty('--stick-visibility', '0');
        section.style.setProperty('--stick-scale', '0.8');
      }
    });
  });

  useEffect(() => {
    const sections = containerRef.current
      ? Array.from(containerRef.current.querySelectorAll('section'))
      : [];
    containerRef.current?.style.setProperty(
      '--stick-items',
      `${sections.length + 1}00vh`
    );
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className='max-w-md mx-auto lg:max-w-none lg:min-h-[var(--stick-items)]'
      data-sticky-sections
    >
      <div className='lg:sticky lg:top-0 lg:h-screen space-y-16 lg:space-y-0'>
        {sections.map((section, index) => (
          <motion.section
            key={index}
            className='lg:absolute lg:inset-0 lg:z-[var(--stick-visibility)]'
          >
            <div className='flex flex-col lg:min-h-full lg:flex-row space-y-4 space-y-reverse lg:space-y-0 lg:space-x-20'>
              <div className='flex-1 flex items-center lg:opacity-[var(--stick-visibility)] transition-opacity duration-300 order-1 lg:order-none'>
                <div className='space-y-3'>
                  <div className='relative inline-flex text-indigo-500 font-semibold'>
                    {section.text}
                    <svg
                      className='fill-indigo-300 absolute top-full w-full'
                      xmlns='http://www.w3.org/2000/svg'
                      width='166'
                      height='4'
                    >
                      <path d='M98.865 1.961c-8.893.024-17.475.085-25.716.182-2.812.019-5.023.083-7.622.116l-6.554.067a2910.9 2910.9 0 0 0-25.989.38c-4.04.067-7.709.167-11.292.27l-1.34.038c-2.587.073-4.924.168-7.762.22-2.838.051-6.054.079-9.363.095-1.994.007-2.91-.08-3.106-.225l-.028-.028c-.325-.253.203-.463 1.559-.62l.618-.059c.206-.02.42-.038.665-.054l1.502-.089 3.257-.17 2.677-.132c.902-.043 1.814-.085 2.744-.126l1.408-.06c4.688-.205 10.095-.353 16.167-.444C37.413 1.22 42.753.98 49.12.824l1.614-.037C54.041.707 57.588.647 61.27.6l1.586-.02c4.25-.051 8.53-.1 12.872-.14C80.266.4 84.912.373 89.667.354l2.866-.01c8.639-.034 17.996 0 27.322.03 6.413.006 13.168.046 20.237.12l2.368.027c1.733.014 3.653.05 5.712.105l2.068.064c5.89.191 9.025.377 11.823.64l.924.09c.802.078 1.541.156 2.21.233 1.892.233.29.343-3.235.364l-3.057.02c-.446.003-.89.008-1.33.014a305.77 305.77 0 0 1-4.33-.004c-2.917-.005-5.864-.018-8.783-.019l-4.982.003a447.91 447.91 0 0 1-3.932-.02l-4.644-.023-4.647-.014c-9.167-.026-18.341-.028-26.923.03l-.469-.043Z' />
                    </svg>
                  </div>
                  <h2 className='text-4xl text-slate-900 font-extrabold'>
                    {section.text}
                  </h2>
                  <p className='text-lg text-slate-500'>
                    {section.description}
                  </p>
                </div>
              </div>
              <div className='flex-1 flex items-center lg:scale-[var(--stick-scale)] lg:opacity-[var(--stick-visibility)] transition duration-300'>
                <Image
                  width='512'
                  height='480'
                  src={section.imagePath}
                  alt={section.alt}
                />
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
};
