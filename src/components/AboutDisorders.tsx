
const AboutDisorders = () => {
  const disorders = [
    {
      title: "Transtorno Bipolar",
      description: "O transtorno bipolar é um transtorno de humor caracterizado por mudanças intensas no estado emocional. A pessoa alterna entre episódios de depressão — com tristeza profunda, falta de energia, perda de interesse e sentimentos de vazio — e episódios de mania ou hipomania, marcados por euforia, agitação, impulsividade, irritabilidade, aceleração do pensamento e pouca necessidade de sono. Essas fases podem durar dias ou semanas e impactam significativamente a rotina, os relacionamentos e a tomada de decisões. Existem diferentes tipos de transtorno bipolar, sendo os mais comuns o Tipo I e o Tipo II, que variam conforme a intensidade dos episódios."
    },
    {
      title: "Transtornos Depressivos",
      description: "A depressão afeta profundamente o humor, os pensamentos, o corpo e o comportamento. Os sintomas mais comuns incluem tristeza intensa e persistente, cansaço, sensação de vazio, perda de interesse por atividades antes prazerosas, alterações no sono e no apetite, dificuldades de concentração e sentimentos de culpa ou inutilidade. Em alguns casos, pode haver pensamentos sobre a morte ou a vontade de desaparecer. Não se trata de \"fraqueza\" ou \"falta de força de vontade\", mas sim de uma condição clínica que precisa ser compreendida com seriedade."
    },
    {
      title: "Transtornos de Ansiedade",
      description: "A ansiedade é uma resposta do corpo a situações de perigo ou incerteza. No entanto, quando se torna frequente e intensa, passa a ser um transtorno. Os sintomas incluem preocupação excessiva, inquietação, tensão muscular, aceleração dos batimentos cardíacos, dificuldade para dormir e sensação de que algo ruim vai acontecer. Em casos mais agudos, pode haver crises de pânico, falta de ar, tremores e medo intenso. Existem diferentes tipos de transtornos de ansiedade, como a ansiedade generalizada, o transtorno do pânico e a fobia social."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            Sobre os transtornos
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
          {disorders.map((disorder, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-medium text-foreground mb-4 text-center">
                {disorder.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-justify">
                {disorder.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutDisorders;
