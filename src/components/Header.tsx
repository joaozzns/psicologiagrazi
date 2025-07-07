
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-sm z-50 border-b border-nude-200" style={{ backgroundColor: '#CEAAA4' }}>
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/86d1288f-3af1-411c-9094-6463851e00f9.png"
              alt="Graciela Oliveira"
              className="h-12"
            />
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-black hover:text-gray-600 transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-black hover:text-gray-600 transition-colors"
            >
              Sobre Mim
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-black hover:text-gray-600 transition-colors"
            >
              Atendimento
            </button>
            <button 
              onClick={() => scrollToSection('areas')}
              className="text-black hover:text-gray-600 transition-colors"
            >
              Áreas
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-black hover:text-gray-600 transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-black/20">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-black hover:text-gray-600 transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-black hover:text-gray-600 transition-colors"
              >
                Sobre Mim
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-black hover:text-gray-600 transition-colors"
              >
                Atendimento
              </button>
              <button 
                onClick={() => scrollToSection('areas')}
                className="text-left text-black hover:text-gray-600 transition-colors"
              >
                Áreas
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-black hover:text-gray-600 transition-colors"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
