'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

import { useMobile } from '@/hooks/use-mobile';
import { useScrollTop } from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';

import { MobileMenu } from './mobile-menu';
import { ScrollItem } from './scroll/scroll-item';

export const Navbar = () => {
  const onScroll = useScrollTop();
  const mobile = useMobile();

  return (
    <motion.header
      className={cn(
        'flex max-w-fit fixed bottom-4 inset-x-0 mx-auto border rounded-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-[5000] pr-8 pl-2 md:pr-2 md:pl-8 py-2 items-center justify-center',
        onScroll
      )}
      initial={{
        opacity: 1,
        y: 100
      }}
      animate={{
        y: onScroll ? 0 : 100,
        opacity: onScroll ? 1 : 0
      }}
      transition={{
        duration: 0.2
      }}
    >
      <div className="flex max-w-screen-2xl items-center">
        <div className="flex items-center justify-between flex-row-reverse md:flex-row md:space-x-8">
          {mobile ? <MobileMenu /> : <ScrollItem />}
          <div className="px-4 py-2.5 bg-green-300/80 rounded-full flex items-center justify-center">
            <Phone className="h-4 w-4 mr-2" />
            <p>Contact</p>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
