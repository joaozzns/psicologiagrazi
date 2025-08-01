
const Areas = () => {
  const areas = [
    {
      title: "Depressão",
      description: "Tristeza profunda, falta de motivação, culpa excessiva, cansaço constante, perda de interesse pelas atividades do dia a dia.",
      color: "bg-rose-100 text-rose-700"
    },
    {
      title: "Transtorno Bipolar (Tipo I e II)",
      description: "Oscilações intensas de humor entre episódios depressivos e fases de euforia, impulsividade ou irritabilidade (hipomania ou mania).",
      color: "bg-gold-100 text-gold-700"
    },
    {
      title: "Ansiedade",
      description: "Preocupações excessivas, insônia, tensão, medo constante, crises de pânico, fobia social ou ansiedade generalizada.",
      color: "bg-rose-100 text-rose-700"
    },
    {
      title: "Oscilações de humor sem diagnóstico definido",
      description: "Casos em que a pessoa ainda não recebeu um diagnóstico, mas percebe instabilidade emocional, dificuldade de concentração, irritabilidade frequente ou crises recorrentes.",
      color: "bg-gold-100 text-gold-700"
    }
  ];

  return (
    <section id="areas" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            Áreas de Atendimento
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Atendo adolescentes (a partir de 14 anos) e adultos que enfrentam desafios emocionais relacionados a:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${area.color}`}>
                Especialidade
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Areas;
