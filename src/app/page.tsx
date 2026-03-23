import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Achievements from '@/components/Achievements';
import RecordSection from '@/components/RecordSection';
import Services from '@/components/Services';
import FeaturedTune from '@/components/FeaturedTune';
import Platforms from '@/components/Platforms';
import Results from '@/components/Results';
import BuildGallery from '@/components/BuildGallery';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import DynoSection from '@/components/DynoSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Achievements />
      <RecordSection />
      <Services />
      <div className="relative isolate">
        <FeaturedTune />
        <Platforms />
      </div>
      <DynoSection />
      <Results />
      <BuildGallery />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
