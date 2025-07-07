
const About = () => {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#CEAAAA' }}>
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl p-6">
              <img 
                src="/lovable-uploads/4ef9d321-cf58-44fd-9557-06c195abcf1d.png"
                alt="Graciela Oliveira - Psicóloga"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
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
                Sou <strong>Graciela Oliveira</strong>, psicóloga clínica especializada em terapia cognitiva comportamental, com formações complementares em psicopatologia e práticas baseadas em evidências.
              </p>
              
              <p>
                Atuo com foco no transtorno bipolar, oferecendo escuta qualificada, intervenções individualizadas e um acompanhamento ético, atualizado e acolhedor.
              </p>
              
              <p>
                Meu compromisso é ajudar cada pessoa a compreender o que sente, construir estabilidade e retomar o protagonismo da própria vida.
              </p>
            </div>
            
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#B4715A' }}>
              <h3 className="font-medium mb-3 text-white">Formação e Especializações</h3>
              <ul className="space-y-2 text-white">
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
