export default function ThreeImageComponent({
  title,
  imgSrc1,
  imgSrc2,
  imgSrc3,
  text,
}) {
  return (
    <>
      <h1 className="pt-10 font-bold text-4xl">{title}</h1>
      <div className="grid grid-cols-3 lg:w-1/2 sm:w-3/4 gap-x-5">
        <img
          src={imgSrc1}
          alt="Corralejo"
          className="aspect-square col-span-1"
        />
        <img
          src={imgSrc2}
          alt="Corralejo"
          className="aspect-square col-span-1"
        />
        <img
          src={imgSrc3}
          alt="Corralejo"
          className="aspect-square col-span-1"
        />
      </div>

      <p className="lg:w-1/2 text-justify text-md lg:text-lg  sm:w-3/4">{text}</p>
    </>
  );
}
