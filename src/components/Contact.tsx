
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Clock, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:graciela.souza.oliveira@gmail.com';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5521979391820', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            Entre em Contato
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre escuta, compreensão e mudança, existe um caminho possível. Estou aqui para acompanhá-la (o)
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Telefone e WhatsApp</h4>
                  <p className="text-muted-foreground">(21) 97939-1820</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Horário de Atendimento</h4>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 21h
                  </p>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleWhatsApp}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>

          {/* Formulário */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="mt-2"
                  placeholder="Conte-me um pouco sobre o que você gostaria de trabalhar..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-full"
              >
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
