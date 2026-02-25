import { MessageCircle, Zap, Zap as Spark, TrendingUp, CheckCircle2, X } from 'lucide-react';

const Pricing = () => {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20uma%20demonstração%20personalizada%20do%20Cardápio%20Web";

  const setupFeatures = [
    "Personalização visual (logo, cores, fontes e imagens)",
    "Cadastro inicial de produtos",
    "Configuração do sistema",
    "Publicação do link",
    "Se necessário configuração de hospedagem e domínio"
  ];

  const essentialFeatures = [
    { text: "Cardápio Web personalizado", included: true },
    { text: "Pedidos direcionados para WhatsApp", included: true },
    { text: "Atualizações simples de produtos", included: true },
    { text: "Delivery - Opcional", included: true },
    { text: "Suporte básico", included: true },
    { text: "Sistema interno de organização de pedidos", included: false },
    { text: "Relatórios de vendas", included: false },
    { text: "Controle de caixa", included: false },
    { text: "Impressão térmica", included: false },
    { text: "Hospedagem", included: false },
    { text: "Domínio", included: false }
  ];

  const proFeatures = [
    { text: "Cardápio Web personalizado", included: true },
    { text: "Pedidos direcionados para WhatsApp", included: true },
    { text: "Atualizações simples de produtos", included: true },
    { text: "Delivery - Opcional", included: true },
    { text: "Suporte básico", included: true },
    { text: "Sistema interno de recebimento de pedidos", included: true },
    { text: "Relatório de vendas", included: true },
    { text: "Controle de caixa", included: true },
    { text: "Integração com impressora térmica", included: true },
    { text: "Hospedagem inclusa", included: true },
    { text: "Configuração de domínio*", included: true }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Investimento acessível para modernizar seu negócio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano que se adequa ao seu negócio
          </p>
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">1º Passo - Setup Inicial</h3>
            <p className="text-gray-600">Configuração completa do seu cardápio digital</p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-emerald-500 transition-colors duration-300 max-w-md mx-auto">
            <div className="text-center mb-6">
              <Zap className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-emerald-600 mb-2">R$ 597</div>
              <p className="text-gray-600 mt-2 text-sm">Investimento único</p>
            </div>
            <ul className="space-y-3 text-gray-700">
              {setupFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">2º Passo - Escolha seu Plano Mensal</h3>
            <p className="text-gray-600">Planos para manter seu sistema funcionando e evoluindo</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-emerald-500 transition-colors duration-300">
              <div className="text-center mb-6">
                <Spark className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Essencial</h3>
                <div className="text-4xl font-bold text-emerald-600 mb-1">R$ 67</div>
                <p className="text-gray-600 text-sm">/mês</p>
                <p className="text-gray-500 text-xs mt-2">Perfeito para começar</p>
              </div>
              <ul className="space-y-2 text-gray-700 mb-6">
                {essentialFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature.text}</span>
                      </>
                    ) : (
                      <>
                        <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-400">{feature.text}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300"
              >
                Escolher Essencial
              </button>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-2xl p-8 transform md:scale-105 shadow-xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-400 text-gray-900 px-4 py-1 rounded-full text-xs font-bold">
                MAIS POPULAR
              </div>
              <div className="text-center mb-6">
                <TrendingUp className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="text-4xl font-bold mb-1">R$ 89,90</div>
                <p className="text-emerald-100 text-sm">/mês</p>
                <p className="text-emerald-200 text-xs mt-2">Tudo incluso para crescer</p>
              </div>
              <ul className="space-y-2 mb-6">
                {proFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature.text}</span>
                      </>
                    ) : (
                      <>
                        <X className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-emerald-100">{feature.text}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="w-full bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-300"
              >
                Começar com Pro
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-6 h-6" />
            Solicite uma Demonstração Personalizada
          </a>
          <p className="text-gray-600 mt-4">
            Atendimento direto e sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
