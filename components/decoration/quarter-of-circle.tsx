import Image from 'next/image';

import { cn } from '@/lib/utils';

interface QuaterOfCircleProps {
  className?: string;
  height: number;
  width: number;
}

export const QuaterOfCircle = ({ className, height, width }: QuaterOfCircleProps) => {
  return (
    <div className={cn('absolute -z-10', className)}>
      <Image src="/circle/circle.svg" height={height} width={width} alt="circle" />
    </div>
  );
};
