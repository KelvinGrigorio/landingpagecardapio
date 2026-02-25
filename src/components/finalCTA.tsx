import { MessageCircle, ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá!%20Estou%20pronto%20para%20ter%20meu%20próprio%20sistema%20de%20pedidos!";

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Pronto para ter seu próprio sistema de pedidos?
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Não dependa mais só de aplicativos. Tenha seu próprio canal de vendas
          com a identidade da sua marca. Atendimento personalizado e sem compromisso.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-emerald-600 text-white px-12 py-6 rounded-lg text-xl font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 mb-6"
        >
          <MessageCircle className="w-7 h-7" />
          Falar no WhatsApp Agora
          <ArrowRight className="w-6 h-6" />
        </a>

        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-gray-700">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-1">100+</div>
            <div className="text-gray-400">Estabelecimentos atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-1">24h</div>
            <div className="text-gray-400">Suporte rápido</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-1">5★</div>
            <div className="text-gray-400">Avaliação média</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
