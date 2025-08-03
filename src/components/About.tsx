

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
                Olá! Me chamo Graciela Oliveira, sou psicóloga (CRP 05/75493) com atuação clínica voltada ao cuidado emocional de pessoas que enfrentam transtornos de humor, como depressão e transtorno bipolar, além de quadros de ansiedade.
              </p>
              
              <p className="text-lg">
                Sou pós-graduada em Terapia Cognitivo-Comportamental e graduanda em Psicoterapias Baseadas em Evidências. Acredito na importância de um atendimento ético, acolhedor e embasado na ciência.
              </p>
              
              <p className="text-lg">
                Com escuta empática, trabalho para oferecer não apenas alívio dos sintomas, mas também compreensão, educação emocional e estratégias práticas que ajudam você a lidar melhor com suas oscilações de humor, pensamentos negativos e crises de ansiedade ou impulsividade.
              </p>
              
              <p className="text-lg">
                Estou em constante atualização para oferecer o melhor cuidado psicológico. Minhas formações incluem:
              </p>
            </div>
            
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#B4715A' }}>
              <ul className="space-y-2 text-white">
                <li>• Terapia Cognitivo-Comportamental (TCC) – GrupoPBE</li>
                <li>• Psicopatologia (estudo e compreensão dos transtornos mentais) – GrupoPBE</li>
                <li>• Formação continuada em Transtorno Bipolar</li>
                <li>• Intensivo em Prevenção do Suicídio – GrupoPBE</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

