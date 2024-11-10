import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Analytics } from '@/components/analytics';
import { ThemeProvider } from '@/components/providers';
import { SiteHeader } from '@/components/site-header';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import Footer from '@/components/footer';

// import { ThemeSwitcher } from "@/components/theme-switcher"
// import { Toaster as DefaultToaster } from "@/registry/default/ui/toaster"
// import { Toaster as NewYorkSonner } from "@/registry/new-york/ui/sonner"
// import { Toaster as NewYorkToaster } from "@/registry/new-york/ui/toaster"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  icons: {
    other: {
      rel: 'icon',
      url: "/favicon.ico",
    },
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  description: siteConfig.description,
  keywords: [
    'Mercado Livre',
    'Calda longa',
    'Aumentar vendas',
    'anúncios',
    'clonar anúncios',
    'gerenciamento de anúncios',
    'Inteligência artificial',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    // images: [
    //   {
    //     url: siteConfig.ogImage,
    //     width: 1200,
    //     height: 630,
    //     alt: siteConfig.name,
    //   },
    // ],
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang='pt-BR' suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            inter.className
          )}
        >
          {/* <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >  */}
          <div>
            <div className='relative flex min-h-screen items-center flex-col'>
              <div className='absolute inset-0 h-full w-full -z-10 bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]' />
              <SiteHeader />
              <main className='flex-1'>{children}</main>
              <Footer />
            </div>
          </div>
          <TailwindIndicator />
          {/* <ThemeSwitcher /> */}
          <Analytics />
          <SpeedInsights />
          {/* <NewYorkToaster />
          <DefaultToaster />
        <NewYorkSonner /> */}
          {/* </ThemeProvider> */}
        </body>
      </html>
    </>


  );
}
