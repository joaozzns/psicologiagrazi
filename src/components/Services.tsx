
import { Clock, Video, MapPin, Heart } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-nude-50 to-rose-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            Como funciona o atendimento
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofereço um atendimento flexível e personalizado, adequado às suas necessidades e preferências
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Video className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-medium text-foreground mb-2">Online</h3>
            <p className="text-muted-foreground text-sm">
              Atendimento por videochamada, com total privacidade e comodidade
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-medium text-foreground mb-2">Presencial</h3>
            <p className="text-muted-foreground text-sm">
              Consultório acolhedor localizado em região central e acessível
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-medium text-foreground mb-2">50 minutos</h3>
            <p className="text-muted-foreground text-sm">
              Sessões com duração adequada para um atendimento completo
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-medium text-foreground mb-2">Acolhimento</h3>
            <p className="text-muted-foreground text-sm">
              Ambiente seguro e livre de julgamentos para seu bem-estar
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-xl font-medium text-foreground mb-6 text-center">Modalidades de Atendimento</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-2 h-2 bg-primary rounded-full mx-auto mb-3"></div>
              <h4 className="font-medium text-foreground mb-2">Terapia Individual</h4>
              <p className="text-muted-foreground text-sm">
                Atendimento personalizado focado em suas necessidades específicas
              </p>
            </div>
            <div className="text-center">
              <div className="w-2 h-2 bg-primary rounded-full mx-auto mb-3"></div>
              <h4 className="font-medium text-foreground mb-2">Terapia de Casal</h4>
              <p className="text-muted-foreground text-sm">
                Trabalho conjunto para fortalecer vínculos e comunicação
              </p>
            </div>
            <div className="text-center">
              <div className="w-2 h-2 bg-primary rounded-full mx-auto mb-3"></div>
              <h4 className="font-medium text-foreground mb-2">Orientação Familiar</h4>
              <p className="text-muted-foreground text-sm">
                Suporte para questões familiares e dinâmicas relacionais
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
