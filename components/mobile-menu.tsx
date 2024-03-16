import { Menu } from 'lucide-react';

import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ScrollItem } from './scroll/scroll-item';

export const MobileMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Menu className="h-6 w-6 ml-6" />
      </PopoverTrigger>
      <PopoverContent className="w-40 mb-6 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex flex-col items-center justify-center space-y-4">
          <ScrollItem />
        </div>
      </PopoverContent>
    </Popover>
  );
};
