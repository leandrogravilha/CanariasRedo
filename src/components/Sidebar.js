import { Link as ScrollLink } from "react-scroll";
export default function Sidebar({handleShow, scrollToSection}) {
  return (
    <div>
      <div className="absolute top-0 left-0  bg-black w-screen h-screen z-10 opacity-30"></div>
      <div className="absolute top-0 left-0 z-20 h-screen w-1/2   bg-white ease-in-out">
        <button
          className="ml-12 mt-16 hover:bg-gray-100 rounded-sm"
          onClick={handleShow}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>

        <ul className=" mt-10 ml-10">
          <li className="hover:bg-gray-100 mb-2 hover:cursor-pointer w-11/12 rounded-sm">
            <ScrollLink
              href="/inicio"
              to="inicio"
              onClick={() => scrollToSection("inicio")}
              className="ml-4"
            >
              Inicio
            </ScrollLink>
          </li>
          <li className="hover:bg-gray-100 mb-2 hover:cursor-pointer w-11/12 rounded-sm">
            <ScrollLink
              href="/estagios"
              to="estagios"
              onClick={() => scrollToSection("estagios")}
              className="ml-4"
            >
              Estágios
            </ScrollLink>
          </li>
          <li className="hover:bg-gray-100 mb-2 hover:cursor-pointer w-11/12 rounded-sm">
            <ScrollLink
              href="/experiencia"
              to="experiencia"
              onClick={() => scrollToSection("experiencia")}
              className="ml-4"
            >
              Experiência
            </ScrollLink>
          </li>
          <li className=" hover:bg-gray-100 mb-2 hover:cursor-pointer w-11/12 rounded-sm">
            <ScrollLink
              href="/locais"
              className="ml-4"
              to="locais"
              onClick={() => scrollToSection("locais")}
            >
              Locais
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
