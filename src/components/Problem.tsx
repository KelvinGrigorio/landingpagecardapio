import { TrendingDown, FileX, Users, AlertCircle } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Perda de margem em aplicativos",
      description: "Taxas altas que comem seu lucro a cada pedido"
    },
    {
      icon: FileX,
      title: "Cardápio em PDF pouco profissional",
      description: "Imagem amadora que não transmite confiança"
    },
    {
      icon: Users,
      title: "Falta de identidade própria",
      description: "Seu negócio perdido no meio de centenas de concorrentes"
    },
    {
      icon: AlertCircle,
      title: "Dificuldade para organizar pedidos",
      description: "Conversas misturadas e pedidos confusos"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Seu negócio ainda depende só de marketplace?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            É hora de ter seu próprio canal de vendas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <problem.icon className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
