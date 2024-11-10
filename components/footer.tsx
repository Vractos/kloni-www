import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Icons } from './icons';
import { IconProps } from '@radix-ui/react-icons/dist/types';
import { JSX, RefAttributes } from 'react';
import Link from 'next/link';

interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
}

interface SocialItem {
  name: string;
  href: string;
  icon: (
    props: JSX.IntrinsicAttributes & IconProps & RefAttributes<SVGSVGElement>
  ) => JSX.Element;
}

interface Navigation {
  main: NavigationItem[];
  social: SocialItem[];
}

const navigation: Navigation = {
  main: [
  ],
  social: [
    {
      name: 'Github',
      href: 'https://github.com/atrati',
      icon: (
        props: JSX.IntrinsicAttributes &
          IconProps &
          RefAttributes<SVGSVGElement>
      ) => <GitHubLogoIcon {...props} />,
    },
  ],
};

export default function Footer() {
  return (
    <footer className='bg-white border-t-[1px] '>
      {/* <Icons.logoMark className='h-12 mt-12 mx-auto' /> */}
      <div className='mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-10 lg:px-8'>
        <nav
          className='-mb-6 columns-2 sm:flex text-center sm:justify-center sm:space-x-12'
          aria-label='Footer'
        >
          {navigation.main.map(
            (item) =>
              (item.external && (
                <div key={item.name} className='pb-6'>
                  <a
                    key={item.name}
                    href={item.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={'transition-colors hover:text-foreground/80'}
                  >
                    {item.name}
                  </a>
                </div>
              )) || (
                <div key={item.name} className='pb-6'>
                  <Link
                    key={item.name}
                    href={item.href}
                    className={'transition-colors hover:text-foreground/80'}
                  >
                    {item.name}
                  </Link>
                </div>
              )
          )}
        </nav>
        <div className='mt-10 flex justify-center space-x-10'>
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <p className='mt-10 text-center text-xs leading-5 text-gray-500'>
          &copy; 2024 Atrati All rights reserved.
        </p>
      </div>
    </footer>
  );
}
