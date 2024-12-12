import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  SparklesIcon,
  LightBulbIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
  ScissorsIcon,
  ShieldCheckIcon,
  CursorArrowRaysIcon,
  StarIcon,
  UserGroupIcon,
  HeartIcon,
  PencilIcon,
  TvIcon
} from "@heroicons/react/24/solid";

const Home = () => {
  // Define as chaves permitidas para o IconMap
  const services = ["faxina", "elétrica", "montagem de móveis", "encanamento", "jardinagem"] as const;

  // Mapeamento de ícones para os serviços
  const IconMap: Record<typeof services[number], JSX.Element> = {
    faxina: <SparklesIcon className="h-16 w-16 text-blue-500 mx-auto" />,
    elétrica: <LightBulbIcon className="h-16 w-16 text-blue-500 mx-auto" />,
    "montagem de móveis": <WrenchScrewdriverIcon className="h-16 w-16 text-blue-500 mx-auto" />,
    encanamento: <WrenchIcon className="h-16 w-16 text-blue-500 mx-auto" />,
    jardinagem: <ScissorsIcon className="h-16 w-16 text-blue-500 mx-auto" />,
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Banner Principal */}
      <section className="bg-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">Transformando sua necessidade em oportunidade.</h1>
            <p className="text-lg mb-6">Publique uma necessidade ou ofereça seus serviços em poucos cliques.</p>
            <div className="flex justify-center md:justify-start gap-4">
              <button className="px-6 py-3 bg-white text-blue-500 rounded-lg shadow-md hover:bg-gray-200">
                Contratar Serviço
              </button>
              <button className="px-6 py-3 bg-white text-blue-500 rounded-lg shadow-md hover:bg-gray-200">
                Oferecer Serviço
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Como Funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Contrate</h3>
            <p>Publique uma necessidade e receba propostas de prestadores qualificados.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Negocie</h3>
            <p>Converse diretamente com os prestadores para ajustar os detalhes.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Realize</h3>
            <p>Finalize o serviço com segurança e avalie o prestador.</p>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-12 bg-blue-500 text-center text-white">
        <h2 className="text-3xl font-bold mb-10">Por que usar o Ajudaí?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center">
            <StarIcon className="h-16 w-16 mb-4" />
            <p>Contrate com segurança e avaliações reais.</p>
          </div>
          <div className="flex flex-col items-center">
            <CursorArrowRaysIcon className="h-16 w-16 mb-4" />
            <p>Encontre profissionais em poucos cliques.</p>
          </div>
          <div className="flex flex-col items-center">
            <UserGroupIcon className="h-16 w-16 mb-4" />
            <p>Aumente sua visibilidade e conquiste novos clientes.</p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheckIcon className="h-16 w-16 mb-4" />
            <p>Receba pagamentos garantidos e seguros.</p>
          </div>
        </div>
      </section>
      
      {/* Benefícios */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Aproveite seu tempo livre</h2>
        <p className="text-lg text-gray-700 mb-4">
          Foque no que você mais gosta enquanto nós conectamos você aos melhores profissionais para o serviço pesado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center">
            <HeartIcon className="h-16 w-16 mb-4" />
            <p>Passe mais tempo com sua família.</p>
          </div>
          <div className="flex flex-col items-center">
            <PencilIcon className="h-16 w-16 mb-4" />
            <p>Dedique-se ao seu trabalho.</p>
          </div>
          <div className="flex flex-col items-center">
            <TvIcon className="h-16 w-16 mb-4" />
            <p>Desfrute de seus hobbies favoritos.</p>
          </div>
        </div>
      </section>

      {/* Cadastro Rápido */}
      <section className="py-12 bg-white text-white text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-4">Cadastre-se em poucos minutos!</h2>
        <p className="mb-6 text-blue-500">Encontre os melhores serviços ou conquiste novos clientes com facilidade.</p>
        <div className="flex flex-col items-center justify-center gap-4">
          <button className="px-6 py-3 bg-blue-500 rounded-lg shadow-md hover:bg-gray-200 hover:text-blue-500">
            <span>Quero me cadastrar como Cliente</span>
          </button>
          <button className="px-6 py-3 bg-blue-500 rounded-lg shadow-md hover:bg-gray-200 hover:text-blue-500">
            <span>Quero me cadastrar como Prestador</span>
          </button>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">O que nossos usuários dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-sm text-gray-500 italic">
              "Encontrei profissionais qualificados rapidamente, economizando tempo e dinheiro!"
            </p>
            <p className="text-blue-500 font-bold mt-4">- Ana, Cliente</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-sm text-gray-500 italic">
              "A plataforma me ajudou a aumentar minha renda com novos clientes."
            </p>
            <p className="text-blue-500 font-bold mt-4">- João, Prestador</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-sm text-gray-500 italic">
              "A melhor forma de encontrar serviços confiáveis perto de mim!"
            </p>
            <p className="text-blue-500 font-bold mt-4">- Maria, Cliente</p>
          </div>
        </div>
      </section>

      {/* Serviços Populares */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Serviços Mais Procurados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto px-4">
          {services.map((category) => (
            <div
              key={category}
              className="bg-gray-100 rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center h-40"
            >
              {IconMap[category]} {/* Ícone */}
              <h3 className="text-lg font-semibold mt-4">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
