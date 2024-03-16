import { Poppins } from 'next/font/google';
import Image from 'next/image';

import { cn } from '@/lib/utils';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600']
});

interface LogoProps {
  width: number;
  height: number;
  className?: string;
}

export const Logo = ({ width, height, className }: LogoProps) => {
  return (
    <div className="flex items-center justify-center">
      <Image src="/logo.svg" alt="PumpZone Logo" width={width} height={height} />
      <h1 className={cn('text-[#CDC2B1] ml-4 font-bold', font.className, className)}>PumpZone</h1>
    </div>
  );
};
