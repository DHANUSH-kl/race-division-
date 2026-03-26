import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Achievements from '@/components/Achievements';
import RecordSection from '@/components/RecordSection';
import TeamSection from '@/components/TeamSection';
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
import ECUSection from '@/components/ECUSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Achievements />
      <TeamSection />
      <RecordSection />
      <Services />
      <FeaturedTune />
      <Platforms />
      <DynoSection />
      <ECUSection />
      <Results />
      <BuildGallery />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
