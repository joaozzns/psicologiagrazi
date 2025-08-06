
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services';
import Areas from '@/components/Areas';
import AboutDisorders from '@/components/AboutDisorders';
import PsychotherapyHelp from '@/components/PsychotherapyHelp';
import InstagramSection from '@/components/InstagramSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <Services />
        <Areas />
        <AboutDisorders />
        <PsychotherapyHelp />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
