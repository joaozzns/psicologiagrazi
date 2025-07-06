
const About = () => {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#CEAAAA' }}>
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl p-6" style={{ backgroundColor: '#9EA697' }}>
              <img 
                src="/lovable-uploads/20d306ea-0b08-4f21-87cb-be190903ab09.png"
                alt="Graciela Oliveira - Psicóloga"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="absolute -top-3 -left-3 w-20 h-20 rounded-full opacity-70" style={{ backgroundColor: '#B4715A' }}></div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#373737' }}>
                Sobre mim
              </h2>
              <div className="w-16 h-1 rounded-full" style={{ backgroundColor: '#B4715A' }}></div>
            </div>
            
            <div className="space-y-6 leading-relaxed" style={{ color: '#373737' }}>
              <p className="text-lg">
                Sou <strong>Graciela Oliveira</strong>, psicóloga clínica formada pela 
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
            
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#9EA697' }}>
              <h3 className="font-medium mb-3" style={{ color: '#373737' }}>Formação e Especializações</h3>
              <ul className="space-y-2" style={{ color: '#373737' }}>
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
