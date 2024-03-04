export default function Footer() {
  return (
    <footer className="h-40 bg-[#0F7055] text-white">
      <div className="flex flex-row ml-10 my-10">
        <div className="w-1/2 flex flex-col">
          <h1 className="mb-2 font-bold">Contactos</h1>
          <p>leandrograv.ilha@gmail.com</p> <p>+351 925892826</p>
        </div>
        <div className="w-1/2 flex flex-col">
          <h1 className="mb-2 font-bold">Redes Sociais</h1>
          <div className="flex flex-row space-x-1">
            <a
              target="_blank"
              href="https://www.instagram.com/leandro.gravito"
              rel="noreferrer"
              aria-label="instagram"
            >
              <img src={"./instagram.png"} alt="" className="w-[32px]" />
            </a>
            <a
              target="_blank"
              href="https://github.com/leandrogravilha"
              rel="noreferrer"
              aria-label="github"
            >
              <img src={"./github.png"} alt="" className="w-[32px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
