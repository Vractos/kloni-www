import Link from 'next/link';
import { Button } from './ui/button';
import { SparklesCore } from './ui/sparkles';

export default function CTA() {
  return (
    <div className='mx-auto max-w-7xl pt-16 sm:px-6 sm:py-28 lg:px-8'>
      <div className='relative isolate overflow-hidden bg-slate-900 px-6 py-24 text-center shadow-2xl sm:rounded-2xl sm:px-16'>
        <div className='w-full -z-10 absolute inset-0 h-screen'>
          <SparklesCore
            id='tsparticlesfullpage'
            background='transparent'
            minSize={0.6}
            maxSize={1.2}
            particleDensity={100}
            className='w-full h-full'
            particleColor='rgb(124,58,237)'
          />
        </div>
        <h2 className='mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gradient-dark sm:text-4xl'>
          Encontre a sua solução ideal
        </h2>
        <p className='mx-auto mt-4 max-w-md text-base leading-8 text-muted'>
          Comece a inovar hoje mesmo com a ajuda de nossos especialistas.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-4'>
          <Button
            asChild
            className='lg:text-base rounded-md bg-primary text-sm font-semibold text-primary-foreground'
            // className='lg:text-base rounded-md  font-semibold  bg-transparent border-[1px] border-[rgb(255,255,255)]/25  bg-gradient-to-t from-[rgb(255,255,255)]/35 via-[rgb(255,255,255)]/25  to-[rgb(255,255,255)]/10 backdrop-blur-lg'
          >
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=4H_CZ0AgFEmRpblfESm652S3FDLLxrdLn6cUjPBSHKlUMVVLUkdSWjkyR1AySklUR1pETjIxODRVQS4u" 
            target="_blank"
            rel="noopener noreferrer"
            >
              Contato
            </a>
          </Button>
          <Button
            variant={'link'}
            asChild
            className='text-sm font-semibold leading-6 text-white'
          >
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=4H_CZ0AgFEmRpblfESm652S3FDLLxrdLn6cUjPBSHKlUMVVLUkdSWjkyR1AySklUR1pETjIxODRVQS4u" 
            target="_blank"
            rel="noopener noreferrer"
            >
              Solicitar demo
            </a>
          </Button>
        </div>
        <svg
          viewBox='0 0 1024 1024'
          className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]'
          aria-hidden='true'
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill='url(#827591b1-ce8c-4110-b064-7cb85a0b1217)'
            fillOpacity='1'
          />
          <defs>
            <radialGradient id='827591b1-ce8c-4110-b064-7cb85a0b1217'>
              <stop stopColor='rgb(124,58,237, 0.8)' />
              <stop offset={1} stopColor='rgb(124,58,237, 0.8)' />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
