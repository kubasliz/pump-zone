import { Armchair, Dumbbell, ShieldCheck } from 'lucide-react';

import { AboutItem } from '@/components/about-item';
import { BackgroundWrapper } from '@/components/background-wrapper';

export const About = () => {
  return (
    <>
      <div
        className="relative bg-black flex items-center justify-center px-4 py-20 md:pt-40 md:pb-60"
        id="about"
      >
        <div className="w-full md:max-w-[80%] bg-[#E2DDDB] rounded-xl px-4 py-6 md:px-14 md:py-10 shadow-md z-10">
          <div className="flex flex-col justify-between mt-8 space-y-4 text-[#2C2B2A]">
            <h1 className="text-4xl font-bold">FAR BEYOND MACHINES</h1>
            <p className="font-medium">
              We offer high-quality equipment and personalized services to meet your needs. In
              addition to advanced service and support from a team of dedicated specialists, we
              provide marketing and architectural services to strengthen and reposition your brand
              in the market.
            </p>
          </div>
          <BackgroundWrapper
            image="/about.jpeg"
            className="rounded-2xl shadow-md mt-10 px-4 md:my-10"
          >
            <div className="py-20">
              <div className="flex flex-col gap-y-2 ml-0 md:ml-10 max-w-md">
                <AboutItem icon={Dumbbell} description="High quality equipment" />
                <AboutItem icon={ShieldCheck} description="Advanced care and support" />
                <AboutItem icon={Armchair} description="Marketing and architectural services" />
              </div>
            </div>
          </BackgroundWrapper>
        </div>
      </div>
      <div className="bg-[#CDC2B1] h-4 w-full" />
    </>
  );
};
