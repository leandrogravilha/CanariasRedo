import { useState } from "react";
import {
  Link as ScrollLink,
  scroller,
} from "react-scroll";

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
    if(show){
      handleShow();
    }
  };

  return (
    <header className="grid grid-cols-5 w-full fixed pt-5 text-[#159D77] text-3xl border-b-2 border-gray-200 pb-5 z-10 bg-white">
      {/* //stay hidden at small or below */}
      <div className="hidden col-span-2 lg:flex md:flex  sm:hidden xs:hidden ">
        <ul className="flex flex-row gap-8 items-center w-full justify-around">
          <li>
            <ScrollLink
              className="opacity-80 hover:opacity-100 hover:cursor-pointer"
              to="inicio"
              onClick={() => scrollToSection("inicio")}
            >
              Inicio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="opacity-80 hover:opacity-100 hover:cursor-pointer"
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
              className="opacity-80 hover:opacity-100 hover:cursor-pointer"
              to="experiencia"
              onClick={() => scrollToSection("experiencia")}
            >
              Experiência
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="opacity-80 hover:opacity-100 hover:cursor-pointer"
              to="experiencia"
              onClick={() => scrollToSection("experiencia")}
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
              <li className="  hover:bg-gray-100 mb-2 hover:cursor-pointer w-11/12 rounded-sm">
                <ScrollLink
                  to="inicio"
                  onClick={() => scrollToSection("inicio")}
                  className="ml-4"
                >
                  Inicio
                </ScrollLink>
              </li>
              <li className="  hover:bg-gray-100 mb-2 hover:cursor-pointer w-11/12 rounded-sm">
                <ScrollLink
                  to="estagios"
                  onClick={() => scrollToSection("estagios")}
                  className="ml-4"
                >
                  Estágios
                </ScrollLink>
              </li>
              <li className="  hover:bg-gray-100 mb-2 hover:cursor-pointer w-11/12 rounded-sm">
                <ScrollLink
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
      )}
    </header>
  );
}
