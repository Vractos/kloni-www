'use client';

import * as React from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  CheckIcon,
  Cross2Icon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';



export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>

      
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          className='mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'
        >
          {open ? (
            <Cross2Icon className='h-6 w-6' />
          ) : (
            <HamburgerMenuIcon className='h-6 w-6' />
          )}
          <span className='sr-only'>Abrir Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='top'>
        <div className='w-full overflow-y-auto bg-background px-4 pt-12'>
          <ScrollArea className='flex flex-col'>
            <nav className='space-y-2'>
              {/* {navigation.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block py-2 text-lg'
                  >
                    {item.name}
                  </a>
                ) : (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                    className='block py-2 text-lg'
                  >
                    {item.name}
                  </MobileLink>
                )
              )} */}
            </nav>
            <div className='flex flex-col space-y-4 justify-center mt-6'>
              <Button asChild size={'lg'} className='text-base'>
                <a
                  href='https://forms.office.com/r/FHqqvBXGaZ'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Criar conta
                </a>
              </Button>
            </div>
          </ScrollArea>
        </div>
        <SheetClose className='absolute right-12 top-4 opacity-0 disabled:pointer-events-none'>
          <Cross2Icon className='h-6 w-6' />
          <span className='sr-only'>Fechar</span>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
