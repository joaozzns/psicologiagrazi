
const PsychotherapyHelp = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            Como a psicoterapia pode ajudar?
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Utilizo principalmente a Terapia Cognitivo-Comportamental (TCC), abordagem baseada em evidências, que auxilia no tratamento da depressão, transtorno bipolar e transtornos de ansiedade.
            </p>
            
            <p className="text-lg text-foreground font-medium mb-4">
              Na psicoterapia, você irá aprender a:
            </p>
            
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Identificar e modificar pensamentos automáticos negativos;
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Reduzir sintomas como tristeza profunda, impulsividade ou ansiedade intensa;
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Desenvolver estratégias para lidar com gatilhos emocionais;
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Prevenir recaídas, controlar impulsos e cultivar estabilidade;
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Fortalecer autoestima, relações e recursos internos.
              </li>
            </ul>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cada plano terapêutico é adaptado às necessidades e à realidade emocional de cada pessoa.
            </p>
            
            <div className="text-center">
              <p className="text-foreground font-medium mb-2">Me acompanhe no Instagram:</p>
              <p className="text-primary font-medium">@gracielaoliveira.psi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsychotherapyHelp;
