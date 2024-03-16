import { Link } from 'react-scroll';

interface ScrollProps {
  to: string;
  smooth: boolean;
  duration: number;
  offset: number;
  children: React.ReactNode;
}

export const Scroll = ({ to, smooth, duration, offset, children }: ScrollProps) => {
  return (
    <Link to={to} smooth={smooth} duration={duration} offset={offset} className="cursor-pointer">
      {children}
    </Link>
  );
};
