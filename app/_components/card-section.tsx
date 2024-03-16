'use client';

import Image from 'next/image';

import { HalfOfCircle } from '@/components/decoration/half-of-circle';
import { QuaterOfCircle } from '@/components/decoration/quarter-of-circle';
import { Heading } from '@/components/heading';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { CARD_DATA } from '@/constants/card-data';

export function CardSection() {
  return (
    <div className="relative px-2" id="card-section">
      <QuaterOfCircle className="top-0 left-0" height={150} width={200} />
      <HalfOfCircle className="top-40 right-0 h-full w-[350px]" />
      <Heading heading="A COMPLETE EXPERIENCE" subheading="PumpZone 360" className="text-center" />
      <div className="grid grid-cols-1  2xl:grid-cols-3">
        {CARD_DATA.map((item) => (
          <CardContainer className="inter-var" key={item.id}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {item.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={item.image}
                  height="1000"
                  width="1000"
                  className="h-[40vh] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
