'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import React from 'react';

// const navigation = [
  // { name: 'Soluções', href: '/#solucoes' },
  // { name: 'Planos', href: '/planos' },
  // { name: 'Blog', href: 'https://blog.thera.rocks', external: true },
// ];

export function MainNav() {
  const pathname = usePathname();

  return (
    <div
      className=' mx-auto lg:max-w-none lg:min-h-[var(--stick-items)]'
      data-sticky-sections
    >
      <div className='mr-4 hidden md:flex'>
        <NavigationMenu>
          <NavigationMenuList className='flex items-center gap-10 text-base'>
            {/* {navigation.map((item) => (
               // <NavigationMenuItem key={item.name} className=''>
              //   <NavigationMenuTrigger className='bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>Getting started</NavigationMenuTrigger>
              //   <NavigationMenuContent>
              //     <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              //       <li className='row-span-3'>
              //         <NavigationMenuLink asChild>
              //           <a
              //             className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
              //             href='/'
              //           >
              //             <Icons.logo className='h-6 w-6' />
              //             <div className='mb-2 mt-4 text-lg font-medium'>
              //               shadcn/ui
              //             </div>
              //             <p className='text-sm leading-tight text-muted-foreground'>
              //               Beautifully designed components built with Radix UI
              //               and Tailwind CSS.
              //             </p>
              //           </a>
              //         </NavigationMenuLink>
              //       </li>
              //       <ListItem href='/docs' title='Introduction'>
              //         Re-usable components built using Radix UI and Tailwind
              //         CSS.
              //       </ListItem>
              //       <ListItem href='/docs/installation' title='Installation'>
              //         How to install dependencies and structure your app.
              //       </ListItem>
              //       <ListItem
              //         href='/docs/primitives/typography'
              //         title='Typography'
              //       >
              //         Styles for headings, paragraphs, lists...etc
              //       </ListItem>
              //     </ul>
              //   </NavigationMenuContent>
              // </NavigationMenuItem> */}
              {/* <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname?.startsWith(item.href)
                    ? 'text-foreground'
                    : 'text-foreground/60'
                )}
              >
                {item.name}
              </Link> */}
            {/* ))} */}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
