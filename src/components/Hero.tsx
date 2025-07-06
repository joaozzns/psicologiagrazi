
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-nude-50 via-background to-rose-50">
      <div className="container-max section-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
              Um espaço seguro para o seu
              <span className="text-primary font-medium block">bem-estar emocional</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ofereço um atendimento psicológico humanizado e acolhedor, 
              respeitando sua individualidade e ritmo único de crescimento pessoal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Agende sua sessão
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-full"
              >
                Conheça meu trabalho
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-br from-nude-200 to-rose-200 p-8">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=500&fit=crop&crop=center"
                alt="Ambiente acolhedor para terapia"
                className="w-full h-full object-cover rounded-full shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rose-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
