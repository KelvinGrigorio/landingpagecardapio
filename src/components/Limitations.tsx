import { AlertCircle } from 'lucide-react';

const Limitations = () => {
  const limitations = [
    "Alteração estrutural do layout",
    "Mudança completa de design",
    "Desenvolvimento de funcionalidades personalizadas",
    "Integração com sistemas ERP complexos",
    "Projetos sob demanda fora da estrutura padrão"
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que não está incluso
          </h2>
          <p className="text-lg text-gray-600">
            Para manter o sistema organizado e acessível, não realizamos:
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
          <ul className="space-y-4">
            {limitations.map((limitation, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-700">{limitation}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm">
              O sistema possui estrutura definida, com personalização visual da identidade do seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Limitations;
