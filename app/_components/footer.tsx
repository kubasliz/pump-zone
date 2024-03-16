'use client';

import { ArrowUpNarrowWide } from 'lucide-react';

import { Logo } from '@/components/logo';
import { Scroll } from '@/components/scroll/scroll';
import { ScrollItem } from '@/components/scroll/scroll-item';
import { useMobile } from '@/hooks/use-mobile';

export const Footer = () => {
  const isMobile = useMobile();

  const logoHeight = isMobile ? 60 : 100;
  const logoWidth = isMobile ? 60 : 100;

  return (
    <div className="bg-[#1F1F1F] py-40 px-4 md:px-20 text-white">
      <div className="flex flex-col justify-center md:justify-between items-center md:flex-row">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-8 text-[#E2DDDB]">
          <ScrollItem />
        </div>
        <div className="group py-10 md:py-0">
          <Scroll to="landing-page" smooth duration={1000} offset={0}>
            <div className="p-3 bg-[#383838] group-hover:bg-[#CDC2B1] rounded-full">
              <ArrowUpNarrowWide className="h-6 w-6 text-[#E2DDDB] group-hover:text-[#383838] transition-colors duration-200 ease-out" />
            </div>
          </Scroll>
        </div>
      </div>
      <div className="border-b border-[#E2DDDB] mt-4 mb-24" />
      <Logo height={logoHeight} width={logoWidth} className="text-4xl md:text-6xl" />
    </div>
  );
};
