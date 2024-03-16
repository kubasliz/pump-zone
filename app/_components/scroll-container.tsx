'use client';

import { QuaterOfCircle } from '@/components/decoration/quarter-of-circle';
import { Heading } from '@/components/heading';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { USERS } from '@/constants/user';

export function HeroScroll() {
  return (
    <div className="relative flex flex-col overflow-hidden" id="scroll-container">
      <ContainerScroll
        users={USERS}
        titleComponent={<Heading heading="TRANSFORM YOUR GYM" subheading="OUR MACHINES" />}
      />
      <QuaterOfCircle className="absolute bottom-0 right-0 rotate-180" height={150} width={200} />
      <div className="bg-[#CDC2B1] h-4 w-full" />
    </div>
  );
}
