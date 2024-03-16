import Image from 'next/image';

import { cn } from '@/lib/utils';

interface HalfOfCircleProps {
  className?: string;
}

export const HalfOfCircle = ({ className }: HalfOfCircleProps) => {
  return (
    <div className={cn('absolute -z-10', className)}>
      <Image src="/circle/circle2.svg" alt="two halves of a circles" fill />
    </div>
  );
};
