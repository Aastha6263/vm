import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import StaticBar from '../components/StaticBar';
import HeroSection from '../components/HeroSection';
//import Services from './Services';
import Services from './Services';
import Careers from './careers';
import Whychoosevmm from './whychoosevmms.jsx';
import Testimonials from './Testimonials';
import Contact from './contact';
import Industries from './Industries';
import { useScroll } from '../context/ScrollContext';

export default function Home() {
  const {
    // courseRef,
    servicesRef,
    careersRef,
    industriesRef,
    testimonialsRef,
    contactRef,
  } = useScroll();

  return (
    <>
      <Header />
      <StaticBar />
      <HeroSection />

      <section ref={servicesRef} className="scroll-mt-24">
        <Services />
      </section>

      <section ref={careersRef} className="scroll-mt-24">
        <Careers />
      </section>

      <section ref={industriesRef} className="scroll-mt-24">
        <Industries />
      </section>
      <Whychoosevmm />
      <section ref={testimonialsRef} className="scroll-mt-24">
        <Testimonials />
      </section>
      <section ref={contactRef} className="scroll-mt-24">
        <Contact />
      </section>

      <Footer />
    </>
  );
}
