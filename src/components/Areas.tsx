
const Areas = () => {
  const areas = [
    {
      title: "Ansiedade e Transtornos de Humor",
      description: "Tratamento para ansiedade, depressão, síndrome do pânico e outros transtornos emocionais",
      color: "bg-rose-100 text-rose-700"
    },
    {
      title: "Autoestima e Autoconhecimento",
      description: "Desenvolvimento da confiança pessoal e descoberta do seu potencial único",
      color: "bg-gold-100 text-gold-700"
    },
    {
      title: "Relacionamentos Amorosos",
      description: "Questões conjugais, dificuldades de relacionamento e construção de vínculos saudáveis",
      color: "bg-nude-200 text-nude-800"
    },
    {
      title: "Transições de Vida",
      description: "Apoio em momentos de mudança, luto, separação e novos recomeços",
      color: "bg-rose-100 text-rose-700"
    },
    {
      title: "Desenvolvimento Pessoal",
      description: "Crescimento pessoal, definição de objetivos e realização de potencial",
      color: "bg-gold-100 text-gold-700"
    },
    {
      title: "Estresse e Burnout",
      description: "Manejo do estresse profissional e prevenção do esgotamento emocional",
      color: "bg-nude-200 text-nude-800"
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalho com diversas questões emocionais e comportamentais, 
            oferecendo suporte especializado para cada situação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Não encontrou sua questão específica? Entre em contato para conversarmos.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-primary hover:text-primary/80 font-medium underline"
          >
            Fale comigo sobre sua necessidade
          </button>
        </div>
      </div>
    </section>
  );
};

export default Areas;
