'use client';

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { motion } from 'framer-motion';
import signUp from '@/public/sign-up.gif';
import barTest from '@/public/bar-test.gif';
import listTeste from '@/public/list-test.gif';

export default function StepByStepTabs() {
  return (
    // <Tabs className='bg-transparent md:bg-gradient-to-b md:from-slate-900 mt-11 md:to-slate-800 w-full md:px-14 md:pb-20 md:pt-12 md:rounded-2xl md:mt-16 md:shadow-xl md:bg-[radial-gradient(#4f4f4f2e_1px,transparent_1px)] md:[background-size:16px_16px]' defaultValue='sign-up'>
    <Tabs className='bg-transparent md:bg-slate-900 mt-11 w-full md:px-14 md:pb-20 md:pt-12 md:rounded-2xl md:mt-16 md:shadow-xl md:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] md:bg-[size:24px_24px]' defaultValue='sign-up'>
      <TabsList className='flex gap-10 bg-transparent'>
        <TabsTrigger
          value='sign-up'
          className='lg:text-base rounded-lg font-medium data-[state=inactive]:text-white border-transparent data-[state=inactive]:text-opacity-80 data-[state=active]:font-semibold  data-[state=active]:bg-transparent data-[state=active]:border-[1px] data-[state=active]:border-[rgb(255,255,255)]/25 data-[state=active]:text-white data-[state=active]:bg-gradient-to-t data-[state=active]:from-[rgb(255,255,255)]/35 data-[state=active]:via-[rgb(255,255,255)]/20  data-[state=active]:to-[rgb(255,255,255)]/10'
          // className='lg:text-base rounded-lg font-medium data-[state=inactive]:text-white border-transparent data-[state=inactive]:text-opacity-80 data-[state=active]:font-semibold  data-[state=active]:bg-transparent data-[state=active]:border-[1px] data-[state=active]:border-[rgb(124,58,237)]/40 data-[state=active]:text-slate-100 data-[state=active]:bg-gradient-to-t data-[state=active]:from-[rgb(124,58,237)]/40 data-[state=active]:via-[rgb(124,58,237)]/30  data-[state=active]:to-[rgb(124,58,237)]/10'
        >
          Cadastre-se
        </TabsTrigger>
        <TabsTrigger
          value='send'
          className='lg:text-base rounded-lg font-medium data-[state=inactive]:text-white border-transparent data-[state=inactive]:text-opacity-80 data-[state=active]:font-semibold  data-[state=active]:bg-transparent data-[state=active]:border-[1px] data-[state=active]:border-[rgb(255,255,255)]/25 data-[state=active]:text-white data-[state=active]:bg-gradient-to-t data-[state=active]:from-[rgb(255,255,255)]/35 data-[state=active]:via-[rgb(255,255,255)]/20  data-[state=active]:to-[rgb(255,255,255)]/10'
        >
          Envie
        </TabsTrigger>
        <TabsTrigger
          className='lg:text-base rounded-lg font-medium data-[state=inactive]:text-white border-transparent data-[state=inactive]:text-opacity-80 data-[state=active]:font-semibold  data-[state=active]:bg-transparent data-[state=active]:border-[1px] data-[state=active]:border-[rgb(255,255,255)]/25 data-[state=active]:text-white data-[state=active]:bg-gradient-to-t data-[state=active]:from-[rgb(255,255,255)]/35 data-[state=active]:via-[rgb(255,255,255)]/20  data-[state=active]:to-[rgb(255,255,255)]/10'
          value='get'
        >
          Receba
        </TabsTrigger>
      </TabsList>
      <TabsContent value='sign-up' className='pt-7 lg:pt-24'>
        <div className='flex flex-col lg:flex-row space-y-4'>
          <motion.div
            className='flex-1 basis-1/4 flex items-center order-1 lg:order-none'
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <div className='lg:space-y-2 mt-8 mb-7 lg:m-0'>
              <div className='relative inline-flex text-slate-100 text-xs md:text-sm font-medium items-center'>
                📥 Crie sua conta
                <svg
                  className='fill-primary absolute top-full w-full'
                  xmlns='http://www.w3.org/2000/svg'
                  width='166'
                  height='4'
                >
                  <path d='M98.865 1.961c-8.893.024-17.475.085-25.716.182-2.812.019-5.023.083-7.622.116l-6.554.067a2910.9 2910.9 0 0 0-25.989.38c-4.04.067-7.709.167-11.292.27l-1.34.038c-2.587.073-4.924.168-7.762.22-2.838.051-6.054.079-9.363.095-1.994.007-2.91-.08-3.106-.225l-.028-.028c-.325-.253.203-.463 1.559-.62l.618-.059c.206-.02.42-.038.665-.054l1.502-.089 3.257-.17 2.677-.132c.902-.043 1.814-.085 2.744-.126l1.408-.06c4.688-.205 10.095-.353 16.167-.444C37.413 1.22 42.753.98 49.12.824l1.614-.037C54.041.707 57.588.647 61.27.6l1.586-.02c4.25-.051 8.53-.1 12.872-.14C80.266.4 84.912.373 89.667.354l2.866-.01c8.639-.034 17.996 0 27.322.03 6.413.006 13.168.046 20.237.12l2.368.027c1.733.014 3.653.05 5.712.105l2.068.064c5.89.191 9.025.377 11.823.64l.924.09c.802.078 1.541.156 2.21.233 1.892.233.29.343-3.235.364l-3.057.02c-.446.003-.89.008-1.33.014a305.77 305.77 0 0 1-4.33-.004c-2.917-.005-5.864-.018-8.783-.019l-4.982.003a447.91 447.91 0 0 1-3.932-.02l-4.644-.023-4.647-.014c-9.167-.026-18.341-.028-26.923.03l-.469-.043Z' />
                </svg>
              </div>
              <div className='space-y-2 lg:space-y-4'>
              <h2 className='font-medium text-lg md:text-xl xl:text-3xl text-slate-50 lg:leading-[1.1]'>
                Faça seu cadastro e tenha acesso a plataforma
                </h2>
                <p className='text-sm xl:text-base text-slate-300'>
                Faça seu cadastro de forma simples e rápida, preenchendo
                  somente algumas informações básicas.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className='flex-1 basis-1/2 flex justify-end transition duration-300'
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.03,
            }}
          >
            <Image
              // width='800'
              // className='rounded-3xl shadow-lg bg-gradient-to-tr from-violet-600 to-purple-600'
              className='rounded-3xl shadow-lg bg-gradient-to-br border-[1px] backdrop-blur-sm border-violet-500/65 from-violet-500/55 via-violet-500/40 to-purple-500/25'
              // height='580'
              src={signUp}
              alt='Sign Up'
            />
          </motion.div>
        </div>{' '}
      </TabsContent>

      <TabsContent value='send' className='pt-7 lg:pt-24'>
        <div className='flex flex-col lg:flex-row space-y-4'>
          <motion.div
            className='flex-1 basis-1/4 flex items-center order-1 lg:order-none'
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <div className='lg:space-y-2 mt-8 mb-7 lg:m-0'>
              <div className='relative inline-flex text-slate-100 text-xs md:text-sm font-medium items-center'>
                💬 Submeta o desafio
                <svg
                  className='fill-primary absolute top-full w-full'
                  xmlns='http://www.w3.org/2000/svg'
                  width='166'
                  height='4'
                >
                  <path d='M98.865 1.961c-8.893.024-17.475.085-25.716.182-2.812.019-5.023.083-7.622.116l-6.554.067a2910.9 2910.9 0 0 0-25.989.38c-4.04.067-7.709.167-11.292.27l-1.34.038c-2.587.073-4.924.168-7.762.22-2.838.051-6.054.079-9.363.095-1.994.007-2.91-.08-3.106-.225l-.028-.028c-.325-.253.203-.463 1.559-.62l.618-.059c.206-.02.42-.038.665-.054l1.502-.089 3.257-.17 2.677-.132c.902-.043 1.814-.085 2.744-.126l1.408-.06c4.688-.205 10.095-.353 16.167-.444C37.413 1.22 42.753.98 49.12.824l1.614-.037C54.041.707 57.588.647 61.27.6l1.586-.02c4.25-.051 8.53-.1 12.872-.14C80.266.4 84.912.373 89.667.354l2.866-.01c8.639-.034 17.996 0 27.322.03 6.413.006 13.168.046 20.237.12l2.368.027c1.733.014 3.653.05 5.712.105l2.068.064c5.89.191 9.025.377 11.823.64l.924.09c.802.078 1.541.156 2.21.233 1.892.233.29.343-3.235.364l-3.057.02c-.446.003-.89.008-1.33.014a305.77 305.77 0 0 1-4.33-.004c-2.917-.005-5.864-.018-8.783-.019l-4.982.003a447.91 447.91 0 0 1-3.932-.02l-4.644-.023-4.647-.014c-9.167-.026-18.341-.028-26.923.03l-.469-.043Z' />
                </svg>
              </div>
              <div className='space-y-2 lg:space-y-4'>
              <h2 className='font-medium text-lg md:text-xl xl:text-3xl text-slate-50 lg:leading-[1.1]'>
                  Envie seu desafio para a Theramind
                </h2>
                <p className='text-sm xl:text-base text-slate-300'>
                  A Theramind é a nossa inteligência artificial que vai te fazer
                  algumas perguntas sobre qual ou quais desafios a sua empresa
                  tem.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className='flex-1 basis-1/2 flex justify-end transition duration-300'
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.03,
            }}
          >
            <Image
              // width='800'
              // className='rounded-3xl shadow-lg bg-gradient-to-tr from-violet-600 to-purple-600'
              className='rounded-3xl shadow-lg bg-gradient-to-br border-[1px] backdrop-blur-sm border-violet-500/65 from-violet-500/55 via-violet-500/40 to-purple-500/25'
              // height='580'
              src={barTest}
              alt='New Challenge'
            />
          </motion.div>
        </div>{' '}
      </TabsContent>
      <TabsContent value='get' className='pt-7 lg:pt-24'>
        <div className='flex flex-col lg:flex-row space-y-4'>
          <motion.div
            className='flex-1 basis-1/4 flex items-center order-1 lg:order-none'
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className='lg:space-y-2 mt-8 mb-7 lg:m-0'>
              <div className='relative inline-flex text-slate-100 text-xs font-medium items-center'>
                🚀 Receba uma lista de startups
                <svg
                  className='fill-primary absolute top-full w-full'
                  xmlns='http://www.w3.org/2000/svg'
                  width='166'
                  height='4'
                >
                  <path d='M98.865 1.961c-8.893.024-17.475.085-25.716.182-2.812.019-5.023.083-7.622.116l-6.554.067a2910.9 2910.9 0 0 0-25.989.38c-4.04.067-7.709.167-11.292.27l-1.34.038c-2.587.073-4.924.168-7.762.22-2.838.051-6.054.079-9.363.095-1.994.007-2.91-.08-3.106-.225l-.028-.028c-.325-.253.203-.463 1.559-.62l.618-.059c.206-.02.42-.038.665-.054l1.502-.089 3.257-.17 2.677-.132c.902-.043 1.814-.085 2.744-.126l1.408-.06c4.688-.205 10.095-.353 16.167-.444C37.413 1.22 42.753.98 49.12.824l1.614-.037C54.041.707 57.588.647 61.27.6l1.586-.02c4.25-.051 8.53-.1 12.872-.14C80.266.4 84.912.373 89.667.354l2.866-.01c8.639-.034 17.996 0 27.322.03 6.413.006 13.168.046 20.237.12l2.368.027c1.733.014 3.653.05 5.712.105l2.068.064c5.89.191 9.025.377 11.823.64l.924.09c.802.078 1.541.156 2.21.233 1.892.233.29.343-3.235.364l-3.057.02c-.446.003-.89.008-1.33.014a305.77 305.77 0 0 1-4.33-.004c-2.917-.005-5.864-.018-8.783-.019l-4.982.003a447.91 447.91 0 0 1-3.932-.02l-4.644-.023-4.647-.014c-9.167-.026-18.341-.028-26.923.03l-.469-.043Z' />
                </svg>
              </div>
              <div className='space-y-2 lg:space-y-4'>
                <h2 className='font-medium text-lg md:text-xl xl:text-3xl text-slate-50 lg:leading-[1.1]'>
                  Receba a lista de startups qualificadas pela Theramind
                </h2>
                <p className='text-sm xl:text-base text-slate-300'>
                  A Theramind vai processar o seu desafio e te mandar uma lista
                  ranqueada das startups que mais se adequam ao seu desafio e ao
                  perfil da sua empresa.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className='flex-1 basis-1/2 flex justify-end transition duration-300'
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.03,
            }}
          >
            <Image
              // width='800'
              className='rounded-3xl shadow-lg bg-gradient-to-br border-[1px] backdrop-blur-sm border-violet-500/65 from-violet-500/55 via-violet-500/40 to-purple-500/25'
              // className='rounded-3xl shadow-lg bg-gradient-to-tr bg-transparent border-[1px] border-[rgb(255,255,255)]/25   from-[rgb(255,255,255)]/35 via-[rgb(255,255,255)]/25  to-[rgb(255,255,255)]/10 backdrop-blur-lg'
              // className='rounded-3xl shadow-lg bg-gradient-to-tr bg-transparent border-[1px] border-[rgb(124,58,237)]/35   from-[rgb(124,58,237)]/45 via-[rgb(124,58,237)]/35  to-[rgb(124,58,237)]/20 backdrop-blur-lg'
              // height='580'
              src={listTeste}
              alt='Thera'
            />
          </motion.div>
        </div>{' '}
      </TabsContent>
    </Tabs>
  );
}
