
import { Clock, Video, Heart } from 'lucide-react';

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

        <div className="grid md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default Services;
