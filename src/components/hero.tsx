import { MessageCircle } from 'lucide-react';

const Hero = () => {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20Cardápio%20Web";

  return (
    <section className="bg-gradient-to-br from-emerald-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Tenha seu próprio sistema de pedidos com a identidade da sua marca
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Pare de depender apenas de aplicativos e PDF no WhatsApp.
              Tenha seu próprio link profissional para receber pedidos.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-6 h-6" />
              Quero meu Cardápio Web
            </a>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-4 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl aspect-[9/16] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Seu Cardápio</h3>
                  <p className="text-gray-600">Profissional e Personalizado</p>
                  <div className="mt-8 space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="h-3 bg-emerald-200 rounded w-3/4 mb-2"></div>
                        <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-emerald-200 rounded-3xl transform -rotate-3 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
