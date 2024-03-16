import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';

interface HeadingProps {
  heading: string;
  subheading?: string;
  className?: string;
}

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600']
});

export const Heading = ({ heading, subheading, className }: HeadingProps) => {
  return (
    <div className={cn('flex items-center justify-center flex-col pt-40 space-y-4', className)}>
      <div className="flex flex-row items-center justify-center">
        <div className="rounded-full h-2 w-2 bg-[#CDC2B1] mr-2" />
        <p>{subheading}</p>
      </div>
      <h1 className={cn('text-4xl md:text-6xl font-bold', font.className)}>{heading}</h1>
    </div>
  );
};
