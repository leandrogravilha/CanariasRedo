import Header from "./components/Header";
import Footer from "./components/Footer";
import ThreeImageComponent from "./components/ThreeImageComponent";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="flex flex-col bg-white overflow-x-hidden sm:px-0 md:px-0 lg:px-0 xl:px-0">
      <Header />

      {/*Section 1*/}
      <div className="px-10 pt-10">
        <Element name="inicio">
          <div className="flex flex-col mt-40">
            <div className="flex flex-col justify-center text-center items-center space-y-10">
              <h1 className="mt-10 font-bold text-5xl">Inicio</h1>
              <img
                src="/Corralejo_1.webp"
                alt="Corralejo"
                className="aspect-video lg:w-1/2 sm:w-3/4"
              />
              <p className="lg:w-1/2 text-justify text-md lg:text-lg sm:w-3/4">
                FuerteVentura é uma das ilhas do arquipélago das Canárias.
                Apesar de ser subdesenvolvida, não fica atrás em termos
                tropicais. Tem belíssimas praias, ótimos restaurantes e
                comunidades de diversas nacionalidades como italianos, alemães e
                até britânicos. Todos com o seu impacto cultural na ilha, o que
                torna a uma experiência única.
              </p>
            </div>
          </div>
        </Element>
        <Element name="estagios">
          <div className="flex flex-col">
            <div className="flex flex-col justify-center text-center items-center space-y-10">
              <h1 className="mt-10 font-bold text-5xl">Estágios</h1>
              <ThreeImageComponent
                title={"Inet Sistemas"}
                imgSrc1={"/inetCarrinhas.webp"}
                imgSrc2={"/inet2.webp"}
                imgSrc3={"/inet_group.webp"}
                text={`Inet sistemas é uma distribuidora de internet possui um apoio ao
            cliente de qualidade, já que tudo é tratado pessoalmente.
            Fomos bem recebidos, a equipa estava pronta
            para responder às nossas necessidades e nós prontos para retribuir o
            favor. Aprendemos a trabalhar numa nova área, como instalar internet
            em casas de clientes, como a fibra chega às mesmas, e também
            mantivemos as atividades do nosso curso, pois realizamos sites em
            WordPress.`}
              />

              <ThreeImageComponent
                title={"La Cremeria Fuerteventura"}
                imgSrc1={"/cones.webp"}
                imgSrc2={"/geladoGrande.webp"}
                imgSrc3={"/crepe.webp"}
                text={`É uma das gelatarias italianas mais populares de FuerteVentura, isto
            porque tudo o que faz é artesanal. Excelente ponto turístico. A relação entre os estagiários e os
            tutores, foi boa, se alguma de nós tínha algum problema eles
            estiveram sempre dispostos a ajudar, foram sempre alegres e bem
            educados. Aprendemos uma nova língua, como fazer cones artesanais e
            gelados, utilizamos as experiências retiradas dos serviços em que
            participamos com os chefes e ao longo do curso.`}
              />
            </div>
          </div>
        </Element>

        <Element name={"experiencia"}>
          <div className="flex flex-col">
            <div className="flex flex-col justify-center text-center items-center space-y-10">
              <h1 className="mt-10 font-bold text-5xl">Experiência</h1>
              <div className="flex flex-col lg:flex-row lg:space-x-10 justify-center lg:w-1/2 sm:w-3/4">
                <img
                  src="inicioExp.webp"
                  alt="teste"
                  className="lg:w-1/2 mb-5 lg:mb-0"
                />

                <p className="lg:w-1/2 text-justify text-md lg:text-lg ">
                  No início foi tudo muito estranho, pois estávamos longe das
                  nossas famílias, amigos e das nossas tradições, num país que
                  tão pouco a língua compreendíamos, no entanto, aprendemos
                  muito, especialmente de como é viver longe de casa.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row-reverse justify-center lg:w-1/2 sm:w-3/4">
                <img
                  src="Canarias_Final.webp"
                  alt="teste"
                  className="lg:w-1/2 mb-5 lg:mb-0"
                />

                <p className="lg:w-1/2 lg:mr-10 text-justify text-md lg:text-lg ">
                  Dito isto, nós crescemos com esta experiência enquanto
                  aproveitamos ao máximo, quando possível, pois com horários e
                  folgas diferentes tornou-se difícil encontrar dias em que
                  poderíamos explorar juntos.
                </p>
              </div>

              <p className="lg:w-1/2 sm:w-3/4 gap-x-5 text-justify text-md lg:text-lg ">
                Resumindo, sentimos mais preparados para a nossa próxima etapa,
                seja ela prosseguir estudos ou ingressar para o mercado de
                trabalho, seguros das nossas capacidades.
              </p>
            </div>
          </div>
        </Element>

        <Element name="Locais">
          <div className="flex flex-col mt-20 mb-20">
            <div className="flex flex-col justify-center text-center items-center space-y-10">
              <h1 className="mt-10 font-bold text-5xl">Locais</h1>
              <h1 className="pt-10 font-bold text-4xl">Ilha dos Lobos</h1>
              <img
                src="/Canarias_island.webp"
                alt="Corralejo"
                className="aspect-video lg:w-1/2 sm:w-3/4"
              />
              <p className="lg:w-1/2 text-justify text-lg sm:w-3/4 text-md lg:text-lg ">
                A Ilha dos Lobos é uma área protegida no arquipélago das
                Canárias que não é habitada desde 1968. Como está próxima do
                norte de áfrica, ela encontra-se sempre em temperaturas elevadas
                especialmente em torno do seu vulcão. A ilha é um habita natural
                para diversas espécies de plantas, que conseguem sobreviver
                neste clima, clima este que realça as belíssimas zonas
                balneares. Um sítio a visitar-se numa ida a Fuerteventura.
              </p>
            </div>

            <div className="lg:grid lg:grid-cols-3 lg:justify-center flex flex-col mt-16 mb-8 lg:gap-x-10 space-y-10 lg:space-y-0 h-full">
              <div className="lg:col-span-1 flex flex-col h-full">
                <h1 className="pb-10 font-bold text-2xl text-center">
                  Soltavento
                </h1>
                <div className="flex-grow">
                  <img
                    src="./soltavento.webp"
                    alt="teste"
                    className="mx-auto h-full object-cover aspect-video lg:w-full sm:w-5/6"
                  />
                </div>
                <p className="mt-5 mx-auto lg:w-full sm:w-5/6 text-md lg:text-lg ">
                  O Soltavento é um restaurante à beira-mar que conta com
                  diversos pratos típicos de Fuerteventura, Itália e Espanha.
                  Tem um excelente serviço ao cliente e garçons de diversas
                  nacionalidades, até portuguesa.
                </p>
              </div>
              <div className="lg:col-span-1 flex flex-col h-full">
                <h1 className="pb-10 font-bold text-2xl text-center">
                  SnackCorner
                </h1>
                <div className="flex-grow">
                  <img
                    src="./snackcorner.webp"
                    alt="teste"
                    className="mx-auto h-full object-cover aspect-video lg:w-full sm:w-5/6"
                  />
                </div>
                <p className="mt-5 mx-auto lg:w-full sm:w-5/6">
                  O SnackCorner é um restaurante de fast food caseiro em que a
                  característica que se destaca é a sua qualidade preço. Lugar
                  acolhedor com alguns jogos para passar o tempo, snooker e
                  dardos, enquanto se espera pelos pedidos.
                </p>
              </div>
              <div className="lg:col-span-1 flex flex-col h-full">
                <h1 className="pb-10 font-bold text-2xl text-center">Wakiki</h1>
                <div className="flex-grow">
                  <img
                    src="./wakiki.webp"
                    alt="teste"
                    className="mx-auto h-full object-cover aspect-video lg:w-full sm:w-5/6"
                  />
                </div>
                <p className="mt-5 mx-auto lg:w-full sm:w-5/6">
                  O Wakiki é um restaurante/bar que serve boa comida. No
                  entanto, é mais conhecido pelo seu bar, que se encontra quase
                  sempre cheio, especialmente nos fins de semana, pela sua
                  música, ambiente e serviço rápido.
                </p>
              </div>
            </div>
          </div>
        </Element>
      </div>
      <Footer />
    </div>
  );
}

export default App;
