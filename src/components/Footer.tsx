
const Footer = () => {
  return (
    <footer className="py-12" style={{ backgroundColor: '#373737', color: '#CEAAAA' }}>
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">Graciela Oliveira</h3>
            <p className="leading-relaxed opacity-80">
              Cada pessoa tem seu tempo, seu ritmo e sua história. Aqui, você encontra um espaço para ser ouvido(a), acolhido(a) e guiado(a) com empatia no seu processo de transformação.
             </p>
             <p style="margin-top: 20px;">
              Se você vive com depressão, transtorno bipolar ou ansiedade, saiba que não está só, e que é possível viver com mais equilíbrio e bem-estar.
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
              <p>(21) 97939-1820</p>
              <p>graciela.souza.oliveira@gmail.com</p>
              <p className="text-sm mt-4">CRP: 05/75493</p>
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
