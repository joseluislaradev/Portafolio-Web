// Estilos base que TODOS los botones comparten (padding, fuente, bordes, etc.)
export const buttonBaseStyles =
  "font-bold py-2 px-4 rounded-2xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 ";

// Objeto que define los estilos específicos para cada variante
export const buttonVariantStyles = {
  primary:
    "text-lg md:text-xl lg:text-2xl flex items-center justify-center gap-4 bg-accent-primary-light dark:bg-accent-primary-dark hover:bg-hover-primary-light hover:scale-105 dark:hover:bg-hover-primary-dark text-text-button-light dark:text-text-button-dark  duration-200 transition-transform ease-in-out",
  ghost:
    "text-sm md:text-base lg:text-lg text-text-primary-light dark:text-text-primary-dark hover:text-accent-secondary-light  dark:hover:text-accent-secondary-dark transition-colors duration-200",
};
