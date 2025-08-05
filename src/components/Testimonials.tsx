const Testimonials = () => {
  const testimonials = [
    {
      name: "Saphyra",
      text: "Minha experiência com a psicóloga Graciela tem sido extremamente positiva e transformadora. Ela é uma profissional excepcional, sempre prestativa e atenciosa, além de ser uma ótima ouvinte. Sua dedicação ao cuidado com os pacientes é admirável e reflete o carinho e o respeito. Graciela é muito querida, educada e possui uma sensibilidade única para entender e apoiar nas mais diversas situações. Sua abordagem acolhedora e profissional faz toda a diferença, e sou profundamente grata por ter uma psicóloga tão excelente ao meu lado."
    },
    {
      name: "Victoria",
      text: "A terapia que mudou minha vida, foi incrível encontrar uma psicóloga que me identificasse e que eu pudesse enxergar os reflexos da terapia no meu dia a dia. Sempre que entro ansiosa ou angustiada para uma sessão, saio dela mais confiante, calma e feliz! 🤍 Obrigada por tudo Gra, você é incrível!"
    },
    {
      name: "Ana Olivia",
      text: "Só tenho elogios para a Psicóloga Graciela Oliveira. Juntas já há alguns meses, nosso acompanhamento tem sido de extrema importância para mim. É uma profissional atenciosa, respeitosa, observadora e empática. Sempre atenta a cada detalhe e disposta a ajudar na resolução de todas as demandas. Sabe apontar amorosamente os pontos de melhoria e enaltecer os pontos de força. Eternamente grata pelo profissionalismo, ajuda e carinho."
    },
    {
      name: "Ana Motta",
      text: "Graci, você é incrível! Sua gentileza e empatia são fundamentais para criar um ambiente seguro e acolhedor. Você realmente se importa com seus pacientes e isso é algo muito raro e valoroso. Sempre que preciso, você está lá para ajudar, mesmo fora das sessões. Muito obrigado por tudo! Super indico!"
    },
    {
      name: "Gláucia",
      text: "Pessoa incrível! Já na primeira sessão tive certeza que queria continuar com ela e foi uma das melhores escolhas que eu fiz! Trabalho excelente, com metodologia aplicada e ética.. agradeço muito por estarmos juntas nessa ( como ela sempre diz) e a evolução tem sido notável 🥰🥰"
    },
    {
      name: "Jessinha",
      text: "Uma profissional maravilhosa! Atenciosa, paciente, empática... Estou adorando as terapias com ela, tenho me sentido muito melhor."
    },
    {
      name: "Jenifer",
      text: "O atendimento da Graciela é ótimo, ela é muito paciente e atenciosa! Vivi muito tempo com diagnósticos errados, mas com o acompanhamento dela, tive o diagnóstico correto e tratamento certeiro. Graças ao trabalho dela tenho uma vida mais tranquila e um futuro otimista."
    },
    {
      name: "Welen",
      text: "A jornada com o transtorno bipolar não é fácil, pelo contrário, é cheia de altos e baixos, incertezas e recomeços. Mas ter uma psicóloga tão sensível, competente e acolhedora ao meu lado fez toda a diferença. Com sua escuta atenta, seu olhar humano e suas orientações firmes, Psicóloga Graciela me ajudou a entender o que antes parecia confuso, a acolher minhas emoções e a construir estratégias para lidar com os extremos que essa condição impõe. Gratidão é pouco diante do cuidado, da paciência e do respeito com que ela me trata em cada sessão. Sua atuação vai muito além da técnica, ela transforma vidas com empatia e dedicação. Sou imensamente grata por tê-la em meu processo de cura e autoconhecimento. Obrigada, de coração."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#373737' }}>
            Depoimentos
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: '#B4715A' }}></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border"
              style={{ borderColor: '#CEAAAA' }}
            >
              <div className="mb-4">
                <div className="text-2xl mb-2" style={{ color: '#B4715A' }}>"</div>
                <p className="text-muted-foreground leading-relaxed italic mb-4">
                  {testimonial.text}
                </p>
                <div className="text-2xl text-right" style={{ color: '#B4715A' }}>"</div>
              </div>
              <div className="border-t pt-4" style={{ borderColor: '#CEAAAA' }}>
                <p className="font-medium" style={{ color: '#373737' }}>
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
