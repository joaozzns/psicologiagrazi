
const Footer = () => {
  return (
    <footer className="py-12" style={{ backgroundColor: '#373737', color: '#CEAAAA' }}>
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">Graciela Oliveira</h3>
            <p className="leading-relaxed opacity-80">
              Psicóloga clínica dedicada ao atendimento humanizado e acolhedor, 
              promovendo o bem-estar emocional de cada pessoa.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Links Rápidos</h4>
            <ul className="space-y-2 opacity-80">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:opacity-100 transition-opacity"
                >
                  Sobre Mim
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:opacity-100 transition-opacity"
                >
                  Atendimento
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:opacity-100 transition-opacity"
                >
                  Áreas
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contato</h4>
            <div className="space-y-2 opacity-80">
              <p>(11) 99999-9999</p>
              <p>contato@gracielaoliveira.psi.br</p>
              <p>Vila Madalena, São Paulo - SP</p>
              <p className="text-sm mt-4">CRP: 06/123456</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center opacity-60" style={{ borderColor: '#CEAAAA' }}>
          <p>&copy; 2024 Graciela Oliveira - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
