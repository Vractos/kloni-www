import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export function Announcement({ className }: { className?: string }) {
  return (
    <Link
      href='/docs/changelog'
      className={cn(
        'inline-flex items-center rounded-lg bg-input/50 px-3 py-1 mb-1 text-sm font-medium',
        className
      )}
    >
      🚀 <Separator className='mx-2 h-4' orientation='vertical' />{' '}
      <span className='sm:hidden'>Aumente suas vendas</span>
      <span className='hidden sm:inline'>Aumente suas vendas em até 200%</span>
      {/* <ArrowRightIcon className="ml-1 h-4 w-4" /> */}
    </Link>
  );
}
