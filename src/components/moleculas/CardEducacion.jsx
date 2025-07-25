
export function CardEducacion({
  key,
  titulo,
  descripcion,
  institucion,
  fecha,
}) {
  return (
    <div className="flex  w-full h-full gap-8" key={key}>
        <div className="flex justify-center">
          <div className="h-full w-0.5 bg-accent-primary-light/60 dark:bg-accent-primary-dark/60  relative">
            <div className="p-2 bg-accent-primary-light dark:bg-accent-primary-dark rounded-full absolute -translate-x-4/10 translate-y-3"></div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 w-full pb-14">
            <div className="flex flex-col gap-2 w-full">
              <h3 className="text-lg lg:text-xl font-semibold text-accent-primary-light dark:text-accent-primary-dark">
                  {titulo}
              </h3>
              <p className="w-full text-base lg:text-lg text-text-secondary-light dark:text-text-secondary-dark ">
                  {institucion}
              </p>
              <p className="text-text-subtitle-light dark:text-text-subtitle-dark">
                  {fecha}
              </p>
              <p className="text-base text-text-primary-light dark:text-text-primary-dark">
                  {descripcion}
              </p>
            </div>
        </div>
    </div>
  );
}