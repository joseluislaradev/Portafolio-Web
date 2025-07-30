export function TitulosSecciones({ titulo }) {
  return (
    <div className="flex justify-center flex-col items-center ">
      <h1 className="text-2xl font-bold md:text-4xl text-center mt-4 md:mt-8 mb-6 md:mb-12 ">
        {titulo}
        <div className="mt-4 w-[51px] h-2 bg-accent-secondary-light dark:bg-accent-secondary-dark mx-auto"></div>
      </h1>
    </div>
  );
}
