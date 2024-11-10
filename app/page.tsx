import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Announcement } from '@/components/announcement';
import { HeroImage } from '../components/hero-image';
import Image from 'next/image';

export default function IndexPage() {
  return (
    <div className='relative'>
      <PageHeader className='mt-20'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-70 max-h-100vh'
          aria-hidden='true'
        ></div>
        <Announcement className='translate-y-[-1rem] animate-fade-in opacity-0' />
        <PageHeaderHeading className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]'>
          Clone anúncios e gerencie suas vendas de forma inteligente
        </PageHeaderHeading>
        <PageHeaderDescription className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] mb-4'>
          Ajudamos você a aumentar suas vendas no Mercado Livre e gerir seu
          negócio de forma inteligente
        </PageHeaderDescription>
        <PageActions className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]'>
          <Button size={'lg'}>
            <>
              <a
                href='https://app.kloni.com.br/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Criar conta
              </a>
              <ArrowRightIcon className='ml-2 h-4 w-4' />
            </>
          </Button>
        </PageActions>
      </PageHeader>
      <section className='block container md:pt-24 lg:px-24 lg:pt-10'>
        <HeroImage />
      </section>
      <section className='mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-14 lg:pb-20'></section>
    </div>
  );
}
