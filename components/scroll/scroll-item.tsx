import { useMobile } from '@/hooks/use-mobile';

import { Scroll } from './scroll';

export const ScrollItem = () => {
  const isSmallScreen = useMobile();

  const offset = isSmallScreen ? 50 : 0;

  return (
    <>
      <Scroll to="about" smooth duration={1000} offset={offset}>
        <p>About</p>
      </Scroll>
      <Scroll to="card-section" smooth duration={1000} offset={offset}>
        <p className="h-full">PumpZone 360</p>
      </Scroll>
      <Scroll to="scroll-container" smooth duration={1000} offset={offset}>
        <p className="h-full">Machines</p>
      </Scroll>
      <Scroll to="question" smooth duration={1000} offset={offset}>
        <p className="h-full">FAQ</p>
      </Scroll>
    </>
  );
};
