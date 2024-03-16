import { About } from './_components/about';
import { CardSection } from './_components/card-section';
import { Footer } from './_components/footer';
import { LandingPage } from './_components/landing-page';
import { Questions } from './_components/questions';
import { HeroScroll } from './_components/scroll-container';

export default function Home() {
  return (
    <>
      <LandingPage />
      <About />
      <CardSection />
      <HeroScroll />
      <Questions />
      <Footer />
    </>
  );
}
