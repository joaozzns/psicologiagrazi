
const InstagramSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center">
          {/* Desktop version - horizontal image */}
          <div className="hidden md:block">
            <img 
              src="/lovable-uploads/e23d5c38-a003-46f7-97ac-24f48cc22616.png" 
              alt="Me acompanhe no Instagram - @gracielaoliveira.psi"
              className="w-full max-w-5xl mx-auto rounded-2xl shadow-lg"
            />
          </div>
          
          {/* Mobile version - vertical image */}
          <div className="block md:hidden">
            <img 
              src="/lovable-uploads/8b6b3442-dec6-4cea-a1bc-728de3c2131f.png" 
              alt="Me acompanhe no Instagram - @gracielaoliveira.psi"
              className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
