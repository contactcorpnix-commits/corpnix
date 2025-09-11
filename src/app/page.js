import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import ProjectHomepage from '@/components/sections/projecthomepage';
import Testimonials from '@/components/sections/testimonials';
import Stats from '@/components/sections/stats';
import ContactSection from '@/components/sections/contactus';
import FAQsSection from '@/components/sections/faqs'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <ProjectHomepage limit={3} />
      <Testimonials />
      <FAQsSection />
      <ContactSection />
    </div>
  );
}
