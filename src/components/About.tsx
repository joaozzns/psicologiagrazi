
const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-nude-100 to-rose-100 p-6">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop&crop=center"
                alt="Dra. Maria Silva - Psicóloga"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="absolute -top-3 -left-3 w-20 h-20 bg-gold-300 rounded-full opacity-70"></div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
                Sobre mim
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Sou <strong className="text-foreground">Dra. Maria Silva</strong>, psicóloga clínica formada pela 
                Universidade de São Paulo, com especialização em Terapia Cognitivo-Comportamental 
                e mais de 8 anos de experiência no atendimento clínico.
              </p>
              
              <p>
                Minha abordagem terapêutica é baseada no acolhimento, escuta ativa e respeito 
                à individualidade de cada pessoa. Acredito que cada um possui recursos internos 
                para superar suas dificuldades, e meu papel é facilitar esse processo de autodescoberta.
              </p>
              
              <p>
                Trabalho com adolescentes e adultos, oferecendo um espaço seguro e livre de 
                julgamentos para que você possa expressar seus sentimentos e trabalhar questões 
                que impactam sua qualidade de vida.
              </p>
            </div>
            
            <div className="bg-nude-50 p-6 rounded-xl">
              <h3 className="font-medium text-foreground mb-3">Formação e Especializações</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Graduação em Psicologia - USP</li>
                <li>• Especialização em Terapia Cognitivo-Comportamental</li>
                <li>• Formação em Mindfulness e Terapias de Terceira Onda</li>
                <li>• CRP: 06/123456</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
