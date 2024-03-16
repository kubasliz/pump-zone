import { cn } from '@/lib/utils';

interface BackgroundProps {
  image: string;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const BackgroundWrapper = ({ image, id, className, children }: BackgroundProps) => {
  return (
    <div
      className={cn('relative h-full bg-no-repeat bg-cover bg-center', className)}
      style={{ backgroundImage: `url(${image})` }}
      id={id}
    >
      {children}
    </div>
  );
};
