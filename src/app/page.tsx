import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Achievements from '@/components/Achievements';
import Services from '@/components/Services';
import Platforms from '@/components/Platforms';
import Results from '@/components/Results';
import BuildGallery from '@/components/BuildGallery';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Achievements />
      <Services />
      <Platforms />
      <Results />
      <BuildGallery />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
