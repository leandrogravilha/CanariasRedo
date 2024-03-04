import { useState } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import Sidebar from "./Sidebar";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -150,
    });
    if (show) {
      handleShow();
    }
  };

  return (
    <header className="grid grid-cols-5 w-full fixed pt-5 text-[#159d77c0] text-3xl border-b-2 border-gray-200 pb-5 z-10 bg-white">
      {/* //stay hidden at small or below */}
      <div className="hidden col-span-2 lg:flex md:flex  sm:hidden xs:hidden ">
        <ul className="flex flex-row gap-8 items-center w-full justify-around">
          <li>
            <ScrollLink
              href="/inicio"
              className="hover:text-[#437f6e] hover:cursor-pointer"
              to="inicio"
              onClick={() => scrollToSection("inicio")}
            >
              Inicio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              href="/estagios"
              className="hover:hover:text-[#437f6e] hover:cursor-pointer"
              to="estagios"
              onClick={() => scrollToSection("estagios")}
            >
              Estágios
            </ScrollLink>
          </li>
        </ul>
      </div>
      <div className="hidden col-span-1 justify-center w-full md:flex lg:flex sm:hidden xs:hidden">
        <img alt="logo" src="/Canarias_Logo.png" className="w-[128px]" />
      </div>
      <div className="hidden col-span-2 md:flex lg:flex sm:hidden xs:hidden">
        <ul className="flex flex-row gap-8 items-center w-full justify-around">
          <li>
            <ScrollLink
              href="/experiencia"
              className="hover:hover:text-[#437f6e] hover:cursor-pointer"
              to="experiencia"
              onClick={() => scrollToSection("experiencia")}
            >
              Experiência
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              href="/locais"
              className="hover:hover:text-[#437f6e]hover:cursor-pointer"
              to="experiencia"
              onClick={() => scrollToSection("Locais")}
            >
              Locais
            </ScrollLink>
          </li>
        </ul>
      </div>
      {/* //stay hidden at small or below */}
      <div className="col-span-1 flex lg:hidden md:hidden sm:flex xs:flex items-center justify-center align-middle text-center">
        <button onClick={handleShow}>
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="col-span-3 flex lg:hidden md:hidden sm:flex xs:flex">
        {/* deixar em branco */}
      </div>
      <div className="col-span-1 flex lg:hidden md:hidden sm:flex xs:flex p-2">
        <img alt="logo" src="/Canarias_Logo.png" className="w-[128px]" />
      </div>

      {show && (
        <Sidebar handleShow={handleShow} scrollToSection={scrollToSection}/>
      )}
    </header>
  );
}
