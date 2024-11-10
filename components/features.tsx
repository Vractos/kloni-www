import * as React from 'react';
import clsx from 'clsx';
import {
  BrainCircuit,
  DatabaseZap,
  MessagesSquare,
  AreaChart,
  UsersRound,
  Puzzle,
} from 'lucide-react';

interface Feature {
  name: string;
  comingSoon: boolean;
  description: string;
  icon: React.FC;
}

const features = [
  {
    name: 'Theradata',
    comingSoon: false,
    description:
      'A Theradata é a nossa base de dados inteligente, atualizada automaticamente com os dados mais recentes das startups.',
    icon: function DataBaseIcon() {
      return (
        <DatabaseZap
          className='h-3/4 w-3/4 md:h-1/2 md:w-1/2'
          color='rgb(124,58,300)'
          strokeWidth={1.5}
        />
      );
    },
  },
  {
    name: 'Inteligência Artificial',
    comingSoon: false,
    description:
      'Com inteligência artificial qualificamos as startups para o seu desafio.',
    icon: function BrainIcon() {
      return (
        <BrainCircuit
          className='h-3/4 w-3/4 md:h-1/2 md:w-1/2'
          color='rgb(124,58,300)'
          strokeWidth={1.5}
        />
      );
    },
  },
  {
    name: 'Desafios abertos',
    comingSoon: true,
    description:
      'Chamadas e desafios abertos para todo o ecossistema, garantindo visibilidade para sua marca.',
    icon: function ContactsIcon() {
      return (
        <MessagesSquare
          className='h-3/4 w-3/4 md:h-1/2 md:w-1/2'
          color='rgb(124,58,300)'
          strokeWidth={1.5}
        />
      );
    },
  },
  {
    name: 'Comparação de startups',
    comingSoon: false,
    description:
      'Compare startups e seus dados e descubra qual a melhor solução para o seu desafio.',
    icon: function ContactsIcon() {
      return (
        <AreaChart
          className='h-3/4 w-3/4 md:h-1/2 md:w-1/2'
          color='rgb(124,58,300)'
          strokeWidth={1.5}
        />
      );
    },
  },
  {
    name: 'Squad alocado',
    comingSoon: true,
    description:
      'Tenha um squad de especialistas multidisciplinares alocados para te acompanhar durante todo o processo de inovação.',
    icon: function ContactsIcon() {
      return (
        <UsersRound
          className='h-3/4 w-3/4 md:h-1/2 md:w-1/2'
          color='rgb(124,58,300)'
          strokeWidth={1.5}
        />
      );
    },
  },
  {
    name: 'Acompanhamento de PoC',
    comingSoon: false,
    description:
      'Nosso time ajuda você a desenhar e acompanhar a PoC, garantindo a melhor experiência possível.',
    icon: function ContactsIcon() {
      return (
        <Puzzle
          className='h-3/4 w-3/4 md:h-1/2 md:w-1/2'
          color='rgb(124,58,300)'
          strokeWidth={1.5}
        />
      );
    },
  },
];

function Feature({
  feature,
  isActive,
  className,
  ...props
}: {
  feature: Feature;
  isActive?: boolean;
  className?: string;
}) {
  return (
    <div className=' flex flex-col items-center' {...props}>
      <div className='h-7 w-7 md:h-12 md:w-12 flex justify-center items-center text-base rounded-lg font-medium bg-transparent border-[1px] border-[rgb(124,58,237)]/40 text-slate-100 bg-gradient-to-tl from-[rgb(124,58,237)]/30 via-[rgb(124,58,237)]/20 via-5% to-transparent'>
        <feature.icon />
      </div>
      <h3
        className={clsx(
          'mt-4 text-xs sm:text-sm font-medium',
          'text-foreground'
        )}
      >
        {feature.name}
        {/* {feature.comingSoon && (
          <span className='inline-flex items-center rounded-full bg-yellow-50 px-1.5 py-0.5 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 ml-3'>
            Em breve
          </span>
        )} */}
      </h3>
      <p className='mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground text-center'>
        {feature.description}
      </p>
    </div>
  );
}

export function Features() {
  return (
    <div className='sm:container pt-10 md:pt-16 lg:pt-24 lg:px-24 lg:block'>
      <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-20'>
        {features.map((feature) => (
          <Feature
            key={feature.name}
            feature={{
              ...feature,
            }}
            className='relative'
          />
        ))}
      </div>
    </div>
  );
}
