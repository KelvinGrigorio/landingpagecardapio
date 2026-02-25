import { Smartphone, Image as ImageIcon } from 'lucide-react';

const Demo = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Veja como funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interface moderna e intuitiva para você e seus clientes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="aspect-[9/16] bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <Smartphone className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Cardápio Digital</h3>
                <p className="text-emerald-100">Navegação fácil e rápida</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="aspect-[9/16] bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <ImageIcon className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Fotos Atrativas</h3>
                <p className="text-emerald-100">Mostre seus produtos</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="aspect-[9/16] bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-emerald-600 text-2xl font-bold">R$</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Checkout Simples</h3>
                <p className="text-emerald-100">Finalização em segundos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Totalmente personalizado
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl">✓</span>
                  <span>Suas cores e identidade visual</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl">✓</span>
                  <span>Seu logo em destaque</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl">✓</span>
                  <span>Fotos profissionais dos seus produtos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl">✓</span>
                  <span>Informações de contato e horário</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">📱</div>
              <p className="text-gray-700 font-medium">
                Exemplo de cardápio personalizado com a identidade do seu negócio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
