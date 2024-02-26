import Header from "./components/Header";
import ThreeImageComponent from "./components/ThreeImageComponent";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="flex flex-col bg-white overflow-x-hidden">
      <Header />

      {/*Section 1*/}
      <Element name="inicio">
        <div className="w-screen  flex flex-col mt-40">
          <div className="flex flex-col justify-center text-center items-center space-y-10">
            <h1 className="mt-10 font-bold text-5xl">Inicio</h1>
            <img
              src="/Corralejo_1.jpg"
              alt="Corralejo"
              className="aspect-video lg:w-1/2 sm:w-3/4"
            />
            <p className="lg:w-1/2 text-justify text-lg sm:w-3/4">
              FuerteVentura é uma ilha do arquipélago das Canárias. Apesar de
              ser a mais subdesenvolvida, não fica atrás em termos tropicais,
              pois tem belíssimas praias e ótimos restaurantes. Aqui também
              encontram-se comunidades de diversas nacionalidades como
              italianos, alemães e até britânicos, todos com o seu impacto
              cultural na ilha.
            </p>
          </div>
        </div>
      </Element>
      <Element name="estagios">
        <div className=" w-screen  flex flex-col">
          <div className="flex flex-col justify-center text-center items-center space-y-10">
            <h1 className="mt-10 font-bold text-5xl">Estágios</h1>
            <ThreeImageComponent
              title={"Inet Sistemas"}
              imgSrc1={"/inetCarrinhas.jpeg"}
              imgSrc2={"/inet2.jpeg"}
              imgSrc3={"/inet_group.jpeg"}
              text={`Inet sistemas é uma distribuidora de internet possui um apoio ao
            cliente de altíssima qualidade já que é tudo tratado pessoalmente.
            Nós como estagiários fomos bem recebidos, a equipa estava pronta
            para responder às nossas necessidades e nós prontos para retribuir o
            favor. Aprendemos a trabalhar numa nova área, como instalar internet
            em casas de clientes, como a fibra chega às mesmas, e também
            mantivemos as atividades do nosso curso, pois realizamos sites em
            WordPress.`}
            />

            <ThreeImageComponent
              title={"La Cremeria Fuerteventura"}
              imgSrc1={"/cones.jpg"}
              imgSrc2={"/geladoGrande.jpeg"}
              imgSrc3={"/crepe.jpeg"}
              text={`É uma das gelatarias italianas mais populares de FuerteVentura, isto
            porque tudo o que faz é artesanal. Excelente ponto turístico, pois
            contém uma ótima acessibilidade. A relação entre os estagiários e os
            tutores, foi boa, quando alguma de nós tínhamos algum problema eles
            estiveram sempre dispostos a ajudar, foram sempre alegres e bem
            educados. Aprendemos uma nova língua, como fazer cones artesanais e
            gelados, utilizamos as experiências retiradas dos serviços em que
            participamos com os chefes e ao longo do curso.`}
            />
          </div>
        </div>
      </Element>

      <Element name={"experiencia"}>
        <div className=" w-screen  flex flex-col">
          <div className="flex flex-col justify-center text-center items-center space-y-10">
            <h1 className="mt-10 font-bold text-5xl">Experiência</h1>
          </div>
        </div>
      </Element>
    </div>
  );
}

export default App;
