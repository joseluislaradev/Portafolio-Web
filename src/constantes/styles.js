// Estilos base que TODOS los botones comparten (padding, fuente, bordes, etc.)
export const buttonBaseStyles =
  "font-bold py-2 px-4 rounded-2xl transition-colors duration-200 ";

// Objeto que define los estilos específicos para cada variante
export const buttonVariantStyles = {
  primary:
    "text-lg md:text-xl lg:text-2xl flex items-center justify-center gap-2 md:gap-4 bg-accent-primary-light dark:bg-accent-primary-dark hover:bg-hover-primary-light hover:scale-105 dark:hover:bg-hover-primary-dark text-text-button-light dark:text-text-button-dark  duration-200 transition-transform ease-in-out",
  secondary:
    "flex items-center justify-center gap-4 bg-accent-secondary-light  text-text-button-light dark:text-text-button-dark hover:bg-[--color-hover-secondary-light] dark:bg-accent-secondary-dark  dark:hover:bg-[--color-hover-secondary-dark] hover:scale-105 transition-transform duration-200",
  outline:
    "text-lg md:text-xl lg:text-2xl flex items-center justify-center gap-2 md:gap-4 border-2 border-accent-primary-light dark:border-accent-primary-dark text-text-button-outline-light dark:text-text-button-outline-dark hover:bg-hover-primary-light dark:hover:bg-hover-primary-dark hover:scale-105 hover:text-text-button-light dark:hover:text-text-button-dark transition-all duration-200",
  ghost:
    "text-sm md:text-base lg:text-lg text-text-primary-light dark:text-text-primary-dark hover:text-accent-secondary-light  dark:hover:text-accent-secondary-dark transition-colors duration-200",
  ghostSecondary:
    "text-lg md:text-xl lg:text-2lg text-text-primary-light dark:text-text-primary-dark hover:text-accent-primary-light dark:hover:text-accent-primary-dark transition-colors duration-200",
  circle:
    "w-12 h-12 flex items-center justify-center rounded-full bg-accent-primary-light dark:bg-accent-primary-dark text-text-button-light dark:text-text-button-dark hover:bg-hover-primary-light dark:hover:bg-hover-primary-dark transition-colors duration-200",
};

export const alertBaseStyles = "p-4 rounded-lg";

export const alertStyles = {
  info: "bg-accent-primary-light/20 dark:bg-accent-primary-dark/20 flex mt-12 md:mt-16 gap-4 justify-center w-full",
};
