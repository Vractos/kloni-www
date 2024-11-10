import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
// import { CommandMenu } from "@/components/command-menu"
// import { Icons } from "@/components/icons"
import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';
// import { ModeToggle } from "@/components/mode-toggle"
import { Button } from '@/components/ui/button';
import { Icons } from './icons';

export function SiteHeader() {
  return (
    <header className='sticky top-2 z-[1000] w-[70%] border border-border/40 shadow-md rounded-xl bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 my-2'>
      <div className='container flex h-16 max-w-screen-2xl items-center justify-between'>
        <Link href='/' className='md:hidden flex items-center space-x-2'>
          <Icons.logo className='w-28 md:w-24' />
        </Link>
        <Link href='/' className='md:flex flex-1 hidden items-center space-x-2'>
          <Icons.logo className='w-[5.5rem]' />
        </Link>
        <MainNav />
        <MobileNav />
        <div className='hidden flex-1 md:flex items-center justify-between space-x-2 md:justify-end'>
          <div className='w-full flex-1 md:w-auto md:flex-none'>
            <Button asChild variant={'link'} size={'default'}>
              <a
                href='https://app.thera.rocks'
                target='_blank'
                rel='noopener noreferrer'
              >
                Entrar
              </a>
            </Button>
          </div>
          <Button asChild size={'default'}>
            <a href='https://app.thera.rocks' 
            target='_blank'
            rel='noopener noreferrer'
            >Criar conta</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
