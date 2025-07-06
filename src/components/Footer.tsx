
const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">Dra. Maria Silva</h3>
            <p className="text-background/80 leading-relaxed">
              Psicóloga clínica dedicada ao atendimento humanizado e acolhedor, 
              promovendo o bem-estar emocional de cada pessoa.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-background transition-colors"
                >
                  Sobre Mim
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-background transition-colors"
                >
                  Atendimento
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-background transition-colors"
                >
                  Áreas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-background transition-colors"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contato</h4>
            <div className="space-y-2 text-background/80">
              <p>(11) 99999-9999</p>
              <p>contato@mariasilva.psi.br</p>
              <p>Vila Madalena, São Paulo - SP</p>
              <p className="text-sm mt-4">CRP: 06/123456</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 Dra. Maria Silva - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
