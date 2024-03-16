'use client';

import { ArrowUpRight } from 'lucide-react';
import { Poppins } from 'next/font/google';

import { BackgroundWrapper } from '@/components/background-wrapper';
import { Logo } from '@/components/logo';
import { Scroll } from '@/components/scroll/scroll';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600']
});

export const LandingPage = () => {
  return (
    <BackgroundWrapper image="/landing-page.jpeg" id="landing-page">
      <div
        className="top-10 left-4 md:top-20 md:left-20 absolute flex flex-row items-center justify-center"
        id="home"
      >
        <Logo height={60} width={60} className="text-4xl" />
      </div>
      <div className="h-full ml-4 md:ml-20 max-w-md text-[#E2DDDB] flex flex-col justify-center gap-y-8">
        <h1 className={cn('font-semibold uppercase text-4xl md:text-6xl', font.className)}>
          Enhancing the workout
          <br /> <span className="text-[#CDC2B1]">Experience</span>
        </h1>
        <p className="text-sm max-w-sm">
          We are a complete ecosystem of high-quality fitness solutions. We offer
          <span className="text-[#CDC2B1]"> high standard equipment </span>
          and a variety of services to
          <span className="text-[#CDC2B1]"> set up your gym from scratch</span>
        </p>
        <div className="w-[300px] mt-8">
          <Scroll to="scroll-container" smooth duration={1000} offset={0}>
            <div className="group flex flex-row">
              <Button
                className="w-full py-6 bg-transparent text-[#CDC2B1] font-semibold rounded-full flex items-center group-hover:text-black group-hover:bg-[#CDC2B1] transition-colors duration-300 ease-out"
                variant="scroll"
              >
                Transform your gym
              </Button>
              <Button className="rounded-full py-6 px-4 text-black" variant="scroll">
                <ArrowUpRight className="h-4 w-4 shrink-0 rotate-0 transform origin-center group-hover:rotate-90 duration-300 ease-out" />
              </Button>
            </div>
          </Scroll>
        </div>
      </div>
    </BackgroundWrapper>
  );
};
