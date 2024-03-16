import { LucideIcon } from 'lucide-react';
import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';

interface AboutItemProps {
  icon: LucideIcon;
  description: string;
}

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600']
});

export const AboutItem = ({ icon: Icon, description }: AboutItemProps) => {
  return (
    <div className="backdrop-blur-sm bg-white/10 px-8 py-6 rounded-2xl">
      <span className={cn('text-white flex flex-row', font.className)}>
        <Icon className="h-6 w-6 mr-2 text-[#CDC2B1]" />
        {description}
      </span>
    </div>
  );
};
