import { Palette, Link2, MessageCircle, ShoppingCart, RefreshCw, Store } from 'lucide-react';

const Solution = () => {
  const features = [
    {
      icon: Palette,
      title: "Personalização completa",
      description: "Logo, cores e fotos do seu negócio"
    },
    {
      icon: Link2,
      title: "Link exclusivo da marca",
      description: "Seu próprio endereço profissional"
    },
    {
      icon: MessageCircle,
      title: "Pedidos direto no WhatsApp",
      description: "Cliente finaliza e você recebe na hora"
    },
    {
      icon: ShoppingCart,
      title: "Checkout simples",
      description: "Processo rápido e intuitivo"
    },
    {
      icon: RefreshCw,
      title: "Fácil atualização",
      description: "Mude produtos e preços quando quiser"
    },
    {
      icon: Store,
      title: "Para todo tipo de negócio",
      description: "Restaurante, marmitaria, cafeteria, lanchonete"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            A solução simples para modernizar seu atendimento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo que você precisa para ter seu próprio sistema de pedidos online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:bg-emerald-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
