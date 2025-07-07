
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center" style={{ backgroundColor: '#CEAAAA' }}>
      <div className="container-max section-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#373737' }}>
              Um espaço seguro para o seu
              <span className="font-medium block" style={{ color: '#B4715A' }}>bem-estar emocional</span>
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#373737' }}>
              Ofereço um atendimento psicológico humanizado e acolhedor, 
              respeitando sua individualidade e ritmo único de crescimento pessoal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:opacity-90"
                style={{ backgroundColor: '#B4715A' }}
              >
                Agende sua sessão
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 rounded-full hover:opacity-80"
                style={{ 
                  borderColor: '#B4715A', 
                  color: '#B4715A',
                  backgroundColor: 'transparent'
                }}
              >
                Conheça meu trabalho
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-full p-8" style={{ backgroundColor: '#9EA697' }}>
              <img 
                src="/lovable-uploads/20d306ea-0b08-4f21-87cb-be190903ab09.png"
                alt="Graciela Oliveira - Psicóloga"
                className="w-full h-full object-cover rounded-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
