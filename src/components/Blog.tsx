
import { Calendar, Clock } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      title: "Como identificar sinais de ansiedade no dia a dia",
      excerpt: "A ansiedade pode se manifestar de diferentes formas. Aprenda a reconhecer os sinais e quando buscar ajuda profissional.",
      date: "15 de Janeiro, 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "A importância do autocuidado para a saúde mental",
      excerpt: "Descubra práticas simples e eficazes para cuidar do seu bem-estar emocional no cotidiano.",
      date: "8 de Janeiro, 2024",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Construindo relacionamentos mais saudáveis",
      excerpt: "Estratégias para melhorar a comunicação e fortalecer vínculos afetivos em seus relacionamentos.",
      date: "2 de Janeiro, 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=250&fit=crop&crop=center"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-nude-50 to-rose-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            Blog & Artigos
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conteúdos sobre saúde mental, bem-estar e desenvolvimento pessoal 
            para apoiar sua jornada de autoconhecimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-foreground mb-3 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
            Ver todos os artigos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
