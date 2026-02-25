import { CheckCircle2 } from 'lucide-react';

const Benefits = () => {
    const benefits = [
        {
            title: "Seu próprio canal de vendas",
            description: "Independência total dos aplicativos de delivery"
        },
        {
            title: "Mais organização nos pedidos",
            description: "Sistema estruturado e fácil de gerenciar"
        },
        {
            title: "Mais autoridade para sua marca",
            description: "Presença digital profissional e moderna"
        },
        {
            title: "Fácil de usar",
            description: "Interface simples para você e seus clientes"
        },
        {
            title: "Sem depender somente de aplicativos",
            description: "Reduza custos e tenha controle do seu negócio"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Mais controle. Mais profissionalismo. Mais independência.
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex gap-4"
                        >
                            <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-emerald-100 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
