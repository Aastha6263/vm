import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import StaticBar from '../components/StaticBar';
import HeroSection from '../components/HeroSection';
import Course from './course';

import Careers from './careers';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './contact';
import Instructors from './Instructors';
import { useScroll } from '../context/ScrollContext';

export default function Home() {
  const { courseRef, careersRef, servicesRef, contactRef } = useScroll();

  return (
    <>
      <Header />
      <StaticBar />
      <HeroSection />

      <section ref={courseRef} className="scroll-mt-24">
        <Course />
      </section>

      <section ref={careersRef} className="scroll-mt-24">
        <Careers />
      </section>

      <Instructors />

      <section ref={servicesRef} className="scroll-mt-24">
        <Services />
      </section>
      <Testimonials />

      <section ref={contactRef} className="scroll-mt-24">
        <Contact />
      </section>

      <Footer />
    </>
  );
}
