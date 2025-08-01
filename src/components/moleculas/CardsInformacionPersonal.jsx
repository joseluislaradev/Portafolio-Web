import { Icono } from "../atomos/Icono.jsx";

export function CardInformacionPersonal({ iconName, titulo, subtitulo }) {
  return (
    <div className="flex items-center gap-4 p-4 md:p-6 lg:p-8 bg-background-secondary-light/70 dark:bg-background-secondary-dark/70 rounded-2xl shadow-md min-w-[300px] md:min-w-[350px] lg:min-w-[400px] hover:shadow-lg  transition-all duration-100 ">
      <div className="p-4 bg-accent-secondary-light dark:bg-accent-secondary-dark rounded-full">
        <Icono nombre={iconName} className="text-text-button-light dark:text-text-button-dark" />
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-lg md:text-xl lg:text-2xl">{titulo}</p>
        <p className="text-base md:text-lg lg:text-xl">{subtitulo}</p>
      </div>
    </div>
  );
}
